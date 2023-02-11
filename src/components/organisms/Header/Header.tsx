import CommonLink from '@components/atoms/link/CommonLink';
import React from 'react';
import AuthButton from '../AuthButton/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header = ({ className, ...rest }: IHeader) => {
  return (
    <header
      {...rest}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <CommonLink href="/about">About</CommonLink>
        <CommonLink href="/">Store</CommonLink>
      </div>
      <div className="space-x-5 m-5">
        <CommonLink href="/" className="hidden sm:inline">
          Gmail
        </CommonLink>
        <CommonLink href="/" className="hidden sm:inline">
          Images
        </CommonLink>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
