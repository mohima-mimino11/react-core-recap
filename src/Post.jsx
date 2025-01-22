import './Posts.css'
export default function Post({post}){
  const {title,body, userId, id} = post;
  
  return (
    <div className="box2">
      <h5>Title: {title}</h5>
      <p><small>userID: {userId}</small></p>
      <p><small>postid {id}</small></p>
      <p>{body}</p>

    </div>
  )
}