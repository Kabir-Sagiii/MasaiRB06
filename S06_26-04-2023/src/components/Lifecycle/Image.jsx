import { useState, useEffect } from "react";

function Image(props) {
  const [name, setName] = useState("Image Comp");

  const [img, setImg] = useState(
    "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
  );

  useEffect(() => {
    console.log("useEffect's Callback is Called");
  }, [name, img]);

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} width="300" height="300" />
      <br />
      <button
        onClick={() => {
          setImg(
            "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
          );
        }}
      >
        React
      </button>
      <button
        onClick={() => {
          setImg("https://static.javatpoint.com/core/images/java-logo1.png");
        }}
      >
        Java
      </button>

      <button
        onClick={() => {
          setImg(
            "data:image/png;base64,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"
          );
        }}
      >
        Node JS
      </button>
      <button
        onClick={() => {
          setName("Masai Image");
        }}
      >
        Update Heading
      </button>
    </div>
  );
}

export default Image;
