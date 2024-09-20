//nagyon fontos!!
//Javascript objektumok JSON-JavaScript Object Notation roviditve

//tulajdonsagokat es metodusokat tartalmazhat
let ember={
    vezeteknev:"Kiss",
    keresztnev:"Jozsi",
    szuletesiEv:1980,
    magassag:185,
    suly:78,
    kor(){
        return new Date().getFullYear()-this.szuletesiEv;
    }
}
console.log(ember);
console.log(ember.vezeteknev);
console.log(ember.keresztnev);
console.log(ember.szuletesiEv);
console.log(ember.kor());

//jobbklick a mappare open in integrated terminal >node objektumok.js(ahol nincs append)\


class Szemely{
    constructor(vezeteknev,keresztnev,szuletesiEv,magassag,suly){
        this.vezeteknev=vezeteknev; //jobb oldalon a parameter, bal oldalon az objektum tulajdonsaga
        this.keresztnev=keresztnev; 
        this.szuletesiEv=szuletesiEv;
        this.magassag=magassag;
        this.suly=suly;
    }
    kor(){
        return new Date().getFullYear()-this.szuletesiEv;
    }
}

let zoltan = new Szemely("Nagy","Zoltan","1980","180","65");