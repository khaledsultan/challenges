import React from "react";
import { ReactComponent as Star } from "../imges/star.svg";

export default function Entry({ date, title, text }) {
  return (
    <>
      <section className="Entry">
        <p>{date}</p>
        <h3>
          <strong>"{title}"</strong>
        </h3>
        <Star />
        <p>{text}</p>
        <hr />
      </section>
    </>
  );
}
