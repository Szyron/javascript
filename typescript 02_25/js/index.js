"use strict";
console.log('Hello, TypeScript!');
console.log('Szia, Lajos!');
//Type inference
let szam = 156;
szam = 511;
//Tipus megadasa annotacioval
let masikszam = 445;
let szoveg = "Hello, TypeScript!";
szoveg = "546";
//union tipus
let union = 156;
union = "Hello, TypeScript!";
//(tipusA,tipusB):tipusTIPUSA
function osszead(a, b) {
    return a + b;
}
console.log(osszead(5, 6));
//Tartozkoni kell tole 
//let barmi:any;
//literal tipus
let szamok;
szamok = 40;
let masikSzamok;
masikSzamok = 40;
let vegyes = [11, "valami", 12, 13, 14, 15, 16, 17, 18, 19, 20];
let szemely = {
    vezeteknev: "Kovacs",
    keresztnev: "Lajos",
    kor: 33,
    magassag: 185
};
let dolgozo = ["Kovacs Lajos", 33];
const [nev, eletkor] = dolgozo;
