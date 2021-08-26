var items = [];
//create counter called i
var i = 0;
function fizzBuzz(){
    i++;
    if (i % 3 === 0 && i % 5 === 0){
        items.push("FizzBuzz");
    } else if (i % 3 === 0){
        items.push("Fizz");
    } else if (i % 5 === 0){
        items.push("Buzz");
    } else {
        items.push(i);
    }
    console.log(items);
}

// for (var i = 1; i <= 100; i++) {
//     fizzBuzz(i);
// }

