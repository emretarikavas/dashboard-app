// src/context/useFakeData.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const FakeDataContext = createContext();

export const FakeDataProvider = ({ children }) => {
  const [billingData, setBillingData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("/src/data/billingData.json").then((response) => {
      setBillingData(response.data);
    });
  }, []);

  const filterData = (days) => {
    const now = Date.now();
    const incomeBills = billingData.filter((bill) => {
      const billDate = new Date(bill.date);
      const differenceInDays = Math.floor(
        (now - billDate) / (1000 * 60 * 60 * 24)
      );
      return bill.status === "Gelir" && differenceInDays <= days;
    });
    setFilteredData(incomeBills);
  };

  return (
    <FakeDataContext.Provider value={{ billingData, filteredData, filterData }}>
      {children}
    </FakeDataContext.Provider>
  );
};

export const useFakeData = () => {
  return useContext(FakeDataContext);
};
