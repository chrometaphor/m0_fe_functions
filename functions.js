// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting (name) {
    console.log(`Hello, ${name}!`);
  
  }
  printGreeting("Chris");
  // "Hello Chris"
  printGreeting("Chris");
  // "Hello Chris"
  printGreeting("Chris");
  // "Hello Chris"

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function add(name, location) {
    console.log(`${name}, lives in ${location}!`);
  }
  
  add("Chris", "Oregon");
  //  Chris lives in Oregon

// 3: Write a function that has 3 parameters: a string and two numbers. 
// The String will be the name of a company, and the numbers will represent 
// the minimum and maximum of a pay range for a posted job. The function 
// should print out a sentence that includes the name of the company and the 
// range itself (if the numbers passed in are 90000 and 110000, the pay range 
// is 20000).

function findCompanyRange(companyName, min, max) {
    var range = max - min
    console.log(`${companyName} has a range of ${range}`)
}
findCompanyRange("Chris Cole Inc", 90000, 110000)

// 4: Write a function that satifies the following interaction pattern:


function checkStock(stock, produce) {
    if (stock === 4) {
        console.log(`${produce} is stocked`)
    } else if (stock <= 3 && stock >= 1) {
        console.log(`${produce} - running LOW`)
    } else if (stock === 0) {
        console.log(`${produce} - OUT of stock!`)
    }      
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"