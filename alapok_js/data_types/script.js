
// line commet

/*
    block comment
*/


/* Data types in JavaScript */

//string
console.log("Hello!");


// Uppercase string
// How many caracters are in the string?
// reverse the string

//number
console.log(500);


// plus a other number
// minus a other number
// multiply by a other number


//boolean (true or false)

console.log(true);
console.log(false);


// logical AND
// (boolean, boolean) -> boolean

//undefined
console.log(undefined);

//null
console.log(null);


// Array 
// Array<.>
//Array of something(?)

console.log(['first','second','third']);
console.log([2,3,4]);

//Filtering
//Add new element

console.log([2,3,4][2]);


console.log([true,2,"Szia"]); //Cannot using in real coding

//multidimensional array
// Array<Array<number>>

console.log([[2,3], [32,10], [6, 4]][1][1]);

//Object
// key - value

console.log(
    {
        firstName: "Bela",
        lastName: "Kiss",
        age: 30
    }['lastName'] //<-lookup,key-based request
);


console.log(
    {
        firstName: "Bela",
        lastName: "Kiss",
        age: 30,
        phoneNumber: ['06708885674' , '06302267891'],
        address: {
            street: 'Hungaria street',
            city: 'Budapest',
        }
    }.phoneNumber[1]
);



//got first phone name (1)
//got a second phone price (2)
//got a third phone privder country (3)

// (1)
console.log(
    [
        {
            brand: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country: 'HU',
                name: 'Vodafone'
            }
        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider: {
                country: 'DE',
                name: 'T-Mobile'
            }
        },
        {
            brand: 'ZTE',
            name: 'Blade',
            price: 110000,
            provider: {
                country: 'DE',
                name: 'Vodafone'
            }
        }
    ][0].name
)


// (2)
console.log(
    [
        {
            brand: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country: 'HU',
                name: 'Vodafone'
            }
        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider: {
                country: 'DE',
                name: 'T-Mobile'
            }
        },
        {
            brand: 'ZTE',
            name: 'Blade',
            price: 110000,
            provider: {
                country: 'DE',
                name: 'Vodafone'
            }
        }
    ][1].price
)

// (3)
console.log(
    [
        {
            brand: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country: 'HU',
                name: 'Vodafone'
            }
        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider: {
                country: 'DE',
                name: 'T-Mobile'
            }
        },
        {
            brand: 'ZTE',
            name: 'Blade',
            price: 110000,
            provider: {
                country: 'DE',
                name: 'Vodafone'
            }
        }
    ][2].provider.country
)


