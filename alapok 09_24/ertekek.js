let a=210;
let b=a;

b=330;

console.log(a);
console.log(b);


let szamok=[12,31,33,115];
let szamok2=szamok;

szamok[1]=66;

console.log(szamok2);

//ertektipusok,referencia tipusok
//stack memoria >ertektipusok
//alulrol felfele novekszik stack memoria a>b>c>d,nincs akar mekkora merete
//szamok stackbe egy hivatkozas kerult(osszekotesben vannak!!)
//szamok2 felvettem de ugyan oda mutat mint szamok 


//heap memoria>referencia tipusok
//12,31,33,115 (osszekotesben vannak!!)
//folyamatosan szabadit fel helyet,ahova nem mutat referncia