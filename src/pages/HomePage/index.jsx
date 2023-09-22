import "./homepage.scss";
import TotalIncomeCount from "./components/TotalIncomeCount";
import TotalExpenseCount from "./components/TotalExpenseCount";
import PendingList from "./components/PendingList";
import IncomeList from "./components/IncomeList";
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
        <TotalExpenseCount />
      </div>
      <div className="box box4">
        <IncomeList />
      </div>
      <div className="box box5">Box 5</div>
      <div className="box box6">Box 6</div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </div>
  );
};

export default index;
