import {getToken} from '../utils/Common';
import {getNotes, createNotes, updateNotes,deleteNotes} from '../helper/axios'
const token = getToken("token");

const noteRetrieve = () => {
    let url = "http://localhost:5000/notes"
    return getNotes(url, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};
const create = (data) => {
    let url = "http://localhost:5000/notes"
    return createNotes(url, data, `bearer ${token}`).then((response) => {
        return response
    }).catch((err) => {
        throw err
    })
}
const update = (data,id) => {
   let url=`http://localhost:5000/notes/${id}`
    return updateNotes(url, data, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}

const Delete=(id)=>{
    let url=`http://localhost:5000/notes/${id}`
    return deleteNotes(url, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}

export {
    noteRetrieve,
    create,
    update,
    Delete
   
}
