import React from "react";
import "./TShirt.css";

const TShirt = (props) => {
  const { name, picture, price, gender } = props.tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default TShirt;
