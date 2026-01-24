console.log(
  "%c ************** DELIVERABLE 04 *********************",
  "background: rgba(91, 11, 182, 0.87); font-size: 20px; color: white;",
);

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(
  "%c----- ISBOOKREAD ---- ",
  "background: rgb(10, 158, 174); font-size: 16px; color: white;",
);

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((bookElement) => bookElement.title === titleToSearch);

  return book?.isRead ?? false;
}

console.log(
  `Tried with book "Devastación", Result: ${isBookRead(books, "Devastación")}`,
); // true
console.log(
  `Tried with book "Canción de hielo y fuego", Result: ${isBookRead(books, "Canción de hielo y fuego")}`,
); // false
console.log(
  `Tried with book "Los Pilares de la Tierra", Result: ${isBookRead(books, "Los Pilares de la Tierra")}`,
); // false
