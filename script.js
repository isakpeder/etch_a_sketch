const container = document.getElementById("container");

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const createGrid = () => {
    for (let i = 0; i < 16 * 16; i++)
    {
        const box = document.createElement("div");
        box.classList.add('box');
        box.style.width = "40px";
        box.style.height = "40px";
        container.appendChild(box);

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = getRandomRgbColor();
        })
    }
}

createGrid();