import React from 'react';
import {TextField, Typography} from "@material-ui/core";

function TextFieldWithLabel({label, name= "",value = "", onChange}) {
  return (
    <div className={"text-field-container"}>
      <Typography className={"text-field-label"} >{label}</Typography>
      <TextField fullWidth={true}
                 name={name}
                 onChange={onChange}
                 id="standard-basic" value={value}/>

    </div>
  );
}

export default TextFieldWithLabel;
