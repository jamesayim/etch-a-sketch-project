const divContainer = document.querySelector("#divContainer");
const maxContainerSize = 800;
const upperButton = document.querySelector(".upperButton");

function createGrid(div) {
    for (let i = 0; i < div * div; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.border = "1px solid black";
        square.style.display = "flex";
        square.style.flex = "1";
        square.style.aspectRatio = "1/1";
        square.style.minWidth = `${maxContainerSize / div}px`;
        divContainer.append(square);
    }
}
createGrid(16);

function hoverEffect() {
    let containerChildren = Array.from(divContainer.children);
    containerChildren.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        });
    });
}
hoverEffect();

upperButton.addEventListener("click", () => {
    let userInput = +prompt("Enter the number of grid(s) to be produced in the container:");
        while (userInput > 100) {
            userInput = prompt(`Enter a number from 0 to 100.`);
        }

    divContainer.textContent = "";
    createGrid(userInput);
    hoverEffect();
});
