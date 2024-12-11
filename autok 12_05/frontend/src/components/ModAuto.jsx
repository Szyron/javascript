import { use } from 'react';
import {useState} from 'react'
import {useNavigate,useLocation, Navigate} from 'react-router-dom'


function ModAuto() {

    const {state} =useLocation(); //masik componentbol atadott adatokat fogadja
    const navigate = useNavigate();

    let cim = "Uj auto felvetel";
    let autoId = "";
    let autoMarka = "";
    let autoModel = "";
    let autoRendszam = "";
    let autoGyartasiev = "";
    let autoSzin = "";

    let method = 'POST';
    let url = `${import.meta.env.VITE_BASE_URL}/autok`;

    if(state!=null){
        //Adatmodositas

        const{auto} = state; //state-ben atadott adatokat kiszedjuk
        autoId = auto.id;
        autoMarka = auto.marka;
        autoModel = auto.model;
        autoRendszam = auto.rendszam;
        autoGyartasiev = auto.gyartasiev;
        autoSzin = auto.szin;
        cim=`${autoMarka} ${autoModel} modositas`;
        method = 'PATCH';
        url =`${import.meta.env.VITE_BASE_URL}/autok/${autoId}`;
    }

    let formObj={
        id:autoId,
        marka:autoMarka,
        model:autoModel,
        rendszam:autoRendszam,
        gyartasiev:autoGyartasiev,
        szin:autoSzin
    }
    //state letrehozasa 
    //   l
    //   l
    //   l
    //   v

    const [formData,setFormData] = useState(formObj); //barmilyen tipusu adatot tarolhatunk benne
    
    const adatkuldes = async(formData,method,url) =>{
        const keres = await fetch(url,{
            method: method,
            headers: {"Content-type":"application/json"},
            body:JSON.stringify(formData)


        }); //fetch api hivas
        const valasz=await keres.text();
        alert(valasz);
        navigate('/autok');
    }

    const onSubmit = (e) =>{
        e.preventDefault();//megakadalyozza az oldalujratoltest
        adatkuldes(formData,method,url); 

    }

    const writeData = (e) =>{
        setFormData((prevData) => ({...prevData,[e.target.id]:e.target.value}));//kulcsot es : utan erteket adunk meg,prevData szetszedi es a vegen {}-be rakja
    }
//id az obj a kulcsok nevei
  return (
    <div>
        <h1 className="text-3xl fond-bold text-center my-5">{cim}</h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center my-5">
            <input type="text" required id="id" value={formData.id} onChange={writeData} placeholder="ID" className="input input-bordered w-full max-w-xs" /> 
            <input type="text" required id="marka" value={formData.marka} onChange={writeData}  placeholder="Marka" className="input input-bordered w-full max-w-xs" />
            <input type="text" required id="model" value={formData.model} onChange={writeData}  placeholder="Model" className="input input-bordered w-full max-w-xs" />
            <input type="text" required id="rendszam" value={formData.rendszam} onChange={writeData}  placeholder="Rendszam" className="input input-bordered w-full max-w-xs" />
            <input type="text" required id="gyartasiev" value={formData.gyartasiev} onChange={writeData}  placeholder="Gyartasi ev" className="input input-bordered w-full max-w-xs" />
            <input type="text" required id="szin" value={formData.szin} onChange={writeData} placeholder="Szin" className="input input-bordered w-full max-w-xs" />
            <button type="submit" className="btn btn-secondary">Kuldes</button>
        </form>
    </div>
  )
}

export default ModAuto