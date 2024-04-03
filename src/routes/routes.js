import addbookHandler from "../handler/createNewBook.js";
import getBookById from "../handler/getBookById.js";
import getBookHanlder from "../handler/getAllBookHandler.js";
import editBookHandler from "../handler/editBookHandler.js";
import deleteBook from "../handler/deleteBookHandler.js";

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addbookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getBookHanlder,
  },
  {
    method: "GET",
    path: "/books/{idBook}",
    handler: getBookById,
  },
  {
    method: "PUT",
    path: "/books/{idBook}",
    handler: editBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{idBook}",
    handler: deleteBook,
  },
];

export default routes;
