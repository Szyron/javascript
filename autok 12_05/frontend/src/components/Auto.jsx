function Auto({ auto }) {
  return (
    <div className="m-5 card bg-red-300 text-red-800  w-96">
      <div className="card-body items-center text-center">
        <h2 className=" card-title">{auto.marka} {auto.model}</h2>
        <p className="btn-secondary">{auto.rendszam}</p>
        <p className="btn-secondary">{auto.gyartasiev}</p>
        <p className="btn-secondary">{auto.szin}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-red-700">Modositas</button>
          <button className="btn bg-red-700">Torles</button>
        </div>
      </div>
    </div>
  );
}

export default Auto;
