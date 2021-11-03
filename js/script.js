
/* Global Variables */

const container = document.querySelector("#container");  // Select the container div
const generateGridButton = document.querySelector("#generate-grid-btn");  // Select the generate grid button

/* End of Global Variables */


/* Functions Declarations */

// This function takes the number of square divs per side and generates a grid of square divs
function generateGrid(numOfSquaresPerSide = 16) {
    
    let dim = 1024 / numOfSquaresPerSide;
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
    
    while (container.hasChildNodes()) {
        container.removeChild(container.firstElementChild);
    }   
}

/* End of Functions Declarations */


/* Event Listeners */

// Add an hover event listener to the container so that the square divs inside it change their colors when hovered over
container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "red";
});    

// Add a click event listener to the generate grid button - when clicked,
// it clears the current grid, asks the user for the width of the new grid and it finally generates the new grid
generateGridButton.addEventListener("click", e => {
    
    clearGrid();
    
    let numOfSquares;
    
    do {

        numOfSquares = +prompt("Enter the number of squares per side for the new grid (between 16 and 100):");

    } while (numOfSquares > 100 || numOfSquares < 16)
    
    generateGrid(numOfSquares);
});

/* End of Event Listeners */


// Calling the generateGrid() function
generateGrid();





