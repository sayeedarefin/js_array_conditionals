var numbers = [21, 36, 58, 25, 69, 85];

console.log(numbers.length);


// 1. get element by index
var element = numbers[3];
console.log(element); //evabe kora jabe
console.log(numbers[2]); //evabeo kora jabe

// 2. get index of an element

var positionOfNumber = numbers.indexOf(25);
console.log(positionOfNumber);

// 3. data overwriting by index

console.log(numbers[2]);
numbers[2]= 420;
console.log(numbers[2]);