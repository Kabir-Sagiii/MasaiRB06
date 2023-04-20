import { useState } from "react";
import "./User.css";

function User(props) {
  const [users, setUsers] = useState({
    name: "Ayush Verma",
    gender: "male",
    email: "AyushVerma@gmail.com",
    image:
      "https://media.istockphoto.com/id/495827884/photo/you-are-the-creator-of-your-own-success.jpg?b=1&s=170667a&w=0&k=20&c=JSN5VBNnjwRO_nJHytfHAfU-35GgTlWtd4wlkIEAFJU=",
  });
  const [style, setStyle] = useState({
    // style = { bgColor:"white", textColor:"black"}
    bgColor: "white",
    textColor: "black",
    text: "Check to Switch Dark Mode",
  });

  const changeTheme = (event) => {
    // alert(event.target.checked);
    if (event.target.checked) {
      setStyle({
        bgColor: "black",
        textColor: "white",
        text: "Uncheck to Switch Light Mode",
      });
    } else {
      setStyle({
        bgColor: "white",
        textColor: "black",
        text: "Check to Switch Dark Mode",
      });
    }
  };
  return (
    <div>
      <div id="container">
        <div className="leftPanel">
          <img src={users.image} width="100%" height="100%" />
        </div>

        <div
          className="rightPanel"
          style={{ backgroundColor: style.bgColor, color: style.textColor }}
        >
          <dl>
            <dt>
              <b>User Name</b>
            </dt>
            <dd>{users.name}</dd>
            <dt>
              <b>Gender</b>
            </dt>
            <dd>{users.gender}</dd>
            <dt>
              <b>Email Id</b>
            </dt>
            <dd>{users.email}</dd>
            <dt>
              <b>Description</b>
            </dt>
            <dd>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
              alias sequi ipsam fuga magnam voluptatibus nostrum repudiandae sit
              culpa est ducimus a vitae dolorem ex dignissimos, sed et omnis
              deserunt iste vero eum eaque. Recusandae magnam impedit iure
              aliquid quisquam?
            </dd>
          </dl>
          <input type="checkbox" onChange={changeTheme} />
          {style.text}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setUsers({
              name: "Ayush Verma",
              gender: "male",
              email: "AyushVerma@gmail.com",
              image:
                "https://media.istockphoto.com/id/495827884/photo/you-are-the-creator-of-your-own-success.jpg?b=1&s=170667a&w=0&k=20&c=JSN5VBNnjwRO_nJHytfHAfU-35GgTlWtd4wlkIEAFJU=",
            });
          }}
        >
          Ayush Verma
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => {
            setUsers({
              name: "Kajal Jaiswal",
              gender: "female",
              email: "KajalJaiswal@gmail.com",
              image:
                "https://media.gettyimages.com/id/1301595516/photo/business-woman-at-office-stock-photo.jpg?s=612x612&w=gi&k=20&c=oH3xVZ3LnuwIc-z2yvNB1LR1YudMND-pjDANWTyVee8=",
            });
          }}
        >
          Kajal Jaiswal
        </button>
      </div>
    </div>
  );
}

export default User;
