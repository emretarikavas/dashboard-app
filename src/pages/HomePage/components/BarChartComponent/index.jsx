import { useContext, useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import CustomizeAxisTicks from "../CustomizeAxisTicks";
import "./barChartComponent.scss";
import { billingData } from "src/data";
import { UserContext } from "src/context/UserContext";
import { numberFormat } from "src/utils/format";

function CustomTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    const fill = payload[0].fill;
    return (
      <div className="custom-tooltip" style={{ color: fill }}>
        <p className="label">{`Tarih: ${label}`}</p>
        <p className="intro">{`Fiyat: ${numberFormat(payload[0].value)}`}</p>
        <p className="desc">{`Toplam fatura sayısı: ${payload[0].payload.count}`}</p>
      </div>
    );
  }

  return null;
}

function index({ status }) {
  const { dateRange, department } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const startDate = dateRange[0].startDate;
    let endDate = new Date(dateRange[0].endDate);
    endDate.setHours(23, 59, 59, 999);
    const diffDays =
      Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1;

    let groupedData = {};

    const daysOfWeek = [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar"
    ];

    if (diffDays <= 7) {
      groupedData = daysOfWeek.reduce(
        (acc, day) => ({ ...acc, [day]: { amount: 0, count: 0 } }),
        {}
      );

      billingData.forEach((item) => {
        let date = new Date(item.date);
        date = new Date(date.getTime() + 3 * 60 * 60 * 1000); // Türkiye'nin saat dilimine göre ayarla
        if (
          date >= startDate &&
          date <= endDate &&
          item.department === department &&
          item.status === status
        ) {
          let dayOfWeekIndex = date.getDay() - 1;
          if (dayOfWeekIndex < 0) dayOfWeekIndex = 6; // Eğer getDay 0 (Pazar) döndürürse, dayOfWeekIndex'i 6 yap
          const dayOfWeek = daysOfWeek[dayOfWeekIndex];
          groupedData[dayOfWeek] = groupedData[dayOfWeek] || {
            amount: 0,
            count: 0
          };
          groupedData[dayOfWeek].amount += item.amount;
          groupedData[dayOfWeek].count += 1;
        }
      });
    } else if (diffDays <= 30) {
      groupedData = {
        "1. Hafta": { amount: 0, count: 0 },
        "2. Hafta": { amount: 0, count: 0 },
        "3. Hafta": { amount: 0, count: 0 },
        "4. Hafta": { amount: 0, count: 0 }
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
          groupedData[`${weekOfMonth}. Hafta`] = groupedData[
            `${weekOfMonth}. Hafta`
          ] || { amount: 0, count: 0 };
          groupedData[`${weekOfMonth}. Hafta`].amount += item.amount;
          groupedData[`${weekOfMonth}. Hafta`].count += 1;
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
        (acc, month) => ({ ...acc, [month]: { amount: 0, count: 0 } }),
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
          groupedData[monthOfYear] = groupedData[monthOfYear] || {
            amount: 0,
            count: 0
          };
          groupedData[monthOfYear].amount += item.amount;
          groupedData[monthOfYear].count += 1;
        }
      });
    }

    const dataArray = Object.entries(groupedData).map(
      ([date, { amount, count }]) => ({ date, amount, count })
    );
    setData(dataArray);
  }, [dateRange, department, status]);

  return (
    <div className="chartContainer">
      <h1 className="title">
        {status === "Gelir" ? "Gelir Grafiği" : "Gider Grafiği"}
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="date" interval={0} tick={<CustomizeAxisTicks />} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="amount"
            fill={status === "Gelir" ? "#6CD894" : "#EE575D"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default index;
