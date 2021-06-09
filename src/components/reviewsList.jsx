import React from 'react';
import ReviewCard from "./reviewCard";

function ReviewsList({reviews=[]}) {
  return (
    <div className={"menu-container"}>
      {reviews.map((review)=> <ReviewCard user={review.usuario} review={review} />)}
    </div>
  );
}

export default ReviewsList;
