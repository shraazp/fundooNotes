import axios from 'axios'
const userConnect=(url,datas)=>{
  axios({
  method:"post",
  url: url,
  data: datas
}).then(function (response) {
 console.log(response.data) 
})
.catch(function (error) {
  console.log(error);
 
});}


export default userConnect