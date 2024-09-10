const divContainer = document.querySelector("#divContainer");

function createGrid(div) {
    for (let i = 0; i < div * div; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        divContainer.appendChild(square);
    }
}

createGrid(16);

const upperButton = document.querySelector(".upperButton");
upperButton.addEventListener("click", () => {
    let userInput = +prompt("Enter the number of grid(s) to be produced in the container:");
    if (userInput >= 100) {
        while (userInput >= 100) {
            userInput = prompt(`Enter a number below 100.`);
        }
    }
    // calculating the size of squares to fit inside the container
    const gap = 2;
    const maxContainerSize = 800;

    const squareSize = Math.floor((maxContainerSize - gap * (userInput - 1)) / userInput);
    const containerSize = squareSize * userInput + gap * (userInput - 1);

    // If the grid is too large, reduce the square size
    if (squareSize < 10) { // Set a minimum size for squares
        squareSize = 10;
    }

    // styling container
    divContainer.style.display = 'flex';
    divContainer.style.flexWrap = 'wrap';
    divContainer.style.width = `${containerSize}px`;
    divContainer.style.height = `${containerSize}px`;
    divContainer.style.gap = `${gap}px`;

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    return createGrid(userInput);
});

