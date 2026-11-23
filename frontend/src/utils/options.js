export const toOptions = (item) =>
  Object.entries(item).map(([value, { label }]) => ({ value, label }));
