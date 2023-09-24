import { useState, useEffect } from "react";
import "../styles/box.scss";
import { billingData } from "src/data";
import { RiBillLine } from "react-icons/ri";
import { numberFormat } from "src/utils/format";

const index = () => {
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    billingData
      .filter((bill) => bill.status === "Gelir")
      .forEach((bill) => {
        total += bill.amount;
      });
    setTotalIncomeAmount(total);
  }, []);

  return (
    <div className="boxContainer">
      <div className="titleContainer">
        <RiBillLine />
        <h2>Toplam Gelir Fatura Fiyatı</h2>
      </div>
      <div className="countContainer">
        <h3 className="totalBillingIncome">
          {numberFormat(totalIncomeAmount)}
        </h3>
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
