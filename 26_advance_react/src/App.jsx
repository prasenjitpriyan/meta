import DessertsList from "./components/DessertsList";
import FormExample from "./components/FormExample";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div>
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <h2>Creating a Form component in React</h2>
      <FormExample />
    </div>
  );
}

export default App;
