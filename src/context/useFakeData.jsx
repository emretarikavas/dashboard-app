import { createContext, useContext, useState } from "react";
import { billingData, usersData } from "src/data";

const FakeDataContext = createContext();

export const FakeDataProvider = ({ children }) => {
  const [users] = useState(usersData);
  const [billing] = useState(billingData);

  return (
    <FakeDataContext.Provider value={{ users, billing }}>
      {children}
    </FakeDataContext.Provider>
  );
};

export const useFakeData = () => {
  return useContext(FakeDataContext);
};
