import { useSelector,useDispatch} from "react-redux";
import { novel,csokkent,noveloErtekkel } from '../reducers/counterSlice'; //action és a dispatchel együtt használjuk

function Counter() {
    const szamlalo=useSelector((state)=>state.szamlalo.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h2 className="text-2xl font-bold text-center text-red-500">Számláló: {szamlalo}</h2>
        <button onClick={()=>dispatch(novel())} className="btn btn-info">Növel</button>
        <button onClick={()=>dispatch(csokkent())} className="btn btn-warning">Csökkent</button>
        <button onClick={()=>dispatch(noveloErtekkel(23))} className="btn btn-warning">Növel Értékkel</button>
    </div>
  )
}

export default Counter