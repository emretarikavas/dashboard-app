import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./totalexpensecount.scss";
import { billingData } from "src/data";
const index = () => {
  const [totalExpenseBills, setTotalExpenseBills] = useState(0);

  useEffect(() => {
    const expenseBills = billingData.filter((bill) => bill.status === "Gider");
    setTotalExpenseBills(expenseBills.length);
  }, []);
  return (
    <div>
      <h2>Toplam Gelir Fatura Sayısı</h2>
      <h3 className="totalBillingIncome">{totalExpenseBills}</h3>
      <Link to="/billings">Hepsini Göster</Link>
      <h4 className="percent">%</h4>
    </div>
  );
};

export default index;
