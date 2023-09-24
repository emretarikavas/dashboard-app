import { useState, useEffect } from "react";
import { billingData } from "src/data";
import "../styles/box.scss";
import { RiBillLine } from "react-icons/ri";
const index = () => {
  const [totalIncomeCount, setTotalIncomeCount] = useState(0);

  useEffect(() => {
    const incomeCount = billingData.filter((bill) => bill.status === "Gelir");
    setTotalIncomeCount(incomeCount.length);
  });
  return (
    <div className="boxContainer">
      <div className="titleContainer">
        <RiBillLine />
        <h2>Toplam Gelir Fatura Sayısı</h2>
      </div>
      <div className="countContainer">
        <h3 className="totalBillingIncome">{totalIncomeCount}</h3>
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
