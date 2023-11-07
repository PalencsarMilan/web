const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let displayMatrix = Array(9).fill(null);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", initialBoard);

initialBoard();

function initialBoard() {
    displayMatrix = Array(9).fill(null);
    renderBoard();
}

function setDisplayBoard(event) {
    const target = event.target;
    if (target.classList.contains("cell") && target.textContent === "") {
        const index = Array.from(target.parentNode.children).indexOf(target);
        const randomNumbers = numbers.filter(num => !displayMatrix.includes(num));
        if (randomNumbers.length > 0) {
            const randomIndex = Math.floor(Math.random() * randomNumbers.length);
            displayMatrix[index] = randomNumbers[randomIndex];
            renderBoard();
        }
    }
}

function renderBoard() {
    const matrixDiv = document.getElementById("matrix");
    matrixDiv.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = displayMatrix[i] === null ? "" : displayMatrix[i];
        cell.addEventListener("click", setDisplayBoard);
        matrixDiv.appendChild(cell);
    }
}
initialBoard();
