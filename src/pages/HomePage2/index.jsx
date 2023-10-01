import "./homePage2.scss";
import BarChartComponent from "src/pages/HomePage/components/BarChartComponent";
import DropdownBox from "./components/DropdownBox";
import TotalBox from "./components/TotalBox";
const index = () => {
  return (
    <header className="homePage">
      <div className="header">
        <DropdownBox>
          {{ title: "Departman", content: "Departman Seç" }}
        </DropdownBox>
        <DropdownBox>
          {{ title: "Dönem", content: "Tarih Aralığı Seç" }}
        </DropdownBox>
      </div>

      <main className="main">
        <TotalBox status="Gelir" />
        <TotalBox status="Gider" expenseStatus="Ödenmedi" />
        <TotalBox status="Gider" expenseStatus="Ödendi" />
      </main>

      <section className="barChartsContainers">
        <BarChartComponent status="Gelir" />
        <BarChartComponent status="Gider" />
      </section>
    </header>
  );
};

export default index;
