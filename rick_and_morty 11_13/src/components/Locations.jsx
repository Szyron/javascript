import {useState , useEffect} from "react";
import Location from "./Location";

function Locations() {
  const [location, setCharacters] = useState([]);
  const [info, setInfo] = useState({});//ures objectumot adunk meg
  const [page, setPage] = useState(1);


  useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
      .then(resp => resp.json())
      .then(locationData => {
        setCharacters(locationData.results)
        setInfo(locationData.info)
      }) //itt adjuk at
      .catch(err=>console.error(err));
  },[page]) //dependencies array, ha ures akkor csak egyszer fut le, ha van benne valami akkor annyirszor fut le amennyiszer az valtozik

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
      <h1 className="text-2x font-bold text-center text-sky-700">Lokaciok: </h1>
      <div className="text-center m-3">
        <div className="join">
            <button onClick={prevPage} className="join-item btn">«</button>
            <button className="join-item btn">Page {page}</button>
            <button onClick={nextPage} className="join-item btn">»</button>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      {
          location.map((location)=> (<Location key={location.id} location={location}/>))
          //key={character.id} itt mindig egyedi azonosítót kell megadni a objectbol
          //character={character} itt adjuk at a karaktert a Character komponensnek
      }
      </div>
  </div>
  )
}

export default Locations