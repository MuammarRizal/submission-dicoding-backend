import books from "../books/books.js";

const getBookHanlder = (req, h) => {
  const { name } = req.query;
  if (name) {
    const filteredBooks = books.map((book) => {
      return book.name.toLowerCase().includes(name.toLowerCase());
    });

    const response = h.response({
      status: "success",
      data: {
        books: filteredBooks,
      },
    });
    response.code(200);
    return response;
  }

  const booksDetail = books.map((book) => {
    return {
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    };
  });

  const response = h.response({
    status: "success",
    data: {
      books: booksDetail,
    },
  });

  response.code(200);
  return response;
};

export default getBookHanlder;
