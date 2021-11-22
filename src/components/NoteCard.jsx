import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    CardActions
} from "@mui/material";
import React from "react";
import '../css/notes.css'
import {useSelector} from "react-redux";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {update} from "../service/noteRetrieve";
import {useDispatch} from "react-redux";
import { updateNote } from "../actions/notesActions";

const Note = ({classes}) => {
    const [open, setOpen] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    const [noteId, setNoteId] = React.useState("")
    const dispatch = useDispatch();
    const data = {
        title: title,
        content: content
    };
    const handleClickOpen = (item) => {
        setTitle(item.title);
        setContent(item.content);
        setNoteId(item._id)
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleUpdate = () => {
        update(data, noteId).then((res) => {
            dispatch(updateNote(res))
        }).catch((err) => console.log(err.message));
        handleClose()
    }

    const notes = useSelector((state) => state.allNotes.searchNotes);
    return((notes.length > 0) ? (
        <div>
            <Grid container
                spacing={4}>
                {
                notes.map((item) => {
                    return (
                        <Grid item
                            xs={4}
                            key={
                                item._id
                        }>
                            <Card className="notesCard"
                                onClick={
                                    () => {
                                        handleClickOpen(item)
                                    }
                            }>

                                <Typography variant="h5">
                                    {
                                    item.title
                                }</Typography>
                                <Typography sx={
                                        {mb: 1.5}
                                    }
                                    color="text.secondary">
                                    {
                                    item.content
                                } </Typography>


                                {/* {hover ? <NoteIcons /> : null} */} </Card>

                        </Grid>

                    );
                })
            } </Grid>
            <div>
                <Dialog fullWidth maxWidth="sm"
                    open={open}
                    onClose={handleClose}
                    // Allows other things to take focus
                    hideBackdrop
                >

                    <DialogContent>
                        <input className="title" type="text"
                            value={title}
                            onChange={
                                e => setTitle(e.target.value)
                            }
                            name="title"
                            placeholder="Title"/>
                        <textarea className="text-area"
                            value={content}
                            onChange={
                                e => setContent(e.target.value)
                            }
                            name="content"
                            placeholder="Take a note..."/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>close</Button>
                        <Button onClick={handleUpdate}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    ) : (
        <span>No matching results.</span>
    ));

};

export default Note;
