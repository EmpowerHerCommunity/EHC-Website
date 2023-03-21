export const sortByDate = (a, b) => {
  return new Date(b.created) - new Date(a.created);
};
