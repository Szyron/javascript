import {useContext,useState} from "react";
import KutyaContext from "../context/KutyaContext";
import {useNavigate,useLocation} from "react-router-dom";

function KutyaForm() {

    const{backendMuvelet,kutyanevek,kutyafajtak}=useContext(KutyaContext);

    const navigate=useNavigate();
    const {state} = useLocation(); 


    let cim="Uj rendelesi adat felvitele";
    let method = "POST";
    let formObj={
        Id:"",
        nevid:1,
        fajtaid:1,
        eletkor:"",
        utolsoell:"",
    }

    let url= `${import.meta.env.VITE_BASE_URL}/kutyak`;

    if(state!==null){
        const{kutya}=state;//kiszedjuk a statebol
        formObj={
            Id:kutya.Id,
            nevid:kutya.nevid,
            fajtaid:kutya.fajtaid,
            eletkor:kutya.eletkor,
            utolsoell:kutya.utolsoell,

        }
        method="PATCH";
        cim=`${kutya.kutyanev} kutya adatainak modositas`;
        
    }

    const [formData, setFormData]=useState(formObj);

    const writeData = (e) =>{
        setFormData((prevData) => ({...prevData,[e.target.id]:e.target.value}));
    }

    const onSubmit=(e)=>{
        console.log(formData)
        e.preventDefault();
        backendMuvelet(formData,method,url);
        navigate("/kutyak")
    }



  return (
    <div>
        <h1 className="text-3xl fond-bold text-center">{cim}</h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center my-5">
            <select className="select select-bordered w-full max-w-xs m-2" id="nevid" onChange={writeData} value={formData.nevid}>
                {
                    kutyanevek.map((kutyanev)=> (<option key={kutyanev.Id} value={kutyanev.Id}>{kutyanev.kutyanev}</option>))
                }

            </select>
            <select className="select select-bordered w-full max-w-xs m-2"  id="fajtaid" onChange={writeData} value={formData.fajtaid}>
                {
                    kutyafajtak.map((kutyafajta)=>(<option key={kutyafajta.Id} value={kutyafajta.Id}>{kutyafajta.nev}</option>))
                }

            </select>
            <input type="text" required id="eletkor" value={formData.eletkor} onChange={writeData} placeholder="Kutya kora" className="input input-bordered w-full max-w-xs m-2" /> 
            <input type="text" required id="utolsoell" value={formData.utolsoell} onChange={writeData}  placeholder="Utolso ellenorzes" className="input input-bordered w-full max-w-xs m-2" />
            <button type="submit" className="btn btn-primary">Kuldes</button>
        </form>
    </div>
  )
}

export default KutyaForm