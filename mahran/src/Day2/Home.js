import React from "react";
import CarList from "./CarList";

export default function home() {
  const cars = [
    {
      id: 1,
      name: "BMW",
      model: "X1",
      image: "./images/x1.jpg",
    },
    {
      id: 2,
      name: "BMW",
      model: "X2",
      image: "./images/x2.jpg",
    },
    {
      id: 3,
      name: "BMW",
      model: "X3",
      image: "./images/x1.jpg",
    },
    {
      id: 4,
      name: "Audi",
      model: "A1",
      image: "./images/a1.jpg",
    },
    {
      id: 5,
      name: "Audi",
      model: "A2",
      image: "./images/a2.jpg",
    },
    {
      id: 6,
      name: "Audi",
      model: "A3",
      image: "./images/a3.jpg",
    },
  ];
  return (
    <div>
      <h1 style={{ "text-align": "center" }}>Select your Car</h1>
      <CarList cars={cars} />
    </div>
  );
}
