import { type PropsWithChildren } from 'react';

type LoginBadgeProps = {
  type: 'recommended' | 'lastUsed';
};

export function LoginBadge({ children }: Readonly<PropsWithChildren<LoginBadgeProps>>) {
  return (
    <span
      className={`absolute -right-0.5 -top-2 z-10 whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm font-semibold capitalize bg-hun-green text-bg-contrast`}
    >
      {children}
    </span>
  );
}
