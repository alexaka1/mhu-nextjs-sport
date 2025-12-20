'use client';
import React, { type ReactNode } from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import { ButtonGroup } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import { Undo2, ZoomIn, ZoomOut } from 'lucide-react';

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <ButtonGroup className={`place-self-center`} aria-label="Nagyítás vezérlés">
      <Button
        size={'icon'}
        variant={'default'}
        title="Nagyítás"
        onClick={() => {
          zoomIn();
        }}
      >
        <ZoomIn />
      </Button>
      <Button
        size={'icon'}
        variant={'default'}
        title="Kicsinyítés"
        onClick={() => {
          zoomOut();
        }}
      >
        <ZoomOut />
      </Button>
      <Button
        size={'icon'}
        variant={'default'}
        title="Visszaállítás"
        onClick={() => {
          resetTransform();
        }}
      >
        <Undo2 />
      </Button>
    </ButtonGroup>
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
