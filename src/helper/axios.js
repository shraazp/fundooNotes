import axios from 'axios'
import {setUserSession} from '../utils/Common';
const userConnect = (url, datas) => {
    axios({method: "post", url: url, data: datas}).then(function (response) {
        setUserSession(response.data.message)
        console.log(response.data)
    }).catch(function (error) {
        console.log(error);

    });
}

const getNotes = (url, token) => {
    return(axios({
        method: "get",
        url: url,
        headers: {
            Authorization: token
        }
    }))
}

const createNotes = (url, data, token) => {
    return(axios({
        method: "post",
        url: url,
        data: data,
        headers: {
            Authorization: token
        }
    }))
}
const updateNotes = (url, data, token) => {
    return(axios({
        method: "put",
        url: url,
        data: data,
        headers: {
            Authorization: token
        }
    }))
}
export {
    userConnect,
    getNotes,
    createNotes,
    updateNotes
}
