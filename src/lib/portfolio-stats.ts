export const calculateAge = (today = new Date()) => {
  const birthdayThisYear = new Date(today.getFullYear(), 2, 13);
  return today.getFullYear() - 2010 - (today < birthdayThisYear ? 1 : 0);
};

export const portfolioHighlights = [
  { label: "Major Projects", value: "11+" },
  { label: "Books", value: "2" },
  { label: "Projects Built", value: "104+" },
] as const;
