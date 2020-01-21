export default function currency(value: number, options: { currency: string }) {
  if (!value) {
    return "";
  }
  if (isNaN(Number(value))) {
    return value;
  }
  const formatter = new Intl.NumberFormat(navigator.language, {
    currency: (options && options.currency) || "USD",
    style: "currency",
    minimumFractionDigits: 2
  });
  return formatter.format(value / 100);
}
