const round = (num: number) => {
  const validNums = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60];
  if (validNums.includes(num)) return num;
  for (let i = 0; i < validNums.length; i++) {
    if (validNums[i] > num) return validNums[i - 1];
  }
  return 60;
};
export default round;
