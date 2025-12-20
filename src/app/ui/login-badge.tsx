import { type PropsWithChildren } from 'react';

type LoginBadgeProps = {
  type: 'recommended' | 'lastUsed';
};

export function LoginBadge({ children }: Readonly<PropsWithChildren<LoginBadgeProps>>) {
  return (
    <span
      className={`bg-hun-green absolute -top-2 -right-0.5 z-10 rounded-full px-2.5 py-0.5 text-sm font-semibold whitespace-nowrap text-white capitalize`}
    >
      {children}
    </span>
  );
}
