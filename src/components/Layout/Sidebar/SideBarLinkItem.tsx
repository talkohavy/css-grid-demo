import clsx from 'clsx';
import { Link } from 'react-router';

type SideBarLinkItemProps = {
  to: string;
  text: string;
  isActive?: boolean;
};

export default function SideBarLinkItem(props: SideBarLinkItemProps) {
  const { to, text, isActive } = props;

  return (
    <Link
      to={to}
      className={clsx(
        'p-1 border rounded-md text-lg hover:text-red-500 active:text-red-400 animate-appear',
        isActive ? 'text-blue-700 border-black dark:border-transparent dark:text-yellow-400' : 'border-transparent',
      )}
    >
      {text}
    </Link>
  );
}
