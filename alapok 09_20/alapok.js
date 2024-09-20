//node check  terminalba node -v


document.write("Valtozok a Javascriptben"); // kiírja a  szöveget a weboldalra
//dinamikus tipus meghatarozas
//var-ral hozunk letre globalis valtozot
var a = 17; //szam tipusu valtozo
a = "szoveg";
document.write("<br>");
document.write(a);

//Ha szeretnenk statikus tipusossagot, akkor 
//Typescriptet kell hasznalni -->Hibamegelozes,Egyszerubb fuggveny hivas

//let-el letrehozott valtozok csak a blokkon belul elerhetoek
let b=23; //szam tipusu valtozo, ha  szovegkent ertelmezi mint pl:let b="23"; akkor osszefuzi
let c=211.23; //float

//prompt("Adja meg c erteket!"); //bekero ablak, ahol be lehet irni a nevet
let d=b+c;

document.write("<br>");

document.write(d);

console.log(d); //a konzolra irja ki a d valtozot

//alert("Teljes osszeg"+d); //alert ablakban kiirja a d valtozot
if(b>100)
{
    let szoveg="Nagyobb mint 100";

    document.write(szoveg);
}
const konstans=556; //konstans letrehozasa
//konstans kesobb nem valtozthato meg.