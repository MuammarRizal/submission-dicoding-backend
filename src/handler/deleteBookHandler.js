import books from "../books/books.js";

const deleteBook = (req, h) => {
  const { idBook } = req.params;

  const index = books.findIndex((book) => book.id === idBook);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Buku berhasil dihapus",
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Buku gagal dihapus. Id tidak ditemukan",
  });

  response.code(404);
  return response;
};

export default deleteBook;
