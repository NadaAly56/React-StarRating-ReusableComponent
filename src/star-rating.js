import { useState } from "react";
import PropTypes from 'prop-types'
import { Star } from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px"
};
const starContainerStyle = {
  display: "flex",
  gap: "4px"
};

StarRating.propTypes = {
  number: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  messages: PropTypes.array,
  onSetRating: PropTypes.func,
}

export function StarRating ({
  number = 5,
  color = "#ff0c",
  size = 20,
  className,
  messages = [],
  defaultRating = 0,
  onSetRating = () => {}
})  {
  const [rating, serRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const textStyle = {
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`
  };
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: number }, (_, i) => (
          <Star
            key={i}
            onClick={() => {
              serRating(i + 1);
              onSetRating(messages.length > 0 ? messages[i] : rating + 1);
            }}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            hoverIn={() => setTempRating(i + 1)}
            hoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === number
          ? tempRating
            ? messages[tempRating - 1]
            : messages[rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

;
  