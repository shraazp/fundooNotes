import {userConnect} from '../helper/axios'
 const userPost=(url,data)=>{
  return userConnect( `http://localhost:5000/${url}`,data)
}
export default userPost;