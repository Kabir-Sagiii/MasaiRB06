import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
var navStyle = {
  backgroundColor: "black",
  padding: "20px",
  textAlign: "Center",
};
var aStyle = {
  color: "white",
  textDecoration: "none",
  marginRight: "50px",
};
function Nav() {
  let { setIsloggedIn } = useContext(AuthContext);
  return (
    <div style={navStyle}>
      <a style={aStyle} href="#">
        Home
      </a>
      <a style={aStyle} href="#">
        Profile
      </a>
      <a style={aStyle} href="#">
        Products
      </a>
      <a style={aStyle} href="#">
        Help
      </a>
      <button
        onClick={() => {
          setIsloggedIn(false);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Nav;
