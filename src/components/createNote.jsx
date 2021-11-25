import React, { useState } from "react";
import {create} from '../service/noteRetrieve'

import { useDispatch } from "react-redux";
import { addNewNote } from "../actions/notesActions";
import { Paper, InputBase, Button, Grid ,IconButton} from "@mui/material";
import PaletteIcon from '@mui/icons-material/Palette';
import Popover from '@mui/material/Popover';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import colorPaletteClassName from "./ColorPalette";
const CreateNote = () => {
    const [titleFieldVisible, setTitleFieldVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [color,setColor]=React.useState("White")
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const showTitleField = () => {
        setTitleFieldVisible(true)
    }
    const hideTitleField = () => {
        setTitleFieldVisible(false)
    }
    const dispatch = useDispatch();

    const data = {
        title: title,
        content: content,
        color:color
    };
    const handleSubmit = e => {
        e.preventDefault()
        create(data).then((res)=>{ if (res.data.status === 200) {
            dispatch(addNewNote(res.data.message))
          } else {
            console.log(res);
          }}).catch((err) => console.log(err.message));
        setTitle("");
        setContent("");
        setColor("White")
        hideTitleField();
    }
    const handleColor=(colorItem)=>{
      setColor(colorItem)
    }
    return (
      <div className="create-notes">
        <Paper className="add-note-container" elevation={5} style={{background:color}}>
          <InputBase
            type="text"
            placeholder={titleFieldVisible ? "Title" : "Take a note..."}
            fullWidth
            value={title}
            inputProps={{
              style: { height: "36px" },
            }}
            onFocus={() => showTitleField()}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleFieldVisible && (
            <Grid container>
              <Grid item xs={12}>
                <InputBase
                  type="text"
                  placeholder="Take a note..."
                  fullWidth
                  value={content}
                  multiline={true}
                  inputProps={{
                    style: { height: "36px" },
                  }}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="right">
                <IconButton onClick={handleClick}>
                <PaletteIcon/></IconButton>
                <Popover id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}> <Grid container sx={{ p: 1 }}>
          {colorPaletteClassName.map((colorItem,index)=>{
          return(
            <Grid item xs={12} sm={6} md={3} sx={{width:"11px"}} key={index}>
              <IconButton  onClick={()=>{handleColor(colorItem.colorCode)}}>
          <Brightness1Icon style={{ color: colorItem.colorCode }} /></IconButton></Grid>)})} </Grid>
      </Popover>
                <Button
                  style={{ color: "black", textTransform: "none" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button
                  style={{ color: "black", textTransform: "none" }}
                  onClick={()=>{hideTitleField(); setTitle("");
                  setContent("");
                  setColor("White")}}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          )}
        </Paper></div>
      );
}
export default CreateNote