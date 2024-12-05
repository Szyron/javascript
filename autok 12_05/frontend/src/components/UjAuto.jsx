import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UjAuto() {

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [marka, setMarka] = useState("");
  const [model, setModell] = useState("");
  const [rendszam, setRendszam] = useState("");
  const [gyartasiev, setGyartasiev] = useState("");
  const [szin, setSzin] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault(); //nem tortenik oldalujratoltes ha formot kuldesz
    adatkuldes({id,marka,model,rendszam,gyartasiev,szin},
                'POST',
                `${import.meta.env.VITE_BASE_URL}/autok`);
  }
  
  const adatkuldes = async (adat,method,url) => {
    const keres = await fetch(url,{
        method: method,
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(adat)
    });
    const valasz = await keres.text();
    alert(valasz);
    navigate("/autok");
  }
  return (

    <div>
        <h1 className="m-5 text-3xl text-red-800 font-bold text-center">Uj auto felvetel</h1>
    <form  onSubmit={onSubmit} class="flex flex-col items-center justify-center">
        <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg az id-t"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a markat"
        value={marka}
        onChange={(e) => setMarka(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a modellt"
        value={model}
        onChange={(e) => setModell(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a rendszamot"
        value={rendszam}
        onChange={(e) => setRendszam(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a jarmu gyartasi ev-et"
        value={gyartasiev}
        onChange={(e) => setGyartasiev(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <input
        type="text"
        placeholder="Adja meg a jarmu szinet"
        value={szin}
        onChange={(e) => setSzin(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className="m-5">
      <button type="submit" className=" btn bg-red-700">Felvitel</button>
      </div>

      </form>
    </div>

  );
}

export default UjAuto;
