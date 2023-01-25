export const getStringOfNRandDigits = (n: number) => {
  if (n <= 0) {
    throw new Error("n must be positive");
  }
  let result = "";
  for (let i = 0; i < n; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
};
