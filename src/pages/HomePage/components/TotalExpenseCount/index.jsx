import { useState, useEffect } from "react";
import "../styles/box.scss";
import { billingData } from "src/data";
import { RiBillLine } from "react-icons/ri";

const index = () => {
  const [totalExpenseCount, setTotalExpenseCount] = useState(0);

  useEffect(() => {
    const expenseCount = billingData.filter((bill) => bill.status === "Gider");
    setTotalExpenseCount(expenseCount.length);
  });

  return (
    <div className="boxContainer">
      <div className="titleContainer">
        <RiBillLine />
        <h2>Toplam Gider Fatura Sayısı</h2>
      </div>
      <div className="countContainer">
        <h3 className="totalBillingIncome">{totalExpenseCount}</h3>
        <h6>Fatura Kesildi</h6>
      </div>
      <div className="percentContainer">
        <h4 className="percent" style={{}}>
          20<span>%</span>
        </h4>
      </div>
    </div>
  );
};

export default index;
