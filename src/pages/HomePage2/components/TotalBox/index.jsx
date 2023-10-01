import React, { useContext } from "react";
import IncomeIcon from "src/components/Icons/IncomeIcon";
import ExpenseIcon from "src/components/Icons/ExpenseIcon";
import PendingIcon from "src/components/Icons/PendingIcon";
import billingData from "src/data/billingData.json";
import { numberFormat } from "src/utils/format";
import { UserContext } from "src/context/UserContext";
import "./totalBox.scss";

const TotalBox = ({ status, expenseStatus }) => {
  const { department } = useContext(UserContext);

  const filteredData = billingData.filter(
    (item) =>
      (department === "Müdür" || item.department === department) &&
      item.status === status &&
      (expenseStatus ? item.expense_status === expenseStatus : true)
  );

  const totalAmount = filteredData.reduce(
    (total, item) => total + item.amount,
    0
  );
  const totalCount = filteredData.length;

  let title, Icon;
  if (status === "Gelir") {
    title = "Toplam Kesilen Fatura";
    Icon = IncomeIcon;
  } else if (status === "Gider" && expenseStatus === "Ödenmedi") {
    title = "Toplam Ödenmemiş Fatura";
    Icon = PendingIcon;
  } else if (status === "Gider" && expenseStatus === "Ödendi") {
    title = "Toplam Ödenen Fatura";
    Icon = ExpenseIcon;
  }

  return (
    <div className="totalBox">
      <div className="totalBoxHeader">
        <h3>{title}</h3>
        <Icon />
      </div>
      <div className="totalBoxContent">
        <h5>{numberFormat(totalAmount)} ₺</h5>
        <h6>{totalCount} Adet</h6>
      </div>
    </div>
  );
};

export default TotalBox;
