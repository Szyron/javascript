import { RandUser } from "../types/RandomUser";

type RandUserProp={
    user:RandUser
}


function UserCard({user}:RandUserProp) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm m-5">
      <figure>
        <img
          src={user.picture.large}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
  );
}

export default UserCard;
