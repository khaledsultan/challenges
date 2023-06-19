import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Sum valueA={2} valueB={4} />
    </h1>
  );
}

function Sum({ valueA, valueB }) {
  let result = valueA + valueB;
  return result;
}
