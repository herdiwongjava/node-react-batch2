console.log("");
console.log("TUGAS NO.3 - PROMISE & ASYNC/AWAIT");
console.log("-----------------");

var filterBooksPromise = require("./promise2.js");

filterBooksPromise(true, 50)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));

const booksNotColorful = async () => {
  try {
    const result = await filterBooksPromise(false, 250);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
booksNotColorful();


const booksInvalidPage = async () => {
  try {
    const result = await filterBooksPromise(true, 30);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
booksInvalidPage();
