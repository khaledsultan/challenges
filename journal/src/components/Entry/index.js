import React, { useState } from "react";
import { ReactComponent as Star } from "../imges/star.svg";
import { ReactComponent as FilledStar } from "../imges/star-filled.svg";

export default function Entry({ key, date, motto, notes }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggle() {
    setIsFavorite(!isFavorite);
  }


  return (
        <>
        <section className="Entry">
         <p>{date}</p>
         <h3>
        <strong>"{motto}"</strong>
        </h3>
        {isFavorite ? (
        <FilledStar onClick={handleToggle} />
      ) : (
        <Star onClick={handleToggle} />
        )}
        <p>{notes}</p>
        <hr />
      
      </section>
    </>
  );
}

