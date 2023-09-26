import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [department, setDepartment] = useState(null);
  const [userId, setUserId] = useState(null);

  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(year, month, 1),
      endDate: new Date(year, month + 1, 0),
      key: "selection"
    }
  ]);

  const calculateTotalAmount = (bills, status) => {
    let endDate = new Date(dateRange[0].endDate);
    endDate.setHours(23, 59, 59, 999);

    return bills.reduce((total, bill) => {
      if (
        bill.status === status &&
        bill.department === department &&
        new Date(bill.date) >= dateRange[0].startDate &&
        new Date(bill.date) <= endDate
      ) {
        return total + bill.amount;
      } else {
        return total;
      }
    }, 0);
  };

  const isCountInDateRange = (bill, status) => {
    let endDate = new Date(dateRange[0].endDate);
    endDate.setHours(23, 59, 59, 999);

    return (
      bill.status === status &&
      bill.department === department &&
      new Date(bill.date) >= dateRange[0].startDate &&
      new Date(bill.date) <= endDate
    );
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        department,
        setDepartment,
        dateRange,
        setDateRange,
        isCountInDateRange,
        calculateTotalAmount
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
