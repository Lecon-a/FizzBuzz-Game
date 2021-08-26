function fizzBuzz(n){
    var _fizzBuzz = [];
    for (var i = 1; i <= n; i++) {
    
        if (i % 3 === 0 && i % 5 === 0) {
            _fizzBuzz.push("FizzBuzz");
        } else if (i % 3 === 0) {
            _fizzBuzz.push("Fizz");
        } else if (i % 5 === 0) {
            _fizzBuzz.push("Buzz");
        } else {
            _fizzBuzz.push(i);
        }
        
        console.log(_fizzBuzz);
    }
}
