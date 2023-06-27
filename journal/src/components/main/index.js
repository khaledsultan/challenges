import Button from "../Button";
import Entry from "../Entry";
import Counter from "../counter";

export default function Main() {
  return (
    <>
      <h1>NEW ENTRY</h1>

      <form class="form" data-js="form">
        <label for="motto">Motto</label>
        <input type="text" name="motto" id="motto" data-js="motto" />

        <label for="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          cols="50"
          rows="4"
          required
          data-js="notes"
        ></textarea>

        <Button></Button>
      </form>
      <section className="Counters">
        <Counter type="All Entires" number="3" className="Counter"></Counter>
        <Counter type="Favorites" number="1" className="Counter"></Counter>
      </section>
      <>
     {entries.map(({ id, date,motto,notes }) => (
       <Entry key={id} date={date} motto={motto}  notes={notes}/>
     ))}
   </>
       {/* <Entry
        
        date="FEB 27,2028"
        title="That's life in the city"
        text=" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu"
      ></Entry>
      <Entry
        
        date="FEB 26,2028 "
        title="That's life in the city"
        text=" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu"
      ></Entry>  */}

    </>
  );
}


const entries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];
