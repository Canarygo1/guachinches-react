import React from 'react';
import {Select, Switch, Typography} from "@material-ui/core";
import {AddCircle, RemoveCircle} from "@material-ui/icons";
import SelectInterval from "./selectInterval";

function DaySchedule({day , shifts}) {
  return (
    <div className={"select-days"}>
      <Typography>{day}</Typography>
      <Switch defaultChecked={false} color={"primary"}></Switch>
      {shifts.map((e)=>{
        return <SelectInterval shifts={e}></SelectInterval>
      })}
      <AddCircle color={"primary"} />
      <RemoveCircle color={"secondary"}/>
    </div>  );
}

export default DaySchedule;
