import axios from 'axios'
import {getToken, setUserSession} from '../utils/Common';
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
    }))}
export {
    userConnect,
    getNotes
}
