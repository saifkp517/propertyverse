import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@material-tailwind/react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button size='sm' color='white' onClick={() => loginWithRedirect()}>
      <i className='fa-solid fa-right-to-bracket'></i>
      <span className='ml-2'>Login</span>
    </Button>
  );
};

export default LoginButton;
