import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Vedett() {

    const navigate=useNavigate();
    const [vedettInfo,setVedettInfo]=useState(null);
    const token=sessionStorage.getItem('userToken');

    useEffect(()=>{
        if(token){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/user/vedett`,{
                method: "GET",
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(adat=>{
                if(!adat.message){
                    setVedettInfo(adat)
                }else{
                    alert(adat.message);
                    navigate("/login")
                }
            })
            .catch(err=>alert(err))
        }else{
            navigate("/login")
        }
    },[])




  return (
    <div className="text-center bg-base-300">
        <h1 className="text-3xl text-red-700">VEDETT INFO</h1>
        {vedettInfo}
    </div>
  )
}

export default Vedett