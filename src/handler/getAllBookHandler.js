import books from "../books/books.js";

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  if (!name && !reading && !finished) {
    const response = h.response({
      status: "success",
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  if (name) {
    const filteredBooksName = books.filter((book) => {
      const nameRegex = new RegExp(name, "gi");
      return nameRegex.test(book.name);
    });
    const response = h.response({
      status: "success",
      data: {
        books: filteredBooksName.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  if (reading) {
    const filteredBooksReading = books.filter(
      (book) => Number(book.reading) === Number(reading)
    );
    const response = h.response({
      status: "success",
      data: {
        books: filteredBooksReading.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  const filteredBooksFinished = books.filter(
    (book) => Number(book.finished) === Number(finished)
  );

  const response = h.response({
    status: "success",
    data: {
      books: filteredBooksFinished.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

export default getAllBooksHandler;
