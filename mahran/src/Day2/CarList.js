import React from "react";
import Car from "./Car";
import "./CarList.css";

export default function CarList({ cars }) {
  return (
    <div className="grid-3">
      {cars.map((car) => {
        return <Car key={car.id} car={car} />;
      })}
    </div>
  );
}
