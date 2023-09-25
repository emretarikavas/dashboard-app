import "./incomelist.scss";
import { useEffect, useState, useContext } from "react";
import { billingData } from "src/data";
import CompanyIcon from "src/components/Icons/CompanyIcon";
import { LuCalendarClock } from "react-icons/lu";
import { PiMoney } from "react-icons/pi";
import { numberFormat } from "src/utils/format";
import { UserContext } from "src/context/UserContext";
const IncomeList = () => {
  const [topIncomeData, setTopIncomeData] = useState([]);
  const { department } = useContext(UserContext);
  useEffect(() => {
    const incomeData = billingData.filter(
      (bill) => bill.status === "Gelir" && bill.department === department
    );

    incomeData.sort((a, b) => {
      const dateA = new Date(a.date.split(" ").reverse().join("-"));
      const dateB = new Date(b.date.split(" ").reverse().join("-"));
      return dateB - dateA;
    });

    setTopIncomeData(incomeData.slice(0, 7));
  }, [department]);

  return (
    <>
      <h2 className="income-title">Son Gelir Faturaları</h2>

      <div className="pendingList">
        {topIncomeData.map((bill, index) => (
          <div key={index} className="list-item">
            <div className="left">
              <div className="with-icon">
                <CompanyIcon fill="#ff8042" />
                <p>{bill.company}</p>
              </div>
              <div className="with-iconn">
                <LuCalendarClock />
                <p>{bill.date}</p>
              </div>
            </div>
            <div className="right">
              <div className="with-iconn">
                <PiMoney />
                <p>{numberFormat(bill.amount)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IncomeList;
