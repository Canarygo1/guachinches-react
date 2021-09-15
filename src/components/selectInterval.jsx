import React from 'react';
import {MenuItem, Select, Typography} from "@material-ui/core";


function SelectInterval({shifts}) {
let shift  = shifts.split('-')
  const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"
    ,"14","15","16","17","18","19","20","21","22","23"];
const minutes = ["00","10","20","30","40","50"];
let startHour = shift != undefined ? hours.findIndex(e => e === shift[0].split(':')[0]):undefined;
let startMinutes = shift != undefined ? minutes.findIndex(e => e === shift[0].split(':')[1]):undefined;
let endHour = shift[1] != undefined ? hours.findIndex(e => e === shift[1].split(':')[0]):undefined;
let endMinutes = shift[1] != undefined ? minutes.findIndex(e => {
  if (shift[1].split(':')[1].length === 3){
    return shift[1].split(':')[1].slice(0, -1) === e;
  }else{
    return shift[1].split(':')[1] === e;

  }
}):undefined;
 if (shift[1] !== undefined){
   console.log(shift[1].split(':')[1].slice(0, -1));
 }

  return (
    <div style={{display:"flex",}}>
      <Select value={0}>
        {hours.map((e)=>{
          minutes.map((y) =>{
            return <MenuItem value={e}>{hours[e]+':' + minutes[y]}</MenuItem>
          })

        })}
      </Select>
      <Typography>-</Typography>
      <Select value={0}>
        {hours.map((e)=>{
          return <MenuItem value={e}>{hours[endHour]+ ":" +minutes[endMinutes]}</MenuItem>
        })}
      </Select>
    </div>
  );
}

export default SelectInterval;
