import "./homePage2.scss";
import { UserContext } from "src/context/UserContext";
import { useContext } from "react";
import BarChartComponent from "src/pages/HomePage/components/BarChartComponent";
import DropdownBox from "./components/DropdownBox";
import TotalBox from "./components/TotalBox";
import LineChartComponent from "../HomePage/components/LineChartComponent";
const index = () => {
  const { dateRange } = useContext(UserContext);
  const startDate = dateRange[0].startDate.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long"
  });
  const endDate = dateRange[0].endDate.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long"
  });
  return (
    <header className="homePage">
      <div className="header">
        <DropdownBox
          title="Departman"
          initialContent="Departman Seç"
        ></DropdownBox>
        <DropdownBox
          title="Dönem"
          initialContent="Tarih Aralığı Seç"
        ></DropdownBox>
        <DropdownBox
          title="Tarih Aralığı"
          initialContent={`${startDate} - ${endDate}`}
        ></DropdownBox>
      </div>

      <main className="main">
        <TotalBox status="Gelir" />
        <TotalBox status="Gider" expenseStatus="Ödenmedi" />
        <TotalBox status="Gider" expenseStatus="Ödendi" />
      </main>
      <section className="lineChartContainer">
        <LineChartComponent />
      </section>
      <section className="barChartsContainers">
        <BarChartComponent status="Gelir" />
        <BarChartComponent status="Gider" />
      </section>
    </header>
  );
};

export default index;
