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
      <Entry
        className="Entry"
        date="FEB 27,2028"
        title="That's life in the city"
        text=" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu"
      ></Entry>
      <Entry
        className="Entry"
        date="FEB 26,2028 "
        title="That's life in the city"
        text=" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu"
      ></Entry>
    </>
  );
}
