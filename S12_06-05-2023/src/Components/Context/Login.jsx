import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth";

function Login({ login }) {
  let { setIsloggedIn } = useContext(AuthContext);
  let [user, setUser] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    console.log(process.env.REACT_APP_USERNAME);
  }, []);
  const handleAuth = (event) => {
    event.preventDefault();
    //write the logic to check credentials
    if (
      user.name === process.env.REACT_APP_USERNAME &&
      user.password === process.env.REACT_APP_PASSWORD
    ) {
      setIsloggedIn(true);
    } else {
      alert(" Enter Proper Credentials");
    }
  };
  return (
    <div>
      <h2>Login Component</h2>
      <form onSubmit={handleAuth}>
        <input
          type="text"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;
