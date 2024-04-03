import books from "../books/books.js";

const getBookById = (req, h) => {
  const { idBook } = req.params;
  const book = books.filter((book) => book.id === idBook)[0];

  if (book !== undefined) {
    const response = h.response({
      status: "success",
      data: {
        book,
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Buku tidak ditemukan",
  });

  response.code(404);
  return response;
};

export default getBookById;
