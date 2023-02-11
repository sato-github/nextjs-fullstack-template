import { ReactNode } from 'react';

export interface IGoogleButton
  extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

const GoogleButton = ({ children, type, ...rest }: IGoogleButton) => {
  return (
    <button type={type} className="btn-primary" {...rest}>
      {children}
    </button>
  );
};

export default GoogleButton;
