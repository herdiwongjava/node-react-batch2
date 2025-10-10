console.log("");
console.log("TUGAS NO.4 - PROMISE & ASYNC/AWAIT");
console.log("-----------------");

var filterCarsPromise = require("./promise3.js");

filterCarsPromise("black", 2019)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));

filterCarsPromise("silver", 2017)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));

const invalidCar = async () => {
  try {
    const result = await filterCarsPromise("grey", 2019);
    console.log(result);
  } catch(err) {
    console.log(err.message)
  }
};
invalidCar()

const greyCar = async () => {
  try {
    const result = await filterCarsPromise("grey", 2018);
    console.log(result);
  } catch(err) {
    console.log(err.message)
  }
};
greyCar()

const blackCar = async () => {
  try {
    const result = await filterCarsPromise("black", 2020);
    console.log(result);
  } catch(err) {
    console.log(err.message)
  }
};
blackCar()


