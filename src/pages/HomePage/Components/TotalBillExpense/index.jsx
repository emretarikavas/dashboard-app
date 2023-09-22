import { Link } from "react-router-dom";
import "./totalbillexpense.scss";

const index = ({}) => {
  return (
    <div>
      <h2>Toplam Gider Fatura Sayısı</h2>
      <h3 className="totalBillingIncome"></h3>
      <Link to="/billings">Hepsini Göster</Link>
      <h4 className="percent">%</h4>
    </div>
  );
};

export default index;
