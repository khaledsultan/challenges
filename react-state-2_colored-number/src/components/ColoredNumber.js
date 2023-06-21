// import React, { useState } from "react";
export default function ColoredNumber({ value }) {
  return (
    // console.log(value)
    <h2 style={{ color: `hsl(${230 - (value / 100) * 230}deg 100% 50%)` }}>
      {value}
    </h2>
  );
}
