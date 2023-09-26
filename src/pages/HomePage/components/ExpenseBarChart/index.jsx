import { useContext } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./expenseBarChart.scss";
import { billingData } from "src/data";
import { UserContext } from "src/context/UserContext";

function index() {
  const { department } = useContext(UserContext);

  const filteredData = billingData.filter(
    (bill) => bill.status === "Gider" && bill.department === department
  );

  return (
    <div className="barChartBox">
      <h1>Gider Grafiği</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={filteredData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
              formatter={(value) => [`Fiyat: ${value} ₺`]}
            />
            <Bar fill={"#8f8bff"} dataKey="amount" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default index;
