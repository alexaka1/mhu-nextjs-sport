'use client';
import type { ReactNode } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function ZoomWrapper({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <TransformWrapper>
      <TransformComponent>{children}</TransformComponent>
    </TransformWrapper>
  );
}
