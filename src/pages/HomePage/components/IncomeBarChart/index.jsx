import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./incomeBarChart.scss";

function index() {
  return (
    <div className="barChartBox">
      <h1>Gelir Grafiği</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar fill={"#ff8042"} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default index;
