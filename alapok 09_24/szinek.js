// Szin konverzio


function decToHex(red,green,blue){
    return "#" + red.toString(16) + green.toString(16) + blue.toString(16);
}


function click(e){
    let elem=e.target;
    let selected=document.getElementById("selected");
    selected.setAttribute("style","background-color:"+elem.style.backgroundColor);
    selected.textContent=elem.textContent;
}


let root=document.getElementById('root');

for(let i=0; i<255; i++){
    let negyzet=document.createElement('div'); //letrehozunk egy div elemet
    negyzet.textContent=decToHex(255,i,i); //szin beallitasa
    negyzet.setAttribute("class",'negyzet'); //class beallitasa
    negyzet.setAttribute('style', 'background-color:'+decToHex(255,i,i)); //style beallitasa
    negyzet.addEventListener('click',click); //esemenykezeles beallitasa (click esemeny) hozzarendelunk egy click fuggveny-t
    //keves elemnel a click helyere mehet a function is
    root.appendChild(negyzet); //hozzaadjuk a root-hoz a negyzetet
}

//negyzet.textContent=decToHex(255,i,i);
//negyzet.setAttribute('style', 'background-color:'+decToHex(255,i,i));
//osszhangban kell lennie a szin es a szovegnek