import React, {useEffect } from "react";
import Appbar from "../components/AppBar";
import NoteCard from '../components/NoteCard';
import SideBar from "../components/SideBar";
import {noteRetrieve} from '../service/noteRetrieve'
import AddNoteForm from "../components/AddNote";
import {Redirect} from "react-router-dom"
import { useDispatch } from "react-redux";
import { setNotes } from "../actions/notesActions";

const Dashboard = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    fetchitem();
  }, []);
  const fetchitem = () => {
   
    noteRetrieve()
      .then((res) => {
        dispatch(setNotes(res.data));
      })
      .catch((err) => {
        console.log(err);
        <Redirect to="login" />
      });
  };
  const [open, setOpen] = React.useState(false);
  const [title,setTitle]=React.useState("Fundoo notes");
  const handleDrawer = () => {
    (open)?setOpen(false):setOpen(true)
  };
const handleClick=(title)=>{
  setTitle(title) 
}
    return (
    
    <div>
     
        <Appbar handleDrawerOpen={handleDrawer} title={title} /> 
        <SideBar open={open} setOpen={setOpen} handleClick={handleClick}/>
      <br/><br/><br/><br/>

<AddNoteForm/>
     <div className="note-cards">
       <NoteCard />
       </div>
     
        
    </div>
        )
}
export default Dashboard
