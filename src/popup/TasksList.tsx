import React from'react'
import {item,itemClicked,itemDelete} from './type'
import "./TasksList.css"
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box, createMuiTheme, InputLabel, ThemeProvider, Typography } from '@material-ui/core';

const theme=createMuiTheme({
    palette:{
      primary:{
        main:"#000"
      }
    },
  })
  
interface listitems{
    item: item;
    itemClick: itemClicked;
    itemDelete :itemDelete ;
}
const TodoList :React.FC<listitems>=({item,itemClick,itemDelete})=>{

    return(
    <ThemeProvider theme={theme}>
        <Box margin="5px 0">
        <Button  size="medium" variant="outlined" color="primary" style={{marginRight:"5px"}} onClick={()=>itemClick(item)} >{item.action}</Button>
        <Button size="medium" variant="outlined" color="primary"style={{marginRight:"20px"}} onClick={()=>itemDelete(item)}>Delete</Button>
        <InputLabel style={{display:"inline-block",fontSize: '20px',fontWeight:"bold"}} className = {item.done ? "complete" : undefined }>
        {item.task}
        </InputLabel>
        </Box>
    </ThemeProvider>
    );
}
export default TodoList