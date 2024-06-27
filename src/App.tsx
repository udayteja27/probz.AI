import React from "react";
import ChartComponent from "./components/ChartComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 style={{ color: "rgb(98, 98, 185)" }}>Charting Application</h1>
      <ChartComponent />
    </div>
  );
};

export default App;
