import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import { Link } from "react-router-dom";
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
let routesData = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/products",
    title: "Products",
  },
  {
    path: "/service",
    title: "Service",
  },
  {
    path: "/help",
    title: "Help",
  },
];
function Nav() {
  let { setIsloggedIn } = useContext(AuthContext);
  return (
    <div style={navStyle}>
      {routesData.map((route) => {
        return (
          <Link to={route.path} style={aStyle}>
            {route.title}
          </Link>
        );
      })}
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
