const container = document.getElementById("container");

const createGrid = () => {
    for (let i = 0; i < 16 * 16; i++)
    {
        const box = document.createElement("div");
        box.classList.add('box');
        box.style.width = "45px";
        box.style.height = "45px";
        container.appendChild(box);
    }
}

createGrid();