import "./homepage.scss";
import TotalBillExpense from "src/pages/HomePage/components/TotalBillExpense";
import TotalBillIncome from "src/pages/HomePage/components/TotalBillIncome";
const index = () => {
  return (
    <div className="home">
      <div className="box box1">Box 1</div>
      <div className="box box2">
        <TotalBillIncome />
      </div>
      <div className="box box3">
        <TotalBillExpense />
      </div>
      <div className="box box4">Box 4</div>
      <div className="box box5">Box 5</div>
      <div className="box box6">Box 6</div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </div>
  );
};

export default index;
