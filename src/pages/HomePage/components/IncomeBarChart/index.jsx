import { useContext } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./incomeBarChart.scss";
import { billingData } from "src/data";
import { UserContext } from "src/context/UserContext";

function index() {
  const { department } = useContext(UserContext);

  const filteredData = billingData.filter(
    (bill) => bill.status === "Gelir" && bill.department === department
  );

  return (
    <div className="barChartBox">
      <h1>Gelir Grafiği</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={filteredData}>
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
