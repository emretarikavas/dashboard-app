import "./homepage.scss";
import TotalIncomeCount from "./components/TotalIncomeCount";
import TotalExpenseCount from "./components/TotalExpenseCount";
import TotalExpenseAmount from "./components/TotalExpenseAmount";
import TotalIncomeAmount from "./components/TotalIncomeAmount";
import PendingList from "./components/PendingList";
import IncomeList from "./components/IncomeList";
import BarChartComponent from "./components/BarChartComponent";
const index = () => {
  return (
    <div className="home">
      <div className="box box1">
        <PendingList />
      </div>
      <div className="box box2">
        <TotalIncomeCount />
      </div>
      <div className="box box3">
        <TotalIncomeAmount />
      </div>
      <div className="box box4">
        <IncomeList />
      </div>
      <div className="box box5">
        <TotalExpenseCount />
      </div>
      <div className="box box6">
        <TotalExpenseAmount />
      </div>
      <div className="box box7">Box 7</div>
      <div className="box box8">
        <BarChartComponent status="Gider" />
      </div>
      <div className="box box9">
        <BarChartComponent status="Gelir" />
      </div>
    </div>
  );
};

export default index;
