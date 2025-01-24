import { useContext } from 'react';
import KutyaContext from '../context/KutyaContext';
import Kutya from './Kutya';  



function Kutyak() {
  const {kutyak}=useContext(KutyaContext);


  return (
    <div>
    <h1 className="text text-3xl font-bold text-center">Rendelesi adatok</h1>
    <div className="flex flex-row flex-wrap items-center justify-center">
    
      {
        kutyak.map((kutya)=>(<Kutya key={kutya.Id} kutya={kutya} /> ))
      }
    
    </div>
    </div>
  )
}

export default Kutyak