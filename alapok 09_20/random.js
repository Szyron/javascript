let h1=document.createElement('h1');



function randNum(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
h1.textContent=randNum(10,100)  //100 max 10 min
root.appendChild(h1);

let veznevek=["Kovacs", "Nagy", "Kiss", "Toth", "Szabo"];
let keresztnevek=["Jozsi", "Pista", "Gyuri", "Bela", "Feri"];
//szamozott lista keszitese

let nevlista=document.createElement('ol');
for(let i=0; i<50; i++){
    let vnev=veznevek[randNum(0,veznevek.length)];
    let knev=keresztnevek[randNum(0,keresztnevek.length)];
    let nev=document.createElement('li');
    nev.textContent=vnev+" "+knev;
    nevlista.appendChild(nev);
}

root.appendChild(nevlista);