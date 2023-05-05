import { createContext, useState } from "react";

export let AuthContext = createContext();

function AuthProviderComp({ children }) {
  const [isloggedin, setIsloggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isloggedin, setIsloggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProviderComp;
