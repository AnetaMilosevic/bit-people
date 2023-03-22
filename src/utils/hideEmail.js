export const hideEmail = (email) => {
  const splitted = email.split("@");
  const firstPart = splitted[0];
  const secondPart = splitted[1];
  const firstPart1 = firstPart.substring(0, 2);
  const firstPart2 = firstPart.substring(firstPart.length - 3);
  const res = `${firstPart1}...${firstPart2}@${secondPart}`;
  return res;
};
