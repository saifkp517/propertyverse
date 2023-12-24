import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IconButton } from '@material-tailwind/react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <>
      {/* <button
        className=''
        
      >
        Log Out
      </button> */}
      <IconButton
        size='sm'
        color='white'
        onClick={() =>
          logout({
            logoutParams: { returnTo: 'https://www.propertyverse.co.in/' },
          })
        }
      >
        <i className='fas fa-sign-out-alt'></i>
      </IconButton>
    </>
  );
};

export default LogoutButton;
