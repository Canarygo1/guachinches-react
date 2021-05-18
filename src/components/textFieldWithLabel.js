import React from 'react';
import {Box, TextField, Typography} from "@material-ui/core";

function TextFieldWithLabel(props) {
  return (
    <div className={"textfield-container"}>
      <Typography>Label</Typography>
        <TextField id="standard-basic" label="Standard" />
    </div>
  );
}

export default TextFieldWithLabel;
