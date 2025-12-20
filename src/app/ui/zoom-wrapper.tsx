'use client';
import React, { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons/faRotateLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button
      className={`bg-primary border-secondary hover:bg-accent focus-visible:ring-ring inline-flex size-10 items-center justify-center gap-2 rounded-md border text-sm font-medium whitespace-nowrap text-white ring-white transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`}
      {...props}
    >
      {children}
    </button>
  );
};

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="grid auto-cols-min grid-flow-col gap-2 place-self-center">
      <IconButton
        title="Nagyítás"
        onClick={() => {
          zoomIn();
        }}
      >
        <FontAwesomeIcon icon={faPlus} className={`size-6`} />
      </IconButton>
      <IconButton
        title="Kicsinyítés"
        onClick={() => {
          zoomOut();
        }}
      >
        <FontAwesomeIcon icon={faMinus} className={`size-6`} />
      </IconButton>
      <IconButton
        title="Visszaállítás"
        onClick={() => {
          resetTransform();
        }}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={`size-6`} />
      </IconButton>
    </div>
  );
};
export default function ZoomWrapper({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className={`mx-auto max-w-[90%]`}>
      <TransformWrapper>
        {() => (
          <>
            <Controls />
            <div className={`border-primary rounded-lg border border-solid p-1`}>
              <TransformComponent>{children}</TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
