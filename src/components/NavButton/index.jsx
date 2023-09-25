import "./navButton.scss";

const index = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="Btn">
      {children}
    </button>
  );
};

export default index;
