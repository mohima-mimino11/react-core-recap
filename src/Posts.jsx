import { useEffect, useState } from "react"
import Post from "./Post";
import './Posts.css'

export default function Posts(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  },[])
  return (
    <div className="box">
      <h3>Posts: {posts.length} </h3>
      {
        posts.map(post => <Post post={post}></Post>)
      }
    </div>
  )
}

/**
 * 1. declare a state to hold the data
 * 2. useEffect with callback and dependency array
 * 3. use fetch to load data
 * 4. set loaded data to state setter function
 * 5. Display data on the components
 */