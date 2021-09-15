import React, {useState} from 'react';
import {Divider, MenuItem, Select, Switch, TextField, Typography} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import SelectDays from "./selectDays";

function Schedules({schedule,handleOnChange}) {
  let [select, setSelect] = useState(0);
  let handleChange = (event)=>{
    setSelect(event.target.value)
  }
  let test = async () =>{
    handleOnChange();
  }
  return (
    <div>
      <div className={"schedules-top"}>
        <Typography>Horario</Typography>
        <Switch/>
        <Typography>Tipo de vista</Typography>
        <Select
          value={select}
          defaultChecked={true}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          onChange={handleChange} style={{marginLeft: 5}}>
          <MenuItem value={0}>Texto</MenuItem>
          <MenuItem value={1}>Automatico</MenuItem>
        </Select>
      </div>
      <Divider></Divider>
      {select === 0 ? <div>
        <Alert severity="info">El formato debe de ser el siguiente(Dia: hora entrada - hora salida, hora entrada - hora salida)</Alert>
        <TextField
          value={schedule}
          id="outlined-textarea"
          multiline
          onChange={()=>test()}
          rows="7"
          fullWidth={true}
          name={"horarios"}
        />
      </div> : <SelectDays schedule={schedule} />}
    </div>

  );
}

export default Schedules;
