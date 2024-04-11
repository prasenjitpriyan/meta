import "./App.css";
import { useUser } from "./MyContext";
import CarParents from "./components/CarParents";

const LoggedInUser = () => {
  const { user } = useUser();

  return (
    <p>
      Hello
      <span> {user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
        vero! Sunt ut minus, labore quae id laborum praesentium molestias magnam
        maxime ad voluptatibus ullam optio modi a ducimus corrupti explicabo?
        Nulla accusamus provident saepe tempore perferendis possimus voluptatum
        vitae facilis vero laborum, recusandae tenetur distinctio suscipit nam
        amet quisquam repellendus natus eum eligendi perspiciatis dolor,
        obcaecati iste aspernatur! Debitis, maiores. Consequatur facilis ab
        ullam sint necessitatibus ea facere voluptates animi veniam, totam
        dolorem minima labore, eaque magni tenetur, quia culpa. Dolorem, iure
        illo nemo officiis itaque corrupti dolores asperiores ullam. Officia
        quisquam corporis aliquam obcaecati magni hic illo tempora neque quam
        recusandae maiores molestias nobis accusamus consequuntur in placeat
        consequatur necessitatibus aut vitae, mollitia ex error unde deleniti.
        Quidem, aliquam. Minima aliquam possimus quaerat dolorum recusandae odio
        reiciendis perferendis assumenda quos ducimus consequatur et expedita
        veritatis harum dolorem sit, repudiandae aut earum facere ullam?
        Debitis, dolorum adipisci! Totam, eaque saepe.
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CarParents />
      <hr />
      <Header />
      <Page />
    </div>
  );
};

export default App;
