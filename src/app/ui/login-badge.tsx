type LoginBadgeProps = {
  type: 'recommended' | 'lastUsed';
  text: string;
};

const BADGE_BASE_CLASSES =
  'absolute -right-0.5 -top-2 z-10 whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm font-semibold capitalize text-bg-contrast';

export function LoginBadge({ type, text }: Readonly<LoginBadgeProps>) {
  const bgColor = type === 'recommended' ? 'bg-hun-green' : 'bg-secondary';

  return <span className={`${BADGE_BASE_CLASSES} ${bgColor}`}>{text}</span>;
}
