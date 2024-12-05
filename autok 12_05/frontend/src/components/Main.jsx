function Main() {
  return (
    <div className="hero bg-red-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Auto Nyilvantartas</h1>
          <p className="py-6">
            A simple and easy to use auto management system. Keep track of your
            cars, their maintenance, and expenses.
          </p>
          <button className="btn btn-secondary bg-red-500">Tovabb</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
