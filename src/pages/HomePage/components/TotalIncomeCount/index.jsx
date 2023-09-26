import { useState, useEffect, useContext } from "react";
import { billingData } from "src/data";
import "../styles/box.scss";
import { RiBillLine } from "react-icons/ri";
import { UserContext } from "src/context/UserContext";
const index = () => {
  const [totalIncomeCount, setTotalIncomeCount] = useState(0);

  const { department, dateRange, isCountInDateRange } = useContext(UserContext);

  useEffect(() => {
    const incomeCount = billingData.filter((bill) =>
      isCountInDateRange(bill, "Gelir")
    );
    setTotalIncomeCount(incomeCount.length);
  }, [department, dateRange]);
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
