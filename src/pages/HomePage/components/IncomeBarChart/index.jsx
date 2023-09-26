import { useContext, useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import "./incomeBarChart.scss";
import { billingData } from "src/data";
import { UserContext } from "src/context/UserContext";

function index() {
  const { department, dateRange } = useContext(UserContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let groupedData = [];

    if (diffDays <= 7) {
      // Group data by day
      const days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
      ];
      for (let i = 0; i < 7; i++) {
        const dayData = billingData.filter((bill) => {
          const billDate = new Date(bill.date);
          return (
            bill.status === "Gelir" &&
            bill.department === department &&
            billDate.getDay() === i &&
            billDate >= startDate &&
            billDate <= endDate
          );
        });
        groupedData.push({
          name: days[i],
          amount: dayData.reduce((total, bill) => total + bill.amount, 0)
        });
      }
    } else if (diffDays <= 30) {
      // Group data by week
      for (let i = 0; i < 4; i++) {
        const weekData = billingData.filter((bill) => {
          const billDate = new Date(bill.date);
          return (
            bill.status === "Gelir" &&
            bill.department === department &&
            billDate >=
              new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000 * i) &&
            billDate <
              new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000 * (i + 1))
          );
        });
        groupedData.push({
          name: `Hafta ${i + 1}`,
          amount: weekData.reduce((total, bill) => total + bill.amount, 0)
        });
      }
    } else {
      // Group data by month
      const months = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
      ];
      for (let i = 0; i < 12; i++) {
        const monthData = billingData.filter((bill) => {
          const billDate = new Date(bill.date);
          return (
            bill.status === "Gelir" &&
            bill.department === department &&
            billDate.getMonth() === i &&
            billDate >= startDate &&
            billDate <= endDate
          );
        });
        groupedData.push({
          name: months[i],
          amount: monthData.reduce((total, bill) => total + bill.amount, 0)
        });
      }
    }

    setFilteredData(groupedData);
  }, [department, dateRange]);

  return (
    <div className="barChartBox">
      <h1>Gelir Grafiği</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={filteredData}>
            <XAxis dataKey="name" />
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
              formatter={(value) => [`Fiyat: ${value} ₺`]}
            />
            <Bar fill={"#ff8042"} dataKey="amount" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default index;
