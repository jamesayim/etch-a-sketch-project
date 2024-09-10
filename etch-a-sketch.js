const divContainer = document.querySelector("#divContainer");

function createGrid(div) {
    for (let i = 0; i < div * div; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        divContainer.appendChild(square);
    }
}

createGrid(16);