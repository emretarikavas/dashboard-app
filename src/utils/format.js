export const numberFormat = (value) => {
  return Intl.NumberFormat("tr", {
    notation: "compact",
    maximumFractionDigits: 2
  }).format(value);
};
