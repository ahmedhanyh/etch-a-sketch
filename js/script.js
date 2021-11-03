const container = document.querySelector("#container");

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

generateGrid();

container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "red";
});


function clearGrid(e) {
    
    while (container.hasChildNodes()) {
        container.removeChild(container.firstElementChild);
    }
    
    const numOfSquares = +prompt("Enter the number of squares per side for the new grid:");
    
    generateGrid(numOfSquares);
}

const clearGridButton = document.querySelector("#clear-grid-btn");
clearGridButton.addEventListener("click", clearGrid);


