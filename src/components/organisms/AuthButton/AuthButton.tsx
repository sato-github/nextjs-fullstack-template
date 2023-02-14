import { CommonButton } from '@components/atoms';
import AuthContext from '@context/auth/AuthContext';
import { useContext } from 'react';

export type AuthButtonProps = React.ComponentPropsWithoutRef<'button'> & {};

const AuthButton = ({ ...rest }: AuthButtonProps) => {
  const { authenticated, login, logOut } = useContext(AuthContext);

  return (
    <CommonButton onClick={authenticated ? logOut : login} {...rest}>
      {authenticated ? 'Sign Out' : 'Sign In'}
    </CommonButton>
  );
};

export default AuthButton;
