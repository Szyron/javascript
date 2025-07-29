/*
Operators
*/


// (number,number)-> number
console.log(2 + 3);


/*

    Group of operators
    -by number of operands:
        1: unary
        2: binary
        3: ternery
    -lexical position of the operator
        before: prefix
        between: infix
        after: postfix
    -Does it have any side effects?
        yes
        no
*/

// +, -, *, /, %
console.log(2 + 4);
console.log(2 - 4);
console.log(2 * 4);
console.log(2 / 4);
console.log(7 % 3);


/*
comparative
(any, any) -> boolean
*/

// == (equality)
console.log(2 == 2);
console.log(2 == 1);

// !=
console.log(2  != 2);

// === (identity)
console.log(1 === true);
console.log(1 !== true);
console.log('János' === 'József');

// >, < , <=, >=
console.log(3>5);

/*
Logical oper.
*/

// (boolean, boolean)-> boolean
//(bolean) -> boolean

// logical AND
console.log(true && true);

// logical OR
console.log(true || false);

//negation
console.log(!true);

//multiply operator
console.log(2 === 2 && 1 > 5); //true && false -> false
console.log(2 === 2 && (1 > 5 || true));

console.log((2+3)*5);

/*
String operator
*/

console.log("János"+" "+"Papp");

/*
Conditional
(boolean, any , any)->any
*/

console.log(false ? "first" : "second");



/*
* Assignment
* (var, any) -> any
*/

var valtozo;
console.log(valtozo);

console.log(valtozo = 'szia');
console.log(valtozo);

valtozo = 3;

console.log(valtozo);


// increment, decrement
valtozo++;
valtozo--;
valtozo--;

console.log(valtozo);

// +=, -=

var szam = 5;

// szam = szam + 10;
szam += 10;
szam *= 10;
szam /= 10;
szam %= 10;
console.log(szam);