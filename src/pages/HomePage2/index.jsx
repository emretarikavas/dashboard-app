import DropdownBox from "./components/DropdownBox";
import TotalBox from "./components/TotalBox";
import "./homePage2.scss";
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
    </header>
  );
};

export default index;
