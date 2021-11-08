import userConnect from '../helper/axios'
 const userPost=(url,data)=>{
  userConnect( `http://localhost:5000/${url}`,data)
}
export default userPost;