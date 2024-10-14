import { useState,useEffect } from "react";

function Posts() {
    //kontroller
    const [posts,setPosts] = useState([]);
    //amikor a komponens letrejon akkor useEffectben lefutnak a fuggvenyek
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')  //fetcheljuk a json adatokat
        .then(res => res.json())
        .then(adatok => setPosts(adatok))
        .catch(err=>console.log(err))
    }, [])
  return (
    <div>
        <h2>Posztok</h2>
        {
            posts.map((post,i)=>(<p key={i}>ID:{post.id}, Title: {post.title}</p>))
        }
    </div>
  )
}

export default Posts