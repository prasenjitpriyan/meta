import { useState, useEffect } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("deserts")) {
      setData(["cake", "ice creem", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);
  return render(data);
};

export const DesertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/deserts"
      render={(data) => <p>{data.length} deserts</p>}
    />
  );
};
export const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};
