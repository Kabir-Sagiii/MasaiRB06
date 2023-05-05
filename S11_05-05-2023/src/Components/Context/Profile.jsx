import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Profile(props) {
  const [searchparams, setSearchParams] = useSearchParams();
  const addQueryParams = () => {
    setSearchParams({
      name: "masai",
      city: "Banglore",
    });
  };
  return (
    <div>
      <h2>Profile Component</h2>
      <button onClick={addQueryParams}>Add Query Params</button>
      <button
        onClick={() => {
          setSearchParams({
            name: "React",
            city: "Banglore",
          });
        }}
      >
        Update query Params
      </button>
      <Link to="/help?name=sagar&city=Delhi">
        <button>Switch to Help</button>
      </Link>
    </div>
  );
}

export default Profile;
