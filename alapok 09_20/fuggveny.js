
//3 szam osszeadasa
function osszead(a,b,c){
    return a+b+c;
}

console.log(osszead(10,20,30));
console.log(osszead("A","B","C"));

//fuggveny tulterheles (overloading),parameter listaknak kulonbozni kell
function osszead(a,b=10){
    return a+b;
}

console.log(osszead(10));
console.log(osszead(10,35));
console.log(osszead("B"));

//arrow function
const kivonas=(a,b)=>a-b;
console.log(kivonas(90,10)); 


//Tetszileges ill. valtozo hosszusagu parameterlista?
//arguments objektum,nem hasznalhato arrow funkciora
function osszead(){
    let osszeg=0;
    for(let i=0;i<arguments.length;i++){
        osszeg+=arguments[i];
    }
    return osszeg;
}

console.log(osszead(10,20,30,40,50,60,70,80,90,100));