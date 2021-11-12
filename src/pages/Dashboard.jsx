import React, { useState, useEffect } from "react";
import Appbar from "../components/AppBar";
import NoteCard from '../components/NoteCard'
import {Box, Grid} from "@mui/material";
import notes from '../service/noteRetrieve'

const Dashboard = () => {
  const [note, setNote] = useState([]);
  useEffect(() => {
    fetchitem();
  }, []);
  const fetchitem = () => {
    notes()
      .then((res) => {
        setNote(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 

    return (<Box  m={2} pt={10}sx={
        {display: "flex"}
    }>
        <Appbar/> 
        <Grid container spacing={4}>
             <NoteCard notes={note}/>
           </Grid> </Box>)
}
export default Dashboard
