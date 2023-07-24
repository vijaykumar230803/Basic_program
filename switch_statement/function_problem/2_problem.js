const prompt =require("prompt-sync")();

const squareSide = parseInt(prompt("Enter a squareside :"));

const rectangleLength =parseInt(prompt("Enter a reactangle length:"));

const rectangleWidth =parseInt(prompt("Enter a rectangle width :"));

const circleRadius =parseInt(prompt("Enter a circleRadius:"));



function squareArea(side) {
    return side * side;
  }
  
  function rectangleArea(length, width) {
    return length * width;
  }
  
  function circleArea(radius) {
    return Math.PI * radius * radius;
  }
  

 
  const squareAreaResult = squareArea(squareSide);
  const rectangleAreaResult = rectangleArea(rectangleLength, rectangleWidth);
  const circleAreaResult = circleArea(circleRadius);


  console.log(`Area of the square: ${squareAreaResult}`);
  console.log(`Area of the rectangle: ${rectangleAreaResult}`);
  console.log(`Area of the circle: ${circleAreaResult}`);

  