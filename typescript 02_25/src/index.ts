console.log('Hello, TypeScript!');
console.log('Szia, Lajos!');

//Type inference
let szam= 156;

szam=511;

//Tipus megadasa annotacioval
let masikszam:number=445;


let szoveg="Hello, TypeScript!";
szoveg="546";

//union tipus
let union: string | number = 156;
union = "Hello, TypeScript!";



//(tipusA,tipusB):tipusTIPUSA
function osszead(a:number,b:number){
    return a+b;
}

console.log(osszead(5,6));

//Tartozkoni kell tole 
//let barmi:any;

//literal tipus
let szamok: 10 | 20 | 30 | 40;
szamok=40;

//tipusok definialasa
type Szamok=10 | 20 | 30 | 40;

let masikSzamok : Szamok;
masikSzamok=40;

//Tipusos definialasa
type SzamLista=(string|number)[];

let vegyes : SzamLista=[11,"valami",12,13,14,15,16,17,18,19,20];

type Szemely={
    vezeteknev:string;
    keresztnev:string;
    kor:number;
    magassag:number;
    kepek?:Array<Kep>;
}

interface Kep{
    faljnev:string;
    szelesseg:number;
    magassag:number;
}

let szemely:Szemely={
    vezeteknev:"Kovacs",
    keresztnev:"Lajos",
    kor:33,
    magassag:185
}

//Tuple

type Dolgozo=[nev:string,eletkor:number];

let  dolgozo:Dolgozo=["Kovacs Lajos",33];

const [nev,eletkor]=dolgozo;

