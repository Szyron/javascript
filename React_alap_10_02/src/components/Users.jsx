import { useState, useEffect } from "react";
import UserSelect from './UserSelect';
import User from './User';

function Users() {
    const [users, setUsers] =useState([]) //<<< useState([]) milyen adatstrukturat kezelunk

    const [userNum, setUserNum] = useState(5)
    useEffect(()=> {
        fetch(`https://randomuser.me/api/?results=${userNum}`) // mennyi adattal akarjuk feltolteni a listat
        .then(res => res.json())
        .then(felhasznalok => setUsers(felhasznalok.results))
        .catch(err => console.log(err))
    }, [userNum]);  //berakjuk a dependensis arraybe a userNum-ot
  return (
    <div>
        <h2>Felhasznalok</h2>
        <UserSelect setUserNum={setUserNum}/>
        {   
            users.length > 0 ?
            //users.map((user,i)=>(<p key={i}>{user.name.title}, Full name: {user.name.first}  {user.name.last}</p>))
            users.map((user,i)=>(<User key={i} user={user}/>))
            : 
            <><p>A lista ures</p></>
        }
        <h2>Felhasznalok szama : {users.length} fo.</h2>

    </div>
  )
}

export default Users