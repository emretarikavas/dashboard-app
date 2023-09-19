// HomePage.jsx
import { useEffect, useState } from "react";
import { billingData } from "src/data/index";
function HomePage() {
  const [relevantBills, setRelevantBills] = useState([]);

  useEffect(() => {
    const department = localStorage.getItem("department");
    const filteredBills = billingData.filter(
      (bill) => bill.department === department
    );
    setRelevantBills(filteredBills);
  }, []);

  return (
    <div>
      {relevantBills.map((bill) => (
        <div key={bill.id}>
          <h2>{bill.company}</h2>
          <p>{bill.amount}</p>
          <p>{bill.status}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
