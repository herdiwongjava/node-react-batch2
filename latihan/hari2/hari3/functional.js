console.log("");
console.log("RECURSIVE");
console.log("-----------------");

function countDown(number) {
    console.log(number)
    var newNumber = number - 1
    if(number > 0 ){
        countDown(newNumber)
    }
}
countDown(4)
