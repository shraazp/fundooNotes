import {getToken} from '../utils/Common';
import {userConnect, getNotes} from '../helper/axios'
const token = getToken("token");
const url = "http://localhost:5000/notes"
const notes = () => {
    return getNotes(url, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};
export default notes
