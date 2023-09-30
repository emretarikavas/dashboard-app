import React, { useContext } from "react";
import IncomeIcon from "src/components/Icons/IncomeIcon";
import ExpenseIcon from "src/components/Icons/ExpenseIcon";
import billingData from "src/data/billingData.json";
import { numberFormat } from "src/utils/format";
import { UserContext } from "src/context/UserContext";
import "./totalBox.scss";

const index = ({ status }) => {
  const { department } = useContext(UserContext);

  const filteredData = billingData.filter(
    (item) =>
      (department === "Müdür" || item.department === department) &&
      item.status === status
  );

  const totalAmount = filteredData.reduce(
    (total, item) => total + item.amount,
    0
  );
  const totalCount = filteredData.length;

  return (
    <div className="totalBox">
      <div className="totalBoxHeader">
        <h3>
          {status === "Gelir"
            ? "Toplam Kesilen Fatura"
            : "Toplam Ödenen Fatura"}
        </h3>
        {status === "Gelir" ? <IncomeIcon /> : <ExpenseIcon />}
      </div>
      <div className="totalBoxContent">
        <h5>{numberFormat(totalAmount)} ₺</h5>
        <h6>{totalCount} Adet</h6>
      </div>
    </div>
  );
};

export default index;
