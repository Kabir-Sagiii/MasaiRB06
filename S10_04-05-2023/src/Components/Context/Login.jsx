import { useContext } from "react";
import { AuthContext } from "./Auth";

function Login({ login }) {
  let { setIsloggedIn } = useContext(AuthContext);
  const handleAuth = (event) => {
    event.preventDefault();
    //write the logic to check credentials

    setIsloggedIn(true);
  };
  return (
    <div>
      <h2>Login Component</h2>
      <form onSubmit={handleAuth}>
        <input type="text" />
        <br />
        <br />
        <input type="password" />
        <br />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;
