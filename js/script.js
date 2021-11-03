const container = document.querySelector("#container");

let dim = 1024 / 16;
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.style.width = `${dim}px`;
    div.style.height = `${dim}px`;
    container.appendChild(div);
}

container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "red";
});


function clearGrid(e) {
    while (container.hasChildNodes) {
        container.removeChild(container.firstElementChild);
    }
}

const clearGridButton = document.querySelector("#clear-grid-btn");
clearGridButton.addEventListener("click", clearGrid);


