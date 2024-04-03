const getBookByParams = (req, h) => {
  const { name } = req.query;

  return `hello ${name}`;
};

export default getBookByParams;
