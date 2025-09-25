const container = document.getElementById("container");
const gridSizeBtn = document.getElementById("gridSizeBtn");

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const createGrid = (size) => {
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++)
    {
        const box = document.createElement("div");
        box.classList.add('box');
        const boxSize = (640 / size);
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        container.appendChild(box);

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = getRandomRgbColor();
        })

        
    }
}

createGrid(10);

gridSizeBtn.addEventListener('click', () => {
    const sideLength = prompt('Squares per side');
    if (sideLength > 100) {
        alert("Maximum number is 100. Please try Again.");
    }
    else {
        createGrid(sideLength);
    }
})