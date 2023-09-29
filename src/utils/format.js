export const numberFormat = (value) => {
  return Intl.NumberFormat("tr", {
    notation: "compact",
    maximumFractionDigits: 2
  }).format(value);
};

export function formatDateToTurkish(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
