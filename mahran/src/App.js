import React from "react";
import Class_component from "./Day1/Class_compnent";
import Function_component from "./Day1/Function_component";

function App() {
  return (
    <div className="App">
      <Class_component count={0} />
      <Function_component count={-1} />
    </div>
  );
}

export default App;
