import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className=" bg-blue-600 hover:bg-primary text-white font-semibold py-2 px-4 rounded-full" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;