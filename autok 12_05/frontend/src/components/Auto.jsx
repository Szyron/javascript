import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'

function Auto({ auto, frissites}) {
  const navigate = useNavigate();
  const[isDelete,setIsDelete] = useState(false)


  //megnyitni az ablakot
  const openDelete=()=>{
    setIsDelete(true);
  }

  //kinyitni az ablakot
  const closeDelete=()=>{
    setIsDelete(false);
  }



  const modositas=(auto)=>{
    navigate('/modauto',{state:{auto}});

  }
  //async nem blokkoljuk a fo futasi szalat
  const torles = async (id) =>{
    const keres = await  fetch(`${import.meta.env.VITE_BASE_URL}/autok/${id}`,{
      method:'DELETE',
      headers: {"Content-type":"application/json"}
      
    });

    const valasz = await keres.text();
    frissites();
    alert(valasz)
  }
  //onClick arrow functionnal hivjuk meg ,mert igy nem hivja meg automatikusan
  return (

    <div className="m-5 card bg-red-300 text-red-800  w-96">
      {
        isDelete && (<Modal  title="Torles" body="Biztosan torli?"  commitFunction={()=> torles(auto.id)} closeFunction={()=>closeDelete()} />)
      }
      <div className="card-body items-center text-center">
        <h2 className=" card-title">{auto.marka} {auto.model}</h2>
        <p className="btn-secondary">{auto.rendszam}</p>
        <p className="btn-secondary">{auto.gyartasiev}</p>
        <p className="btn-secondary">{auto.szin}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>modositas(auto)} className="btn bg-red-700">Modositas</button> 
          <button onClick={()=>openDelete()} className="btn bg-red-700">Torles</button>
        </div>
      </div>
    </div>
  );
}

export default Auto;
