/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];
const getBooks = () => data;
const getBook = (id) => data.find((d) => d.id === id);
/*
const book = getBook(3);
// const title = book.title;
// const author = book.author;
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);
const newGenre = [...genres, "new Genre"];
console.log(newGenre);
const updatedBook = {
  ...book,
  // new property adding
  moviePublicationDate: "2001-12-19",
  // overriting an existing property
  pages: 2020,
};
// updatedBook;
// template literals
const summary = `${title}의 책은 ${pages}를 가지고 있고, 작가는 ${author}이며, ${
  publicationDate.split("-")[0]
}년에 출간함. ${
  hasMovieAdaptation
    ? "영화로 만들어 졌습니다."
    : "영화로 만들어 지지 않았습니다."
}`;
summary;
// pages;
const pageRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pageRange;

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));

export default function Script() {
  const books = getBooks();
  const book = getBook(3);
  return (
    <div>
      hello
      {books.map((b) => (
        <p>{b.title}</p>
      ))}
      {JSON.stringify(book)}
    </div>
  );
}
*/
const books = getBooks();
/* books;
const titles = books.map((b) => b.title);
titles;
const getTotalReviewCount = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};
const essentialData = books.map((b) => {
  return {
    title: b.title,
    author: b.author,
  };
}); 
 */
/*const esData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
esData;
const longMovieAdaptBooks = books
  .filter((books) => books.pages > 500)
  .filter((books) => books.hasMovieAdaptation);
console.log(longMovieAdaptBooks.length);
const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
totalPages;

const x = [2, 4, 9, 66, 6, 1];
const y = ["abc", "cod", "Zos", "abcd", "한글", "기억"];
const sortedX = x.sort((a, b) => b - a);
const newSortedX = x.slice().sort((a, b) => a - b); // slice하면 새로 만듦

const sortedY = y.sort((a, b) => {
  const alower = a.toLocaleLowerCase();
  const blower = b.toLocaleLowerCase();
  return alower > blower ? 1 : alower < blower ? -1 : 0;
});
sortedY;
sortedX;
newSortedX;
x;
// 1) add book
const sortedByPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((b) => b.id);
sortedByPages;
const newBook = {
  id: 7,
  title: "나의 조국",
  author: "김 동 용",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;
// 2) delete book;
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
// 3) update book ;
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1234 } : book
);
booksAfterUpdate;
*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("끝나야 나오는 값입니다.");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
const todos = getTodos();
console.log(todos);
console.log("끝나야 나오는 값입니다.");
