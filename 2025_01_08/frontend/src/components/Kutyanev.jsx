import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import KutyaContext from '../context/KutyaContext';

function Kutyanev({kutyanev}) {

  const navigate=useNavigate();
  const {backendMuvelet}=useContext(KutyaContext);

  const modosit =(kutyanev)=>{
    navigate("/ujkutyanev", {state:{kutyanev}});
  }
  
  const torles=(kutyanev)=>{
    backendMuvelet(kutyanev, "DELETE",`${import.meta.env.VITE_BASE_URL}/kutyanevek`);
  }

  return (
    <div className="card bg-primary text-primary-content w-96 m-5">
      <div className="card-body">
        <h2 className="card-title">Id: {kutyanev.Id}</h2>
        <p>Nev: {kutyanev.kutyanev}</p>
        <div className="card-actions justify-end">
          <button className='btn btn-primary' onClick={()=>modosit(kutyanev)}>Módosítás</button>
          <button className='btn btn-warning' onClick={()=>torles(kutyanev)} >Törlés</button>
      </div>
      </div>
    </div>
  );
}

export default Kutyanev;
