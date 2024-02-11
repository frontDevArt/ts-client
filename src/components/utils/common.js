const generateRandomNumbersWithCounts = (count) => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 9) + 1).join('');
};

export const getQuery = () => {
  return `2.${generateRandomNumbersWithCounts(9)}.1482238778.1706605022-57945384.1705992751`
}