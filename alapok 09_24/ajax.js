let keres = new XMLHttpRequest();
let valasz="";
let root=document.getElementById('root');

keres.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
//onload lekeres ,feldolgozas,kapcsolas
keres.onload = function(){
    valasz = JSON.parse(this.response);
    console.log("valasz :"+valasz);
    valasz.forEach(elem=>{
        let p = document.createElement('p');
        p.textContent = elem.title;
        root.appendChild(p);

        //csak itt tudunk vele dolgozni!!!
    });
}

//keres.send();

console.log("valasz :"+valasz);

//promise vami eredmenyt fog visszaadni
//kenyelmesebb verzio --->
//promise ---> REJECTED --> nem lehetett vegrehajtani
//promise ---> PENDING --> Futasa folyamatban van
//promise ---> FULLFILLED --> Rendben befejezezodott
/*
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json()) //valtozo + res.json()
.then(data=>{data.forEach(elem=>{
    let p=document.createElement('p');
    p.textContent=elem.title;
    root.appendChild(p);
})})
.catch(err=>console.log(err)); //hibara furtna
*/

async function letoltes(){
    try{
        let keres = await fetch('https://jsonplaceholder.typicode.com/posts');
        let valasz= await keres.json();

        //Itt kezdunk valamit a valasszal
        valasz.forEach(elem=>{
            let p=document.createElement('p');
            p.textContent=elem.title;
            root.appendChild(p);
        });
    }catch(error){
        console.log(error);
    }
}

//await megfogja varni a promise vegrehajtasat/befejezeset

letoltes();
