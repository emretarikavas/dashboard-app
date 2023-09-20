// HomePage.jsx

import Logout from "src/components/Logout";

import { useEffect, useState } from "react";
import { useFakeData } from "src/context/useFakeData";
function HomePage() {
  const [relevantBills, setRelevantBills] = useState([]);

  const { billing } = useFakeData();

  useEffect(() => {
    const department = localStorage.getItem("department");
    const filteredBills = billing.filter(
      (bill) => bill.department === department
    );
    setRelevantBills(filteredBills);
  }, []);

  return (
    <>
      <div
        style={{
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1 style={{ fontSize: 40 }}>HomePage</h1>

        <Logout />
      </div>
      {relevantBills.map((bill) => (
        <div key={bill.id}>
          <h2>{bill.company}</h2>
          <p>{bill.date}</p>
          <p>{bill.amount}</p>
          <p>{bill.status}</p>
        </div>
      ))}
    </>
  );
}

export default HomePage;
