import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {

  const navigate=useNavigate();
  let cim = "Regisztracio";

  const kuldes=(formData,method)=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/api/user/register`,{
    method:method,
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(token=>{
      if(!token.message){
        sessionStorage.setItem('userToken',token)
        alert("Sikeres regisztracio")
        navigate("/")
      }else{
        alert(token.message+"Hiba a regisztracioba")
      }
    })
    .catch(err=>alert(err))
  }


  const onSubmit=(e)=>{
    e.preventDefault();
    kuldes(formData , "POST");

  }
  let formObj={};
  formObj ={
    username:"",
    email:"",
    age:"",
    password:"",
    passwordAgain:"",
  }

const [formData, setFormData]=useState([formObj]);

const writeData = (e) =>{
  setFormData((prevData) => ({...prevData,[e.target.id]:e.target.value}));
}


  return (
    <div className="">
        <h1 className="text-3xl fond-bold text-center my-5">{cim}</h1>
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center my-5">
            <input type="text" required id="username" value={formData.username} onChange={writeData} placeholder="Felhasznalo nev" className="input input-bordered w-full max-w-xs m-5" />
            <input type="email" required id="email" value={formData.email} onChange={writeData} placeholder="Email cim" className="input input-bordered w-full max-w-xs m-5" /> 
            <input type="number" required id="age" value={formData.age} onChange={writeData} placeholder="Eletkor" className="input input-bordered w-full max-w-xs m-5" /> 
            <input type="password" required id="password" value={formData.password} onChange={writeData} placeholder="Jelszo" className="input input-bordered w-full max-w-xs m-5" /> 
            <input type="password" required id="passwordAgain" value={formData.passwordAgain} onChange={writeData} placeholder="Jelszo ujra" className="input input-bordered w-full max-w-xs m-5" /> 
            <button type="submit" className="btn btn-primary">Kuldes</button>
        </form>
    </div>
  )
}

export default Register