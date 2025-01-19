'use client';
import { type ReactNode, useEffect, useState } from 'react';
import { read, utils } from 'xlsx';
import { captureException } from '@sentry/nextjs';
import {
  type ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortDirection,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { env } from 'process';
import { useQuery } from '@tanstack/react-query';

const columnHelper = createColumnHelper<unknown>();
const initial = [
  {
    results: 'Betöltés alatt...',
  },
];
const initialColumn = columnHelper.accessor('results', {
  id: 'results',
  cell: (info) => info.getValue(),
  header: 'Eredmények',
  enableSorting: false,
});

const sortIcons: Record<SortDirection | 'false', ReactNode> = {
  false: null,
  asc: (
    <>
      {' '}
      <FontAwesomeIcon icon={faSortUp} />
    </>
  ),
  desc: (
    <>
      {' '}
      <FontAwesomeIcon icon={faSortDown} />
    </>
  ),
};

export default function XlsxTable({
  fileUrl,
  id,
}: Readonly<{
  fileUrl: string;
  id: string;
}>) {
  const [getData, setData] = useState<Record<string, ReactNode>[]>([...initial]);
  const [columns, setColumns] = useState<ColumnDef<unknown>[]>([initialColumn as never]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const { status, data, error } = useQuery({
    queryKey: [fileUrl],
    queryFn: async () => {
      try {
        const file = await (await fetch(fileUrl)).arrayBuffer();
        const wb = read(file);
        const sheetName = wb.SheetNames[0];
        if (sheetName != null) {
          const ws = wb.Sheets[sheetName];
          if (ws != null) {
            return utils.sheet_to_json<Record<string, ReactNode>>(ws, {});
          }
        }
      } catch (e) {
        captureException(e);
      }
      return null;
    },
    staleTime: 5 * 60 * 1000,
  });
  useEffect(() => {
    if (data?.[0]) {
      setData(data);
      setColumns(
        Object.keys(data[0]).map(
          (key) =>
            columnHelper.accessor(key, {
              id: key,
              cell: (info) => info.getValue(),
              sortUndefined: 'last',
            }) as never,
        ),
      );
    }
  }, [data]);
  const table = useReactTable({
    data: getData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: env.NODE_ENV === 'development',
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  switch (status) {
    case 'error':
      return <div className={`mx-auto p-6 text-bg-contrast`}>Nem sikerült betölteni az adatokat: {error.message}</div>;
    case 'pending':
      return <div className={`mx-auto animate-pulse p-6 text-bg-contrast`}>Betöltés...</div>;
  }

  return (
    <>
      <table id={id} className={`relative w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400`}>
        <thead
          className={`sticky top-0 text-xs uppercase bg-gray-50 text-gray-700 lg:top-[unset] lg:table-header-group dark:bg-gray-700 dark:text-gray-400`}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    scope="col"
                    className={`px-6 py-3 align-middle bg-gray-50 dark:bg-gray-700 dark:text-bg-contrast`}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort() ?
                            'flex cursor-pointer select-none flex-row items-center justify-center gap-0.5 align-middle'
                          : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort() ?
                            header.column.getNextSortingOrder() === 'asc' ?
                              'Növekvő sorrendben'
                            : header.column.getNextSortingOrder() === 'desc' ?
                              'Csökkenő sorrendben'
                            : 'Rendezés törlése'
                          : undefined
                        }
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {sortIcons[header.column.getIsSorted() || 'false'] ??
                          (header.column.getCanSort() ?
                            <>
                              {' '}
                              <FontAwesomeIcon icon={faSort} />
                            </>
                          : null)}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 100)
            .map((row) => {
              return (
                <tr
                  className={`border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800`}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td scope="row" className="px-6 py-4" key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
