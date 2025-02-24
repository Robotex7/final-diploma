import { useState } from 'react';
import classes from "./starRating.module.css" ;

export const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className={classes["star-rating"]}>
      {[...Array(totalStars)].map((_, index) => (
        <div
          key={index}
          className={classes.stars}
          onClick={() => handleClick(index)}
        >
          <svg width="46" height="44" viewBox="0 0 46 44" fill={index < rating ? 'white' : 'none'} xmlns="http://www.w3.org/2000/svg">
            <path d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      ))}
    </div>
  );
};