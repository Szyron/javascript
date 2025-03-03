import { useEffect,useState } from "react"
import { RandUser } from "../types/RandomUser";
import UserCard from "./UserCard";


// type Name={
//     "title":string,
//     "first":string,
//     "last":string,
// }

// type RandUser={
//     "gender":string,
//     "name":{
//         "title":string,
//         "first":string,
//         "last":string
//     },
//     // name:Name,
//     location:{
//         street:{
//             "number":number,
//             "name":string
//         },
//         "city":string,
//         "state":string,
//         "country":string,
//         "postcode":string
//         coordinate:{
//             "latitude":string,
//             "longitude":string
//         },
//         "timezone":{
//             "offset":string,
//             "description":string
//         }
//     },
//     email:string,
//     login:{
//         "uuid":string,
//         "username":string,
//         "password":string,
//         "salt":string,
//         "md5":string,
//         "sha1":string,
//         "sha256":string
//     },
//     dob:{
//         "date":string,
//         "age":number
//     },
//     registered:{
//         "date":string,
//         "age":number
//     },
//     "phone":string,
//     "cell":string,
//     id:{
//         "name":string,
//         "value":string
//     },
//     pictures:{
//         "large": string,
//         "medium": string,
//         "thumbnail": string
//     },
//     "nat":string,
// }


function RandomUsers() {

    const [users,setUsers]=useState(Array<RandUser>)

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=30')
        .then(res=>res.json())
        .then(adat=>setUsers(adat.results))
        .catch(err=>alert(err));
    },[])

  return (
    <div className="flex flex-row flex-wrap items-center">
        {
            users.map((user,i)=>(<UserCard key={i} user={user}/>))
        }
    </div>
  )
}

export default RandomUsers