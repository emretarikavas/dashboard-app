import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./totalexpensecount.scss";
import { billingData } from "src/data";
import { RiBillLine } from "react-icons/ri";

const index = () => {
  const [totalExpenseBills, setTotalExpenseBills] = useState(0);

  useEffect(() => {
    const expenseBills = billingData.filter((bill) => bill.status === "Gider");
    setTotalExpenseBills(expenseBills.length);
  }, []);
  return (
    <div>
      <div className="titleContainer">
        <RiBillLine />
        <h2>Toplam Gider Fatura Sayısı</h2>
      </div>
      <h3 className="totalBillingIncome">{totalExpenseBills}</h3>
      <h4 className="percent">40%</h4>
    </div>
  );
};

export default index;
