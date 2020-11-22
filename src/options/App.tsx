import React, { useState } from 'react';
import Tasks from'./Tasks'
import {item,itemClicked,addnewTask, itemDelete} from './type'
import AddForm from './AddForm'
import theImage from './download3.png'
import {makeStyles,ThemeProvider,createMuiTheme, withStyles } from '@material-ui/core/styles';
import Typograghy from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typograghy);

const GreyTextTypography = withStyles({
  root: {
    color: "#6D6968",
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '70px 50px',
  }
})(Typograghy);

const todoListItems: Array<item> =[]

const App: React.FC=()=>{

  const [todoItems,settodoItems]=useState(todoListItems)

  const itemClicked :itemClicked=(selectedItem)=>{
     const newtodoItems=todoItems.map(choice=> 
      { if(choice===selectedItem && !selectedItem.done) {
        return{
          ...choice,
          done:!choice.done,
          action:"Undo"
        }
      }
      else if(choice===selectedItem && selectedItem.done) {
        return{
          ...choice,
          done:!choice.done,
          action:"Complete"
      }
      }
return choice;
});
settodoItems(newtodoItems);
}

const itemDelete:itemDelete=(task)=>{
  const newtodoItems=todoItems.filter(choice => choice !== task)

settodoItems(newtodoItems);
}

const addnewTask:addnewTask= newTask=>{
  newTask.trim() !== "" && settodoItems([...todoItems,{task:newTask,done:false,action:"complete"}])
}
  return (
<Container maxWidth="md">
  <Container  style={{width:"100%", height:"50%", borderRadius:'5px', backgroundColor:"#0080ff" }}>
    <Box m={2} pt={3} >
    <WhiteTextTypography variant="h2" align="right" >To-Do App!</WhiteTextTypography>
    </Box>
    <Box m={2} pt={3} >
    <WhiteTextTypography variant="subtitle1" align="right">Add New To-Do</WhiteTextTypography>
    </Box>
   
    <AddForm addnewTask={addnewTask}/>
  
  </Container>
  <Container  style={{width:"100%", height:"50%", borderRadius:'5px', backgroundColor:"white" }}>
    <Box>
      <GreyTextTypography variant="h6" >Let's get some work done!</GreyTextTypography>
      <Tasks tasks={todoItems} itemClick={itemClicked} itemDelete={itemDelete}/>
    </Box>
    <hr></hr>
  </Container>
  <Container className="footer">
    <Box display="block">
     <img src={theImage}/>
      <Typograghy variant="h2" style={{ fontSize: '15px', color:'#6D6968', fontWeight:'lighter'}} className="footer-title">proudly powered by Cosmic JS</Typograghy>
    </Box>
  </Container>
  </Container>
  );
}

export default App;
