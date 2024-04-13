import "./App.css";
import Manipulating from "./components/Manipulating";

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <div>
      <div className="overlay" />
      <div className="alert">{children}</div>
    </div>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

function App() {
  return (
    <div>
      <header>Little Lemon Restaurant</header>
      <hr />
      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure you want to delete your account? This action cannot be
          undone.
        </p>
        <DeleteButton />
      </Alert>
      <Manipulating />
    </div>
  );
}

export default App;
