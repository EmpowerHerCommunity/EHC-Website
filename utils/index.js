// export const sortByDate = (x, y) => {
//     return new Date(y.blog.date) - new Date(x.data.date);
//   };
  

export const sortByDate = (x, y) => {
  const xCreated = x.blog?.created || 0;
  const yCreated = y.blog?.created || 0;
  return new Date(yCreated) - new Date(xCreated);
};
