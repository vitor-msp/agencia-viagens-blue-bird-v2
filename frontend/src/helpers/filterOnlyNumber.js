export const filterOnlyNumber = (value) => {
  return value
    .trim()
    .split("")
    .filter((dig) => !isNaN(dig))
    .join("");
};
