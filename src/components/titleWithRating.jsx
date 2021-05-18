import React from 'react';
import StarRatingComponent from "react-star-rating-component";
import {Box, Typography} from "@material-ui/core";

function TitleWithRating(props) {
  return (
    <Box display={"flex"} flexDirection={"column"}>
    <Typography>{props.name}</Typography>
    <Box display={"flex"} flexDirection={"row"} alignContent={"center"}>
      <Typography variant={"h6"}>{props.rating.toString()}</Typography>
      <Box alignSelf={"center"}>
      <StarRatingComponent
        editing={false}
        value={props.rating}
      />
      </Box>
    </Box>
    </Box>
  );
}



export default TitleWithRating;
