import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export interface ICommonLink extends LinkProps {
  className?: string;
  children: ReactNode;
}

const CommonLink = ({ href, className, children, ...rest }: ICommonLink) => {
  return (
    <Link href={href} className={`hover:underline ${className}`} {...rest}>
      {children}
    </Link>
  );
};

export default CommonLink;
