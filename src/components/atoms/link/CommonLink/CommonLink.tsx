import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export type CommonLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
};

const CommonLink = ({
  href,
  className,
  children,
  ...rest
}: CommonLinkProps) => {
  return (
    <Link href={href} className={`hover:underline ${className}`} {...rest}>
      {children}
    </Link>
  );
};

export default CommonLink;
