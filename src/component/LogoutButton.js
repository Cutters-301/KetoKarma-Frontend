import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GoSignOut } from "react-icons/go";

const LogoutButton = () => {
  const { logout , isAuthenticated } = useAuth0();

  return (
    isAuthenticated &&
    <button  style={{marginRight:"100%",position:"absolute",marginTop:"30px",marginLeft:"20px", borderBlockStyle:"groove" , backgroundColor:"#fff9c4" }} onClick={() => logout({ returnTo: window.location.origin })}>
    <GoSignOut /> Log out
    </button>
  );
};

export default LogoutButton;