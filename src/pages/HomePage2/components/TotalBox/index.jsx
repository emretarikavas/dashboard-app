import IncomeIcon from "src/components/Icons/IncomeIcon";
import "./totalBox.scss";

const index = () => {
  return (
    <div className="totalBox">
      <div className="totalBoxHeader">
        <h3>Toplam Kesilen Fatura</h3>
        <IncomeIcon />
      </div>
      <div className="totalBoxContent">
        <h5>12.657,88 TL</h5>
        <h6>678 Adet</h6>
      </div>
    </div>
  );
};

export default index;
