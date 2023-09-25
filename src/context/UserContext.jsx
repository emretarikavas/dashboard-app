import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [department, setDepartment] = useState(null);

  return (
    <UserContext.Provider value={{ department, setDepartment }}>
      {children}
    </UserContext.Provider>
  );
};
