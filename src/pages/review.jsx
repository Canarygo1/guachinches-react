import React from 'react';
import Title from "../components/title";
import TitleWithRating from "../components/titleWithRating";
import ReviewsList from "../components/reviewsList";
import { useSelector} from "react-redux";

function Review(props) {
  const {restaurantInfo} = useSelector(state => state.restaurantInfo);
  const {result} = restaurantInfo;


  return (
    <div>
      <Title title={"Valoraciones"}></Title>
      <div className={"review-rating"}>
        <TitleWithRating rating={4.9} name={"Media del Guachinche"}/>
      </div>
      <div className={"menu-container"}>
        <ReviewsList reviews={result.Valoraciones}/>
      </div>
    </div>
  );
}

export default Review;
