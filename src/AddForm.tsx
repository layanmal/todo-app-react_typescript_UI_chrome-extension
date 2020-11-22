import React, { ChangeEvent, FormEvent, PureComponent, useState } from 'react';
import {item,itemClicked,addnewTask} from './type'
import { Button, createMuiTheme, FilledInput, FormControl, Input, TextField, ThemeProvider } from '@material-ui/core';


const theme=createMuiTheme({
  palette:{
    secondary:{
      main:"#FFFFFF"
    }
  }
})

interface AddFormsinterface{
   addnewTask:addnewTask
}



const AddForm:React.FC<AddFormsinterface>=({addnewTask})=>{

    const [newTask,setnewItems]=useState("");

    const handlechange=(e:ChangeEvent<HTMLInputElement>)=>{
     setnewItems(e.target.value)

    };
    const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addnewTask(newTask)
    };

    return(
        <ThemeProvider theme={theme}>
          <FormControl fullWidth={true} >
            <FilledInput autoFocus  style={{backgroundColor:"white", width:"98%",lineHeight:'1', margin:"10px 0",alignSelf:"center",color:"#0080ff"}} placeholder="add a new Item"  value={newTask} onChange={handlechange}/>
            <Button color="secondary" size="small" variant="outlined" type="submit" style={{ width:"12px",padding:"8px 25px", margin:"5px 10px 20px 10px", borderBlockColor:"white",alignSelf:"flex-end"}} onClick={handleSubmit}>Add </Button>
         </FormControl>
       </ThemeProvider> 
    );
}
export default AddForm
