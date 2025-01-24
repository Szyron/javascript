import {useContext,useState} from "react";
import KutyaContext from "../context/KutyaContext";
import {useNavigate,useLocation} from "react-router-dom";

function KutyanevForm() {

    const{backendMuvelet,kutyanevek}=useContext(KutyaContext);

    const navigate=useNavigate();
    const {state} = useLocation(); 


    let cim="Uj kutyanev felvitele";
    let method = "POST";
    let formObj={
        Id:"",
        kutyanev:"",
    }

    let url= `${import.meta.env.VITE_BASE_URL}/kutyanevek`;

    if(state!==null){
        const{kutyanev}=state;//kiszedjuk a statebol
        formObj={
            Id:kutyanev.Id,
            kutyanev:kutyanev.kutyanev,
        }
        method="PATCH";
        cim=`${kutyanev.kutyanev} kutya adatainak modositas`;
        
    }

    const [formData, setFormData]=useState(formObj);

    const writeData = (e) =>{
        setFormData((prevData) => ({...prevData,[e.target.id]:e.target.value}));
    }

    const onSubmit=(e)=>{
        console.log(formData)
        e.preventDefault();
        backendMuvelet(formData,method,url);
        navigate("/kutyanevek")
    }




  return (
    <div>
        <h1 className="text-3xl fond-bold text-center">{cim}</h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center my-5">
            <input type="text" required id="kutyanev" value={formData.kutyanev} onChange={writeData} placeholder="Kutya kora" className="input input-bordered w-full max-w-xs m-2" /> 
            <button type="submit" className="btn btn-primary">Kuldes</button>
        </form>
    </div>
  )
}

export default KutyanevForm