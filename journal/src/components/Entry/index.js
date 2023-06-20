import React from "react";
import star from "../imges/star.svg";

export default function Entry({ date, title, text }) {
  return (
    <>
      <section className="Entry">
        <p>{date}</p>
        <h3>
          <strong>"{title}"</strong>
        </h3>
        {/* <img src="star.svg" alt="star"> */}
        <p>{text}</p>
        <hr />
      </section>
    </>
  );
}
