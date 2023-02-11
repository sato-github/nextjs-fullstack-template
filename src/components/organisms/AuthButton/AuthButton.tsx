import CommonButton from '@components/atoms/button/CommonButton';
import AuthContext from '@context/auth/AuthContext';
import { useContext } from 'react';

export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton = ({ className, ...rest }: IAuthButton) => {
  const { authenticated, login, logOut } = useContext(AuthContext);

  return (
    <CommonButton onClick={authenticated ? logOut : login} {...rest}>
      {authenticated ? 'Sign Out' : 'Sign In'}
    </CommonButton>
  );
};

export default AuthButton;
