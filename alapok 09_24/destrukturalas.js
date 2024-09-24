let auto={
    rendszam: 'ABC-123',
    marka: 'Audi',
    tipus: 'A4',
}


//spread operator

auto={...auto, 'tulajdonos': 'Kiss'};

console.log(auto.rendszam); //get
auto.tipus='A6'; //set


//destrukturalas objektumbol

const {marka,tipus}=auto;

console.log(marka,tipus);


const {marka: autoMarka, tipus: autoTipus}=auto;
console.log(autoMarka,autoTipus);


let szamok=[1,2,3,4,5,6];

//Destrukturalas listabol

const [elso,masodik,...rest]=szamok;

console.log(...rest); //rest operator visszadja a maradekot.

console.log(elso,masodik);


let szoveg="valami szoveg";
const [v,a,...rest2]=szoveg;

console.log(...rest2);

console.log(auto);