import { ReactNode } from 'react';

export type CommonButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
};

const CommonButton = ({ children, type, ...rest }: CommonButtonProps) => {
  return (
    <button
      type={type}
      className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white"
      {...rest}
    >
      {children}
    </button>
  );
};

export default CommonButton;
