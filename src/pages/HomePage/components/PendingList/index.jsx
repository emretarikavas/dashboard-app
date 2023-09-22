import React from "react";
import { billingData } from "src/data";
import "./pendinglist.scss";
import CompanyIcon from "src/components/Icons/CompanyIcon";
import { LuCalendarClock } from "react-icons/lu";
import { PiMoney } from "react-icons/pi";

const PendingList = () => {
  const unpaidBills = billingData
    .filter((bill) => bill.expense_status === "Ödenmedi")
    .sort(
      (a, b) =>
        new Date(b.date.split(" ").reverse().join("-")) -
        new Date(a.date.split(" ").reverse().join("-"))
    )
    .slice(0, 7);

  return (
    <>
      <h2 className="pending-title">Ödeme Bekleyenler</h2>

      <div className="pendingList">
        {unpaidBills.map((bill, index) => (
          <div key={index} className="list-item">
            <div className="left">
              <div className="with-icon">
                <CompanyIcon />
                <p>{bill.company}</p>
              </div>
              <div className="with-icon">
                <LuCalendarClock />
                <p>{bill.date}</p>
              </div>
            </div>
            <div className="right">
              <div className="with-icon">
                <PiMoney />
                <p>{bill.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PendingList;
