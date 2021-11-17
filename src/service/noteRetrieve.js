import {getToken} from '../utils/Common';
import {getNotes,createNotes} from '../helper/axios'
const token = getToken("token");
const url = "http://localhost:5000/notes"
const noteRetrieve = () => {
    console.log(token)
    return getNotes(url, `bearer ${token}`).then((response) => {
        console.log(response)
        return response;
    }).catch((err) => {
        throw err;
    });
};
const create=(data)=>{
return createNotes(url,data,`bearer ${token}`).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})
}
export{noteRetrieve,create}
