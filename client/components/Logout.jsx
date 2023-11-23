import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="bg-black px-6 py-3 mt-5 rounded" onClick={() => logout({ logoutParams: { returnTo: "https://propertyverse.vercel.app/" } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;