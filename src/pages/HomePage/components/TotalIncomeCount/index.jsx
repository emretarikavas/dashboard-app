import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./totalincomecount.scss";
import { billingData } from "src/data";
import { RiBillLine } from "react-icons/ri";
const index = () => {
  const [totalIncomeBills, setTotalIncomeBills] = useState(0);

  useEffect(() => {
    const incomeBills = billingData.filter((bill) => bill.status === "Gelir");
    setTotalIncomeBills(incomeBills.length);
  }, []);
  return (
    <div className="boxContainer">
      <div className="titleContainer">
        <RiBillLine />
        <h2>Toplam Gelir Fatura Sayısı</h2>
      </div>
      <div className="countContainer">
        <h3 className="totalBillingIncome">{totalIncomeBills}</h3>
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
