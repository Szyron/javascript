import { useEffect,useState } from "react"
import Auto from "./Auto"

function AutokList() {
    const [autok,setAutok] = useState([])
    const [refresh,setRefresh] = useState(false)

    const frissites=()=>{
      setRefresh(prev=>!prev);
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/autok`)
        .then(res => res.json())
        .then(data => setAutok(data))
        .catch(err => console.log(err))
    },[refresh])
  return (
    <div className="bg-red-100">
        <h1 className="text-3xl font-bold text-center text-red-800">Autoink:</h1>
        <div className="grid grid-cols-2 justify-items-center">
        {
            autok.map((auto) =>(<Auto key={auto.id} auto={auto} frissites={frissites}/>))
        }
        </div>
    </div>
  )
}

export default AutokList