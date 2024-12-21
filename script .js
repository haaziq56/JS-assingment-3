// script.js

// Predefined array of at least 10 colors
const colors = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#F333FF", // Magenta
    "#FFC300", // Yellow
    "#FF33A1", // Pink
    "#A133FF", // Purple
    "#33FFF2", // Cyan
    "#FF5733", // Coral
    "#33FFB5"  // Mint
  ];
  
  let colorIndex = 0; // Index to track the current color
  
  // Event listener for the button
  document.getElementById('colorBtn').addEventListener('click', function () {
    colorIndex = (colorIndex + 1) % colors.length; // Move to the next color and loop back
    const newColor = colors[colorIndex]; // Get the next color from the array
    document.body.style.backgroundColor = newColor; // Change background color
    document.getElementById('colorCode').textContent = newColor; // Update displayed color
  });
  