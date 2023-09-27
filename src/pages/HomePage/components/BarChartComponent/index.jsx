import { useContext, useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import CustomizeAxisTicks from "../CustomizeAxisTicks";
import "./barChartComponent.scss";
import { billingData } from "src/data";
import { UserContext } from "src/context/UserContext";

function index({ status }) {
  const { dateRange, department } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const startDate = dateRange[0].startDate;
    const endDate = dateRange[0].endDate;
    const diffDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    let groupedData = {};

    if (diffDays <= 7) {
      const daysOfWeek = [
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
        "Pazar"
      ];
      groupedData = daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: 0 }), {});

      billingData.forEach((item) => {
        const date = new Date(item.date);
        if (
          date >= startDate &&
          date <= endDate &&
          item.department === department &&
          item.status === status
        ) {
          const dayOfWeek = daysOfWeek[date.getDay()];
          groupedData[dayOfWeek] += item.amount;
        }
      });
    } else if (diffDays <= 30) {
      groupedData = {
        "1. Hafta": 0,
        "2. Hafta": 0,
        "3. Hafta": 0,
        "4. Hafta": 0
      };

      billingData.forEach((item) => {
        const date = new Date(item.date);
        if (
          date >= startDate &&
          date <= endDate &&
          item.department === department &&
          item.status === status
        ) {
          const weekOfMonth = Math.ceil(date.getDate() / 7);
          groupedData[`${weekOfMonth}. Hafta`] += item.amount;
        }
      });
    } else {
      const monthsOfYear = [
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
      groupedData = monthsOfYear.reduce(
        (acc, month) => ({ ...acc, [month]: 0 }),
        {}
      );

      billingData.forEach((item) => {
        const date = new Date(item.date);
        if (
          date >= startDate &&
          date <= endDate &&
          item.department === department &&
          item.status === status
        ) {
          const monthOfYear = monthsOfYear[date.getMonth()];
          groupedData[monthOfYear] += item.amount;
        }
      });
    }

    const dataArray = Object.entries(groupedData).map(([date, amount]) => ({
      date,
      amount
    }));
    setData(dataArray);
  }, [dateRange, department, status]);

  return (
    <>
      <h1
        className="title"
        style={{ color: status === "Gelir" ? "#ff8042" : "#8884d8" }}
      >
        {status === "Gelir" ? "Gelir Grafiği" : "Gider Grafiği"}
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="date" interval={0} tick={<CustomizeAxisTicks />} />
          <Tooltip formatter={(value) => [`Fiyat: ${value} ₺`]} />
          <Bar
            dataKey="amount"
            fill={status === "Gelir" ? "#ff8042" : "#8884d8"}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default index;
