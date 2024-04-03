const books = [
  {
    id: "Qbax5Oy7L8WKf74l",
    name: "Buku A",
    year: 2010,
    author: "John Doe",
    summary: "Lorem ipsum dolor sit amet",
    publisher: "Dicoding Indonesia",
    pageCount: 100,
    readPage: 25,
    finished: false,
    reading: false,
    insertedAt: "2021-03-04T09:11:44.598Z",
    updatedAt: "2021-03-04T09:11:44.598Z",
  },
  {
    id: "Qbax5Oy7L8WKf74l",
    name: "Buku B",
    year: 2020,
    author: "John Doe",
    summary: "Lorem ipsum dolor sit amet",
    publisher: "Dicoding Indonesia",
    pageCount: 100,
    readPage: 25,
    finished: false,
    reading: false,
    insertedAt: "2021-03-04T09:11:44.598Z",
    updatedAt: "2021-03-04T09:11:44.598Z",
  },
  {
    id: "Qbax5Oy7L8WKf74l",
    name: "Buku C",
    year: 2022,
    author: "John Doe",
    summary: "Lorem ipsum dolor sit amet",
    publisher: " Indonesia",
    pageCount: 100,
    readPage: 25,
    finished: false,
    reading: false,
    insertedAt: "2021-03-04T09:11:44.598Z",
    updatedAt: "2021-03-04T09:11:44.598Z",
  },
];

const nama = "dicoding";

const filteredBooks = books.map((book) => {
  if (book.publisher.toLowerCase().includes(nama.toLowerCase())) {
    return book;
  }
  return `error`;
});
console.log(filteredBooks);
const jange = "jnage adalah siswa di dicodin";
console.log(jange.includes(nama));

console.log(books.id);
