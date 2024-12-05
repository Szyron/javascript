import { useEffect,useState } from "react"
import Auto from "./Auto"

function AutokList() {
    const [autok,setAutok] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/autok`)
        .then(res => res.json())
        .then(data => setAutok(data))
        .catch(err => console.log(err))
    },[])
  return (
    <div className="bg-red-100">
        <h1 className="text-3xl font-bold text-center text-red-800">Autoink:</h1>
        <div className="grid grid-cols-2 justify-items-center">
        {
            autok.map((auto) =>(<Auto key={auto.id} auto={auto}/>))
        }
        </div>
    </div>
  )
}

export default AutokList