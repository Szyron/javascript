import {useState , useEffect} from "react";
import Episode from "./Episode"; 

function Episodes() {
  const [episode, setEpisodes] = useState([]);
  const [info, setInfo] = useState({});//ures objectumot adunk meg
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    .then(resp => resp.json())
    .then(episodesData => {
      setEpisodes(episodesData.results)
      setInfo(episodesData.info)
    }) //itt adjuk at
    .catch(err=>console.error(err));
  },[page])

  const nextPage = () =>{
    if(page<info.pages){
        setPage(prev => prev + 1); //noveljuk az oldal szamat
    }
  }
  const prevPage = () =>{
    if(page>1){
      setPage(prev => prev - 1)
    }

  }

  return (
    <div className="bg-sky-100">
      <h1 className="text-2x font-bold text-center text-sky-700">Epizodok: </h1>
      <div className="text-center m-3">
        <div className="join">
            <button onClick={prevPage} className="join-item btn">«</button>
            <button className="join-item btn">Page {page}</button>
            <button onClick={nextPage} className="join-item btn">»</button>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
          episode.map((episode)=> (<Episode key={episode.id} episode={episode}/>))
          //key={character.id} itt mindig egyedi azonosítót kell megadni a objectbol
          //character={character} itt adjuk at a karaktert a Character komponensnek
      }
      </div>

    </div>
  )
}

export default Episodes