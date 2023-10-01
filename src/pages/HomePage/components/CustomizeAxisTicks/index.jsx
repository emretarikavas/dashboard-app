export default function index(props) {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={2}
        dy={16}
        textAnchor="middle"
        fill="#666"
        transform="rotate(-30)"
        style={{ fontSize: "14px" }}
      >
        {payload.value}
      </text>
    </g>
  );
}
