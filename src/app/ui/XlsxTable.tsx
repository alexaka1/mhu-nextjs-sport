'use client';
import { useEffect, useState } from 'react';
import { utils, read } from 'xlsx';

const filename = 'https://utfs.io/f/527ff756-5125-43e4-a7a8-f9e69c212950-1adb5m.xlsx';

export default function XlsxTable() {
  const [data, setData] = useState<Record<string, never>[]>([]);
  useEffect(() => {
    async function fetchData() {
      const file = await (await fetch(filename)).arrayBuffer();
      const wb = read(file);
      const json = utils.sheet_to_json<Record<string, never>>(wb.Sheets[wb.SheetNames[0] ?? ''] as never, {});
      setData(json);
      // const single = json[0] as Record<string, string>;
      // Object.keys(single).forEach((key) => {
      //   console.log(key, single[key]);
      // });
      // console.log(json.slice(0, 3));
      // console.log(JSON.stringify(json.slice(0, 3)));
    }

    void fetchData();
  }, []);
  return (
    <table>
      <thead>
        {data.length > 0 && (
          <tr>
            {Object.keys(data[0]!).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.keys(row).map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
