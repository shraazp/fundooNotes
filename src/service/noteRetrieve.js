import {getToken} from '../utils/Common';
import {getNotes, createNotes, updateNotes} from '../helper/axios'
const token = getToken("token");
let url = "http://localhost:5000/notes"
const noteRetrieve = () => {
    return getNotes(url, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};
const create = (data) => {
    return createNotes(url, data, `bearer ${token}`).then((response) => {
        return response
    }).catch((err) => {
        throw err
    })
}
const update = (data,id) => {
    url=`http://localhost:5000/notes/${id}`
    return updateNotes(url, data, `bearer ${token}`).then((response) => {
        console.log(response)
        return response;
    }).catch((err) => {
        throw err;
    })
}

export {
    noteRetrieve,
    create,
    update,
   
}
