export const formatDateDisplay = (iso?: string) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return "";
  return `${d}-${m}-${y}`;
};

export const formatDateISO = (display?: string) => {
  if (!display) return "";
  const [d, m, y] = display.split("-");
  if (!y || !m || !d) return "";
  return `${y}-${m}-${d}`;
};