import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./totalincomecount.scss";
import { billingData } from "src/data";
const index = () => {
  const [totalIncomeBills, setTotalIncomeBills] = useState(0);

  useEffect(() => {
    const incomeBills = billingData.filter((bill) => bill.status === "Gelir");
    setTotalIncomeBills(incomeBills.length);
  }, []);
  return (
    <div>
      <h2>Toplam Gelir Fatura Sayısı</h2>
      <h3 className="totalBillingIncome">{totalIncomeBills}</h3>
      <Link to="/billings">Hepsini Göster</Link>
      <h4 className="percent">%</h4>
    </div>
  );
};

export default index;
