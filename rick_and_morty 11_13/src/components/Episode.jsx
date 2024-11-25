
function Episode({ episode }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-5">
      <div className="card-body">
        <h2 className="card-title">Episode: {episode.name}</h2>
        <p>Released Date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
}

export default Episode;
