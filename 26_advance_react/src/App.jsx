import DessertsList from "./components/DessertsList";
import FeedbackForm from "./components/FeedbackForm";
import FormExample from "./components/FormExample";
import SignUp from "./components/SignUp";

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
    <div className="bg-red-300 min-h-svh">
      <h2 className="text-white font-bold text-2xl text-center uppercase">
        List of low calorie desserts
      </h2>
      <DessertsList data={desserts} />
      <h2 className="text-white font-bold text-2xl text-center uppercase">
        Creating a Form component in React
      </h2>
      <FormExample />
      <h2 className="text-white font-bold text-2xl text-center uppercase">
        Create a Feedback Controlled Form Component
      </h2>
      <FeedbackForm />
      <h2 className="text-white font-bold text-2xl text-center uppercase">
        Create a registration form
      </h2>
      <SignUp />
    </div>
  );
}

export default App;
