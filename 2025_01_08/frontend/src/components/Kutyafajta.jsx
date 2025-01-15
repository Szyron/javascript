import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";

function Kutyafajta({kutyafajta}) {
  const navigate=useNavigate();
  const {backendMuvelet}=useContext(KutyaContext);

  const modosit=(kutyafajta)=>{
    navigate("/ujkutyafajta",{state:{kutyafajta}})
  }

  const torles=(kutyafajta)=>{
    backendMuvelet(kutyafajta ,"DELETE", `${import.meta.env.VITE_BASE_URL}/kutyafajtak`);
  }

  return (
    <div className="card bg-primary text-primary-content w-96 m-5">
      <div className="card-body">
        <h2 className="card-title">{kutyafajta.Id}</h2>
        <p>{kutyafajta.nev}</p>
        <p>{kutyafajta.eredtinev}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info" onClick={()=>modosit(kutyafajta)}>Modositas</button>
          <button className="btn btn-warning" onClick={()=>torles(kutyafajta)} >Torles</button>
        </div>
      </div>
    </div>
  );
}

export default Kutyafajta;
