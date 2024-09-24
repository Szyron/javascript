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

keres.send();
//

console.log("valasz :"+valasz);