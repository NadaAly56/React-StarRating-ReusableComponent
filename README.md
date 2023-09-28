# Star Rating Component

Star Rating Component is a reusable React component that allows you to add a star rating input to your web applications.

## Installation

- You can install the component via npm:
    ```bash
    npm install star-rating

## Usage
- Import the StarRating component and use it in your React application.

    ```bash
    import React from 'react';
    import { StarRating } from 'star-rating';
    
    function MyComponent() {
      return (
        <div>
          <h1>Rate this:</h1>
          <StarRating
            number={5}            // Number of stars 
            defaultRating={3}    // Default rating (optional)
            color="#ff0c"        // Star color (optional)
            size={30}             // Star size (optional)
            className={'myClass'}   // Custom style (optional)
            messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} // Custom messges instead of numbers (optional)
          />
        </div>
      );
    }
    export default MyComponent;
    
- To get the value of the stars rating use onSetRating props like this 
    
    ```bash
    function MyComponent() {
        const [rating, setRating] = useState()
      return (
        <div>
          <h1>Rate this:</h1>
          <StarRating
            number={5}            // Number of stars (optional)
            defaultRating={3}    // Default rating (optional)
            color="#ff0c"        // Star color (optional)
            onSetRating= {setRating} // (optional)
            >
            <p> You rated this {rating} </p>
        </div>
      );
    }

## Props

| Prop Name       | Type     | Required | Description                                               |
|-----------------|----------|----------|-----------------------------------------------------------|
| `number`        | number   | Required | The number of stars to display. (default 5)               |
| `defaultRating` | number   | Optional | The default rating (initially selected stars).(default 5)   |
| `color`         | string   | Optional | The color of the stars (CSS color value).(default '#ff0c')|
| `className`     | string   | Optional | The style of the stars (css class name).  (default '') |
| `messages`      | Array    | Optional | The messages you want to show of (array of values)(default number[])|
| `size`          | number   | Optional | The size of the stars in pixels.       (default '20px')  |
| `onSetRating`   | function | Optional | A setter function of state you declare to hold the value. |
