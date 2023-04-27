import { useState, useEffect } from "react";

function Title(props) {
  const [state, setState] = useState("Title - 1");
  useEffect(() => {
    console.log(localStorage.getItem("name"));
  }, []);
  return (
    <div>
      <h2>{state}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias
        quia deleniti aliquid delectus perferendis porro doloremque corporis,
        odio iusto, numquam nobis expedita accusantium. Eveniet a deserunt iusto
        facilis sequi dolorum quia voluptatum? Voluptatum iste facere aperiam
        magnam quod cum libero, qui quibusdam! Vero doloremque fugit error ex
        nihil corrupti. Mollitia adipisci quibusdam impedit veritatis velit sunt
        blanditiis, ea soluta atque ut fugit in eligendi reiciendis sapiente
        nostrum consectetur saepe tenetur possimus. Deleniti quia dolorum
        ducimus nostrum iure explicabo hic rerum obcaecati natus illum earum nam
        inventore eaque voluptates corrupti recusandae sit maiores, nisi
        voluptatum facere. Accusantium, modi incidunt! Vitae.
      </p>
      <button
        onClick={() => {
          setState("New Title Updated");
        }}
      >
        Change Title
      </button>
    </div>
  );
}

export default Title;
