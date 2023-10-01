import { useContext, useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import CustomizeAxisTicks from "../CustomizeAxisTicks";
import { billingData } from "src/data";
import { numberFormat } from "src/utils/format";
import { UserContext } from "src/context/UserContext";
import "./lineChartComponent.scss";

function CustomTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Tarih : ${label}`}</p>
        <p className="income">{`Gelir : ${numberFormat(payload[0].value)}`}</p>
        <p className="expense">{`Gider : ${numberFormat(payload[1].value)}`}</p>
      </div>
    );
  }
}

function LineChartComponent() {
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
    <div className="chartContainer">
      <h1 className="title">Gelir/Gider Grafiği</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, bottom: 20, left: 30 }}
        >
          <XAxis
            dataKey="date"
            interval={0}
            domain={["auto", "auto"]}
            height={60}
            angle={-20}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="Gelir"
            stroke="#6cd894"
            dot={<circle r={5} />}
          />
          <Line
            type="monotone"
            dataKey="Gider"
            stroke="#ee575d"
            dot={<circle r={5} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
