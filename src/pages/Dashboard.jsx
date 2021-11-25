import React, {useEffect} from "react";
import Appbar from "../components/AppBar";
import NoteCard from '../components/NoteCard';
import SideBar from "../components/SideBar";
import {noteRetrieve} from '../service/noteRetrieve'
import {Redirect} from "react-router-dom"
import {useDispatch} from "react-redux";
import {setNotes} from "../actions/notesActions";
import CreateNote from "../components/createNote";
import DeleteNote from "../components/DeleteNote";
import {Box} from "@mui/material";
const Dashboard = () => {
    const dispatch = useDispatch();
    let [path,setPath]=React.useState("")
    useEffect(() => {
        fetchitem();
    }, []);
    const fetchitem = () => {

        noteRetrieve().then((res) => {
            dispatch(setNotes(res.data));
        }).catch((err) => {
            console.log(err); <Redirect to="login"/>
        });
    };
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Fundoo notes");
    const handleDrawer = () => {
        (open) ? setOpen(false) : setOpen(true)
    };
    const handleClick = (title) => {
        setTitle(title)
    }
    return (<div>
 <Box  sx={{ p: 4}}>
        <Appbar handleDrawerOpen={handleDrawer}
            title={title}/>
        <SideBar open={open}
            setOpen={setOpen}
            handleClick={handleClick}
            path={path}
            setPath={setPath}/>

        {(path==="trash")?(<DeleteNote/>):( <div><CreateNote/>
        <div className="note-cards">
            <NoteCard value={false}/>
        </div></div>)}
       
        </Box>

    </div>)
}
export default Dashboard
