

function Location({location}) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-5">
    <div className="card-body">
        <h2 className="card-title">Name of Location: {location.name}</h2>
        <p>Type of Location: {location.type}</p>
        <p>Dimension of Location: {location.dimension}</p>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
  )
}

export default Location