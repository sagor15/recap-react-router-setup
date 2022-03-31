import React from "react";
import useTShirts from "../../Hooks/useTShirt";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";

import "./Home.css";

const Home = () => {
  const [TShirts, setTShirts] = useTShirts();

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {TShirts.map((tshirt) => (
          <TShirt key={tshirt._id} tshirt={tshirt}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
