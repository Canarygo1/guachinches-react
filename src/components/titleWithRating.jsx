import React from 'react';
import StarRatingComponent from "react-star-rating-component";
import {Box, Typography} from "@material-ui/core";

function TitleWithRating({rating,name}) {
  return (
    <Box display={"flex"} flexDirection={"column"}>
    <Typography>{name}</Typography>
    <Box display={"flex"} flexDirection={"row"} alignContent={"center"}>
      <Typography variant={"h6"}>{rating.toString()}</Typography>
      <Box alignSelf={"center"}>
      <StarRatingComponent
        editing={false}
        value={rating}
      />
      </Box>
    </Box>
    </Box>
  );
}



export default TitleWithRating;
