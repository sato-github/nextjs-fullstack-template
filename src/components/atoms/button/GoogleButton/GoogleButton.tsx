import { ReactNode } from 'react';

export type GoogleButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
};

const GoogleButton = ({ children, type, ...rest }: GoogleButtonProps) => {
  return (
    <button type={type} className="btn-primary" {...rest}>
      {children}
    </button>
  );
};

export default GoogleButton;
