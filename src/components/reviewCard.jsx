import React from 'react';
import {Typography} from "@material-ui/core";
import TitleWithRating from "./titleWithRating";

function ReviewCard({user,review}) {
  console.log("hola");
  return (
    <div className={"review-card"}>
      <div className={"review-card-col"}>
        <div className={"review-card-row"}>
          <div className={"review-card-col"}>
            <Typography>{review.title}</Typography>
            <TitleWithRating rating={review.rating} name={""}/>
          </div>
          <div className={"review-card-col-user"}>
            <Typography>{user.nombre+" " + user.apellidos}</Typography>
            <Typography variant="subtitle2">{review.date}</Typography>
          </div>
        </div>
        <div style={{overflow: "scroll", textOverflow: "ellipsis", overflowX: "hidden"}}>
          <Typography>
            {review.review}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
