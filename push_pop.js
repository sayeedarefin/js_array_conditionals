// we use push() to add numbers at the last of any array
var numbers = [12, 25, 56, 89, 658];
console.log(numbers);
numbers.push(420);
numbers.unshift(840);
// we use unshift() to add numbers at the beginning of any array
console.log(numbers);

// we use pop() to remove numbers from the last of any array
numbers.pop();
console.log(numbers);

var poppedElement = numbers.pop(); //in this example, we store that popped element in another variable to show
console.log(poppedElement)
