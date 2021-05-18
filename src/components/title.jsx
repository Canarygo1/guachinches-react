import React from 'react';
import {Divider} from "@material-ui/core";
import StarRatingComponent from 'react-star-rating-component';

function Title(props) {
  return (
    <div>
      <h2>{props.title}</h2>

      <Divider />

    </div>
  );
}

export default Title;
