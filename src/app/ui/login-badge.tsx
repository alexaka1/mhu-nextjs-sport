import { type PropsWithChildren } from 'react';
import { Badge } from '@/components/ui/badge';

export function LoginBadge({ children }: Readonly<PropsWithChildren>) {
  return (
    <Badge variant={'secondary'} className={'bg-hun-green absolute -top-2 -right-0.5 z-10 text-white capitalize'}>
      {children}
    </Badge>
  );
}
