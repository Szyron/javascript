import {useState,useEffect} from "react"
import Post from "./Post";

type Post={
    "userId":number,
    "id":number,
    "title":string,
    "body":string
}




function Tyicode() {

    const [posts,setPost]=useState(Array<Post>);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(adat=>setPost(adat))
        .catch(err=>alert(err));
    },[])



  return (
    <div className="flex flex-row flex-wrap items-center">
        {
            //posts.map((post,i)=>(<p key={i}>UserId:{post.id}, Title: {post.title}</p>))
            posts.map((post)=><Post post={post}/>)
        }

    </div>
  )
}

export default Tyicode