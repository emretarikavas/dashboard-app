import { Link } from "react-router-dom";
import "./totalbillIncome.scss";

const index = () => {
  return (
    <div>
      <h2>Toplam Gelir Fatura Sayısı</h2>
      <h3 className="totalBillingIncome">0</h3>
      <Link to="/billings">Hepsini Göster</Link>
      <h4 className="percent">%</h4>
    </div>
  );
};

export default index;
