import { useContext, useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import CustomizeAxisTicks from "../CustomizeAxisTicks";
import { billingData } from "src/data";
import { UserContext } from "src/context/UserContext";

function LineChartComponent() {
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
      groupedData = daysOfWeek.reduce(
        (acc, day) => ({ ...acc, [day]: { Gelir: 0, Gider: 0 } }),
        {}
      );

      billingData.forEach((item) => {
        const date = new Date(item.date);
        if (
          date >= startDate &&
          date <= endDate &&
          item.department === department
        ) {
          const dayOfWeek = daysOfWeek[date.getDay()];
          groupedData[dayOfWeek][item.status] += item.amount;
        }
      });
    } else if (diffDays <= 30) {
      groupedData = {
        "1. Hafta": { Gelir: 0, Gider: 0 },
        "2. Hafta": { Gelir: 0, Gider: 0 },
        "3. Hafta": { Gelir: 0, Gider: 0 },
        "4. Hafta": { Gelir: 0, Gider: 0 }
      };

      billingData.forEach((item) => {
        const date = new Date(item.date);
        if (
          date >= startDate &&
          date <= endDate &&
          item.department === department
        ) {
          const weekOfMonth = Math.ceil(date.getDate() / 7);
          groupedData[`${weekOfMonth}. Hafta`][item.status] += item.amount;
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
        (acc, month) => ({ ...acc, [month]: { Gelir: 0, Gider: 0 } }),
        {}
      );

      billingData.forEach((item) => {
        const date = new Date(item.date);
        if (
          date >= startDate &&
          date <= endDate &&
          item.department === department
        ) {
          const monthOfYear = monthsOfYear[date.getMonth()];
          groupedData[monthOfYear][item.status] += item.amount;
        }
      });
    }

    const dataArray = Object.entries(groupedData).map(([date, amount]) => ({
      date,
      ...amount
    }));
    setData(dataArray);
  }, [dateRange, department]);

  return (
    <>
      <h1 className="title">Gelir ve Gider Grafiği</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" interval={0} tick={<CustomizeAxisTicks />} />
          <Tooltip
            formatter={(value, name) => [
              `${name}: ${value} ₺`,
              "Tarih: " + name
            ]}
          />
          <Line type="monotone" dataKey="Gelir" stroke="#ff8042" />
          <Line type="monotone" dataKey="Gider" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineChartComponent;
