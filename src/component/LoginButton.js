import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import{GoSignIn} from 'react-icons/go';


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button style={{marginTop:"3.7%" ,marginLeft:"30px", borderBlockStyle:"groove" , backgroundColor:"#fff9c4"}}  onClick={() => loginWithRedirect()}>Log In <GoSignIn />
      </button>
    )
  );
};

export default LoginButton;
