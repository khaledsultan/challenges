import React from "react";

export default function Counter({ type, number }) {
  return (
    <>
      <p className="Counter">
        <strong>
          {type} <span> {number} </span>
        </strong>
      </p>
    </>
  );
}
