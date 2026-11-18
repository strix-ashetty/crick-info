const STORAGE_KEY = "cricketers";

export const getCricketers = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
};

export const saveCricketer = (cricketer) => {
  const existingCricketers = getCricketers();

  const updatedCricketers = [
    ...existingCricketers,
    cricketer,
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedCricketers)
  );
};