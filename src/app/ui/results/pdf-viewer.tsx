'use client';

import { useState, useEffect, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

export default function PdfViewer({ file }: Readonly<{ file: string }>) {
  const [page, setPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);
  const { pdfDocument } = usePdf({
    file,
    page,
    canvasRef,
    workerSrc: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs`,
  });

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  if (!pdfDocument) {
    return <div className={`flex flex-col items-center justify-center`}>Betöltés...</div>;
  }

  return (
    <div className={`flex flex-col items-center justify-center`}>
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="flex flex-row items-center justify-center gap-4">
            <li>
              <button
                className="disabled:cursor-not-allowed disabled:text-opacity-50 disabled:brightness-50"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Előző oldal
              </button>
            </li>
            <li>
              <button
                className="disabled:cursor-not-allowed disabled:text-opacity-50 disabled:brightness-50"
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
              >
                Következő oldal
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
