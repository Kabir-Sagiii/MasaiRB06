import { useState } from "react";
const style = {
  width: "400px",
  padding: "30px",
  margin: "50px auto",
  boxShadow: "0 0 10px black",
};
function FormComp(props) {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    city: "",
  });

  const handleUserData = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const printData = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div style={style}>
      <h2>React Form</h2>
      <form onSubmit={printData}>
        <div style={{ marginTop: "10px" }}>
          <input
            name="name"
            type="text"
            placeholder="Enter UserName"
            onChange={handleUserData}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleUserData}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            name="email"
            type="Email"
            placeholder="Enter Email"
            onChange={handleUserData}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleUserData}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleUserData}
          />
          Female
        </div>
        <div style={{ marginTop: "10px" }}>
          <select name="city" onChange={handleUserData}>
            <option>Select City</option>
            <option>Delhi</option>
            <option>Hyderabad</option>
            <option>Mumbai</option>
            <option>Gurugram</option>
          </select>
        </div>
        <div style={{ marginTop: "10px" }}>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default FormComp;
