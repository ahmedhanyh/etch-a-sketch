const container = document.querySelector("#container");

let dim = 1024 / 16;
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.style.width = `${dim}px`;
    div.style.height = `${dim}px`;
    container.appendChild(div);
}







