export function formatFullDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const hrs = date.getHours();
  const mins = date.getMinutes();

  return `${hrs}.${mins}${hrs >= 12 ? "pm" : "am"}, ${month} ${day}`;
}

export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const hrs = date.getHours();
  const mins = date.getMinutes();

  return `${hrs}.${mins}${hrs >= 12 ? "pm" : "am"}`;
}
