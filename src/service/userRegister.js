import axios from 'axios'
const userConnect=(url,datas)=>{
  axios({
  method:'post',
  url: `http://localhost:5000/${url}`,
  data: datas
}).then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});}

export default userConnect