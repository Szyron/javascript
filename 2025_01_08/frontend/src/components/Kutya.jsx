import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import KutyaContext from '../context/KutyaContext';



function Kutya({kutya}) {

  const navigate=useNavigate();
  const {backendMuvelet}=useContext(KutyaContext);

  const modosit =(kutya)=>{
    navigate("/ujkutya", {state:{kutya}});
  }
  
  const torles=(kutya)=>{
    backendMuvelet(kutya, "DELETE",`${import.meta.env.VITE_BASE_URL}/kutyak`);
  }
  

  return (
    <div className="card bg-sky-200 text-sky-800 m-5 w-96">
    <div className="card-body">
      <h2 className="card-title">id:{kutya.Id}</h2>
      <p>{kutya.kutyanev}</p>
      <p>{kutya.nev}</p>
      <p>{kutya.eredetinev}</p>
      <p>{kutya.eletkor}</p>
      <p>{kutya.utolsoell}</p>
      <div className="card-actions justify-end">
        <button className='btn btn-primary' onClick={()=>modosit(kutya)}>Módosítás</button>
        <button className='btn btn-warning' onClick={()=>torles(kutya)} >Törlés</button>
       
      </div>
    </div>
  </div>
  )
}

export default Kutya