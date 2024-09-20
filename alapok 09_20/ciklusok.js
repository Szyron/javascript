//for ciklusok (3 fajtat is hasznalhatunk)
//klasszikus for ciklus,nem pont az elso elemtol kell kezdeni
for (let i=0;i<keresztnevek.length; i++){
    console.log(keresztnevek[i]);
}
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*');
//i az elem indexet tartalmazza,sima bejaras az elejetol a vegeig
for(const i in keresztnevek){
    console.log(keresztnevek[i]);
    console.log(i);
}
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*');
//elteres: az i nem az elem indexet tartalmazza,hanem az listaelemet
//nem kell az elemet indexelni a cikulus valtozoban ott az elem,gyakorlatilag 
//ez egy for each ciklus
for(const i of keresztnevek){
    console.log(i);
}
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*');

//eloltesztelovel cikulus
//minden meg lehet vele oldani
let szamlalo=0;
while(szamlalo<keresztnevek.length){
    console.log(keresztnevek[szamlalo]);
    szamlalo++;
}
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*');
//hatultesztelo ciklus
//ritkan hasznaljuk
szamlalo=0;
do {
    console.log(keresztnevek[szamlalo]);
    szamlalo++;
} while (szamlalo<keresztnevek.length);

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*');