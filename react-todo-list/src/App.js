import MyTitle from "./components/MyTitle";
import MyList from "./components/MyList";

function App() {
  const title = "My Gaming List"
  const games = [
    {
      id: 1,
      name: "Bloodborne",
      isplat: true,
    },
    {
      id: 1,
      name: "Predecessor",
      isplat: false,
    },
    {
      id: 1,
      name: "Smite",
      isplat: true,
    },
    {
      id: 1,
      name: "Hitman",
      isplat: true,
    },
    {
      id: 1,
      name: "Sekiro",
      isplat: true,
    },
    {
      id: 1,
      name: "Call of Duty",
      isplat: false,
    },
    {
      id: 1,
      name: "GTA V",
      isplat: false,
    },
        {
      id: 1,
      name: "Battlefield 6",
      isplat: false,
    },
  ]

  return (
    <div>
      <MyTitle title = {title} />
      <MyList items={games}/>
    </div>
  );
}

export default App;

