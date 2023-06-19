import "./styles.css";
// import Greeting from "../component/greeting";

export default function App() {
  return (
    <h1>
      <Greeting name="Marcell" />
    </h1>
  );
}

function Greeting({ name }) {
  const coaches = ["Marcell", "Gimena"];
  return <div>Hello, {coaches.includes(name) ? "Coach!" : "Stranger"}!</div>;
  // return <div>Hello, {name === "Marcell" ? "Coach!" : "Stranger"}!</div>;
}
