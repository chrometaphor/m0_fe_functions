// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion(name) {
  // added parameter to answer question
  console.log("Hello, what is your name?")
  console.log("My name is", name)
}
// curly on next line

nameQuestion("Chris Cole")
// added name to answer question


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
  // indented 23 and 24
}
// removed whitespace on line 25
addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
function makeFreshPesto() {
  // typed out rest of function keyword
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4:
function average(num1, num2) {
  // backspace curly brace to 42
  var sum = num1 + num2;
  var avg = sum / 2;
// indentation on variable declarations
  console.log(`the average is: ${avg}.`)
  // last period was outside backtic
}
// indentation on curly