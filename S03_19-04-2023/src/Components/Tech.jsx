import { useState } from "react";

function Tech(props) {
  const [image, setImage] = useState(
    "https://th.bing.com/th/id/R.127b470a1814ca2ae06d9f40df34f190?rik=E2vOR%2f6JU%2bSncw&riu=http%3a%2f%2fblog.addthiscdn.com%2fwp-content%2fuploads%2f2014%2f11%2faddthis-react-flux-javascript-scaling.png&ehk=4C5%2fCryhwvgIM7FR54PAiugU6Xu9y7U3hL0PS9u%2bmag%3d&risl=&pid=ImgRaw&r=0"
  );

  const changeImageToReact = () => {
    setImage(
      "https://th.bing.com/th/id/R.127b470a1814ca2ae06d9f40df34f190?rik=E2vOR%2f6JU%2bSncw&riu=http%3a%2f%2fblog.addthiscdn.com%2fwp-content%2fuploads%2f2014%2f11%2faddthis-react-flux-javascript-scaling.png&ehk=4C5%2fCryhwvgIM7FR54PAiugU6Xu9y7U3hL0PS9u%2bmag%3d&risl=&pid=ImgRaw&r=0"
    );
  };

  const changeImageToAngular = () => {
    setImage(
      "https://th.bing.com/th/id/OIP.81pofYf27yzC8rtNfUHVdAHaCA?pid=ImgDet&rs=1"
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={image} width="800" height="300" />
      <br />
      <button onClick={changeImageToReact}>React</button>&nbsp;&nbsp;
      <button onClick={changeImageToAngular}>Angular</button>
    </div>
  );
}

export default Tech;
