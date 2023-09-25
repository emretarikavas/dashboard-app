import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [department, setDepartment] = useState(null);
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null
  });

  return (
    <UserContext.Provider
      value={{
        department,
        setDepartment,
        dateRange,
        setDateRange
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
