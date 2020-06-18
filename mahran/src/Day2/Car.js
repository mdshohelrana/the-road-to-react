import React from "react";
import "./Car.css";

export default function Car({ car }) {
  const { name, model, image } = car;
  return (
    <div className="card">
      <div>Car Name: {name}</div>
      <div>Car Model: {model}</div>
      <img
        className="car-img"
        style={{ width: "200px", height: "200px" }}
        src={image}
      />
    </div>
  );
}
