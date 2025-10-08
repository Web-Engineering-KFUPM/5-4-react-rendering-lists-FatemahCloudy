function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  const diff = Math.round((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}


export default function DueBadge({ dueDate }) {
  const d = daysUntil(dueDate);

  let label;
  let badgeClass = '';

  if (d < 0) {
    label = "Overdue";
    badgeClass = "danger";
  } else if (d === 0) {
    label = "Due today";
    badgeClass = "warn";
  } else if (d === 1) {
    label = "1 day remaining";
  } else {
    label = `${d} days remaining`;
  }

  return <span className={`badge ${badgeClass}`}>{label}</span>;
}