
/*
* Concatenate the string "osszeg" to the value stored in the uzenet variable.
* Create a new variable called "sum" and use the assignment operator to assign it the sum of the values stored in the firstNumber and secondNumber
* variables. Log the value of the sum variable.
*/

var fristNumber = 12;

var secondNumber = 4;

var osszeg = fristNumber+secondNumber;

console.log(osszeg);



/* Concatenate the string "user!" to the value stored in the uzenet variable.*/


var message = "Szia"+"user!";


/** Generate a Boolean value from the value stored in the "number" variable.
* The Boolean value should be true if the value of the "number" variable was even, and false if it was odd.*/

var szam = 4;
var boolean = true;

console.log(szam % 2 == 0);


/*
Increment the value of the count variable in memory as many times as necessary for the expression "count > target" to evaluate to true.
*/

var count = 0;
var target = 5;

count++;
count++;
count++;
count++;
count++;
count++;


console.log(count > target);

/*
 * Request the second element of the array below and log it
 * Change the third element of the array to "Suzuki"
*/

var cars = ['VW', 'BMW', 'Audi'];

console.log(cars[1]);
cars[2] = "Suzuki";
console.log(cars)

/*
 * Add a new key named "age" to the following object and set its value to 25.
*/

var person = {
    firstName: 'József',
    lastName: 'Kovács',
};

person.age = 25;
console.log(person);