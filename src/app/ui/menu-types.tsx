import type { ReactNode } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SimpleLink = { href: string; children: ReactNode };
export type DropDownLinks = {
  title: string;
  items: { name: string; description: string; href: string; icon: IconDefinition }[];
  callsToAction: { name: string; href: string; icon: IconDefinition }[];
};
export type Menu =
  | {
      type: 'simple';
      node: SimpleLink;
    }
  | {
      type: 'dialog';
      node: DropDownLinks;
    };
