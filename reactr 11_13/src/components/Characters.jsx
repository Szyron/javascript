import {useState , useEffect} from "react";

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(10);


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(resp => resp.json())
        .then(characterData => setCharacters(characterData.results))
        .catch(err=>console.error(err));
    },[])


  return (
    <div>
        <h1 className="text-2x font-bold text-center text-sky-700">Szereplok:</h1>
        {
            characters.map((character)=> (<p key={character.id}>{character.name}</p>))
        }
    </div>
  )
}

export default Characters