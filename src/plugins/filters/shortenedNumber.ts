export default function shortenedNumber(value: number | string): string {
  if (!value) {
    return "";
  }
  if (isNaN(Number(value))) {
    return value as string;
  }
  if (value < 10) {
    return value.toString();
  }
  return "9+";
}
