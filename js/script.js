
/* Global Variables */

const container = document.querySelector("#container");  // Select the container div
const generateGridButton = document.querySelector("#generate-grid-btn");  // Select the generate grid button
const clearGridButton = document.querySelector("#clear-grid-btn");  // Select the clear grid button
const randomButton = document.querySelector("#random-color-btn");  // Select the random button
let randomToggle = false;

/* End of Global Variables */


/* Functions Declarations */

// This function takes the number of square divs per side and generates a grid of square divs
function generateGrid(numOfSquaresPerSide = 16) {
    
    let dim = 512 / numOfSquaresPerSide;
    let totalNumOfSquares = numOfSquaresPerSide ** 2;
    
    for (let i = 0; i < totalNumOfSquares; i++) {
        let div = document.createElement("div");
        div.style.width = `${dim}px`;
        div.style.height = `${dim}px`;
        container.appendChild(div);
    }    
}    

// This function clears the grid
function clearGrid() {
    const allGridSquares = document.querySelectorAll("#container div");
    allGridSquares.forEach(square => square.style.backgroundColor = "white");
}

// This function removes the grid
function removeGrid() {
    
    while (container.hasChildNodes()) {
        container.removeChild(container.firstElementChild);
    }
}

// This function generates a random rgb value for a non-white color
function randomRGBValue() {
    return Math.random() * 254;
}

// This function generates random rgb values and
// returns a formatted string that can be used as the value for the background-color property
function randomColor() {
    let r = randomRGBValue();
    let g = randomRGBValue();
    let b = randomRGBValue();
    return `rgb(${r}, ${g}, ${b})`;
}

/* End of Functions Declarations */


/* Event Listeners */

// Add an hover event listener to the container so that the square divs inside it change their colors when hovered over
container.addEventListener("mouseover", e => {
    if (randomToggle) {
        e.target.style.backgroundColor = randomColor();
    } else {
        e.target.style.backgroundColor = "black";
    }
});    

// Add a click event listener to the generate grid button - when clicked,
// it clears the current grid, asks the user for the width of the new grid and it finally generates the new grid
generateGridButton.addEventListener("click", e => {
    
    removeGrid();
    
    let numOfSquares;
    
    do {

        numOfSquares = +prompt("Enter the number of squares per side for the new grid (between 16 and 100):");

    } while (numOfSquares > 100 || numOfSquares < 16)
    
    generateGrid(numOfSquares);
});

// Clear the grid when the clear grid button is clicked
clearGridButton.addEventListener("click", clearGrid);

// Toggle the random color switch that changes the square divs colors to a random color
randomButton.addEventListener("click", () => {
    randomButton.classList.toggle("rainbow");
    if (randomToggle === true) {
        randomToggle = false;
    } else {
        randomToggle = true;
    }
});

/* End of Event Listeners */


// Calling the generateGrid() function
generateGrid();





