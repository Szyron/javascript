import React from "react";

function Kutyafajta({kutyafajta}) {
  return (
    <div className="card bg-primary text-primary-content w-96 m-5">
      <div className="card-body">
        <h2 className="card-title">{kutyafajta.Id}</h2>
        <p>{kutyafajta.nev}</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Kutyafajta;
