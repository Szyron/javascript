let gomb = document.createElement('button');
gomb.textContent = 'JS gomb';
gomb.onclick =function(){
    alert('JS Gomb');
}

const jgomb = document.getElementById('js-gomb');

jgomb.appendChild(gomb);

//1.milyen elem
//2.mit akarunk beallitani(tulajdonsagok)
//3.osszes gyerek elem
//Deklarativ modell
const rgomb = React.createElement('button', {
    onClick:function(){
        alert('React micsoddaaa???:O');
    }
},'React Gomb');


const kontener = React.createElement('div',
{
    style:{
    backgroundColor:'green',
    with:'100px',
    height:'100px',
    }

},rgomb,rgomb,rgomb);

ReactDOM.render(kontener, document.getElementById('react-gomb')); 
