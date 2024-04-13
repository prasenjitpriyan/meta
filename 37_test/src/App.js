import "./App.css";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form Submitted");
  };
  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
