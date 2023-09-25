import { useState, useEffect, useContext } from "react";
import "../styles/box.scss";
import { billingData } from "src/data";
import { RiBillLine } from "react-icons/ri";
import { numberFormat } from "src/utils/format";
import { UserContext } from "src/context/UserContext";
const index = () => {
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const { department } = useContext(UserContext);

  useEffect(() => {
    let total = 0;
    billingData
      .filter(
        (bill) => bill.status === "Gelir" && bill.department === department
      )
      .forEach((bill) => {
        total += bill.amount;
      });
    setTotalIncomeAmount(total);
  }, [department]);

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