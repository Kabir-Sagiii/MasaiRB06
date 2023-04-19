var cardStyle = {
  width: "250px",
  textAlign: "center",
  margin: "50px",
  boxShadow: "0 0 10px black",
  padding: "30px",
  height: "400px",
};
function Profile({ img, name, gender }) {
  //props = { img:"", name:"Ayush Verma",gender:male }
  return (
    <div style={cardStyle}>
      <img src={img} width="200" height="300" />
      <h2>{name}</h2>
      <p>{gender}</p>
    </div>
  );
}

export default Profile;
