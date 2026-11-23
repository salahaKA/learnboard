import dayjs from "dayjs";

export function filterItems(items, filters = {}) {
  const search = (filters.search || "").trim().toLowerCase();
  return items.filter((item) => {
    if (
      search &&
      !`${item.title} ${item.category}`.toLowerCase().includes(search)
    )
      return false;
    if (filters.category && item.category !== filters.category) return false;
    if (filters.status && item.status !== filters.status) return false;
    if (filters.priority && item.priority !== filters.priority) return false;
    if (filters.dueFrom && dayjs(item.dueDate).isBefore(filters.dueFrom, "day"))
      return false;
    if (filters.dueTo && dayjs(item.dueDate).isAfter(filters.dueTo, "day"))
      return false;
    return true;
  });
}
