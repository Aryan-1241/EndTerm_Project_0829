import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>check out these epic destinations</h1>
      <div className="cards__containers">
        <div className="cards__wrapper">
          <ul classname="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="explore the hidden waterfall deep inside the Amazon"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="travel through bali"
              label="luxary"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="travel through bali"
              label="luxary"
              path="/services"
            />
          </ul>
          <ul classname="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="explore the hidden waterfall deep inside the Amazon"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="travel through bali"
              label="luxary"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="travel through bali"
              label="luxary"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
