import {useContext,useState} from "react";
import KutyaContext from "../context/KutyaContext";
import {useNavigate,useLocation} from "react-router-dom";

//useLocation state fogadas


function KutyafajtaForm() {

    const{backendMuvelet}=useContext(KutyaContext);

    const navigate=useNavigate();
    const {state} = useLocation();

    let cim="Uj fajta felvitele";
    let method = "POST";
    let formObj={
        Id:"",
        nev:"",
        eredetinev:"",
    }
    let url= `${import.meta.env.VITE_BASE_URL}/kutyafajtak`;

    if(state!==null){
        const{kutyafajta}=state;//kiszedjuk a statebol
        formObj={
            Id:kutyafajta.Id,
            nev:kutyafajta.nev,
            eredetinev:kutyafajta.eredetinev,
        }
        method="PATCH";
        cim=`${kutyafajta.nev} fajtanev modositas`;
        
    }

    const [formData, setFormData]=useState(formObj);

    const writeData = (e) =>{
        setFormData((prevData) => ({...prevData,[e.target.id]:e.target.value}));
    }

   
    const onSubmit=(e)=>{
        console.log(formData)
        e.preventDefault();
        backendMuvelet(formData,method,url);
        navigate("/kutyafajtak")
    }



  return (
    <div className="">
        <h1 className="text-3xl fond-bold text-center my-5">{cim}</h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center my-5">
            <input type="text" required id="nev" value={formData.nev} onChange={writeData} placeholder="Fajta neve" className="input input-bordered w-full max-w-xs m-5" /> 
            <input type="text" required id="eredetinev" value={formData.eredetinev} onChange={writeData}  placeholder="Fajta erdetinev" className="input input-bordered w-full max-w-xs m-3" />
            <button type="submit" className="btn btn-primary">Kuldes</button>
        </form>
    </div>
  )
}

export default KutyafajtaForm