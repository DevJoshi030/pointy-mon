const MAX_IDS = 429;

export const generateRandomIds = () => {
  const first = Math.floor(Math.random() * MAX_IDS) + 1;
  let second = Math.floor(Math.random() * MAX_IDS) + 1;

  while (second === first) {
    second = Math.floor(Math.random() * MAX_IDS);
  }
  return [first, second];
};
