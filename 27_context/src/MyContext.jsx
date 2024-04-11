import { useState, createContext, useContext } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
export const UserProvider = (props) => {
  const [user] = useState({
    name: "John",
    email: "john@example.com",
    dob: "01/01/2000",
  });
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
