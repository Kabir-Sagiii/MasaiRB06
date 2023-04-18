import "./App.css";
import Header from "./Header";
import Main from "./Components/Main";
import Profile from "./Components/Profile";

var info = [
  {
    img: "https://us.123rf.com/450wm/thelivephotos/thelivephotos2210/thelivephotos221000069/192916941-portrait-of-a-positive-successful-caucasian-bearded-business-man-in-a-suit-seo-consultant-broker.jpg?ver=6",
    name: "Kabir Sagar",
    gender: "male",
  },
  {
    img: "https://thumbs.dreamstime.com/b/confident-professional-young-woman-blue-blouse-pointing-finger-upper-left-corner-looking-camera-persuade-customer-make-174846578.jpg",
    name: "Sneha Sharma",
    gender: "female",
  },
  {
    img: "https://thumbs.dreamstime.com/b/professional-modern-woman-closeup-portrait-young-beautiful-confident-pink-shirt-gray-suit-arms-crossed-folded-smiling-indoors-55345174.jpg",
    name: "Riya Singh",
    gender: "female",
  },
];

// function App() {
//   var showProfiles = false;
//   return (
//     <div className="App">
//       {showProfiles ? (
//         <div style={{ display: "flex" }}>
//           {info.map((user, index) => {
//             return (
//               <Profile
//                 key={index + 1}
//                 img={user.img}
//                 name={user.name}
//                 gender={user.gender}
//               />
//             );
//           })}
//         </div>
//       ) : (
//         <Main />
//       )}
//     </div>
//   );
// }

function App() {
  var showProfiles = false;
  if (showProfiles) {
    return (
      <div style={{ display: "flex" }}>
        {info.map((user, index) => {
          return (
            <Profile
              key={index + 1}
              img={user.img}
              name={user.name}
              gender={user.gender}
            />
          );
        })}
      </div>
    );
  } else {
    return <Main />;
  }
}

export default App;
