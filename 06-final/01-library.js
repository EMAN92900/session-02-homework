// =============================================
// 6. FINAL — Library (uses everything)
// =============================================
// 1. Print every book: "Title by Author (year) — available" or "— checked out".
// 2. Count how many books are available.
// 3. Count how many books were published before 2000.
// 4. Find the newest book.
//
// Expected output:
//   Season of Migration to the North by Tayeb Salih (1966) — available
//   Celestial Bodies by Jokha Alharthi (2010) — checked out
//   Men in the Sun by Ghassan Kanafani (1962) — available
//   Palace Walk by Naguib Mahfouz (1956) — available
//   Frankenstein in Baghdad by Ahmed Saadawi (2013) — checked out
//   The Prophet by Kahlil Gibran (1923) — available
//   Available books: 4
//   Published before 2000: 4
//   Newest book: Frankenstein in Baghdad (2013)

const books = [
  { title: "Season of Migration to the North", author: "Tayeb Salih", year: 1966, available: true },
  { title: "Celestial Bodies", author: "Jokha Alharthi", year: 2010, available: false },
  { title: "Men in the Sun", author: "Ghassan Kanafani", year: 1962, available: true },
  { title: "Palace Walk", author: "Naguib Mahfouz", year: 1956, available: true },
  { title: "Frankenstein in Baghdad", author: "Ahmed Saadawi", year: 2013, available: false },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923, available: true },
];

// your code here
const availableBooks = books.filter(book => book.available);
const booksBefore2000 = books.filter(book => book.year < 2000);
const newestBook = books.reduce((newest, book) => (book.year > newest.year ? book : newest), books[0]);

books.forEach(book => {
  const status = book.available ? "available" : "checked out";
  console.log(`${book.title} by ${book.author} (${book.year}) — ${status}`);
});

console.log(`Available books: ${availableBooks.length}`);
console.log(`Published before 2000: ${booksBefore2000.length}`);
console.log(`Newest book: ${newestBook.title} (${newestBook.year})`); 