import Card from "./components/Card";

export default function App() {
  const fruits = [{
    id: 1337,
    name: '🍌 Banana',
    color: 'yellow',
  },
  {
    id: 1338,
    name: '🍎 Apple',
    color: 'red',
  },
  {
    id: 1339,
    name: '🍈 Watermelon',
    color: 'green',
  },
  {
    id: 1340,
    name: '🥝 kiwi',
    color: 'green',
  },
  {
    id: 1341,
    name: '🥭 mango',
    color: 'orange',
  }];

  return (
    <div className="app">
      {fruits.map(({id ,name ,color}) => (
        <Card  key={id} name={name} color={color} />
      ))}
    </div>
  );
}
