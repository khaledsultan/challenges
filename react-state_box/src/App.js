import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  //const [isToggle, setIsToggle] = useState("Active ");

  function handleClick() {
    setIsActive(!isActive);
    // setIsToggle(!isToggle);

    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActive ? "Active " : "Deactive"}</button>
    </main>
  );
}
