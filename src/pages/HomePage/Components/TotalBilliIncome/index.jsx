// src/pages/HomePage/Components/TotalBilliIcome/index.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFakeData } from "src/context/useFakeData";
import "./totalbillIncome.scss";

const index = ({ days }) => {
  const { filteredData, filterData } = useFakeData();

  useEffect(() => {
    filterData(days);
  }, [days, filterData]);

  return (
    <div>
      <h2>Toplam Gelir Fatura Sayısı</h2>
      <h3 className="totalBillingIncome">{filteredData.length}</h3>
      <Link to="/billings">Hepsini Göster</Link>
      <h4 className="percent">%</h4>
    </div>
  );
};

export default index;