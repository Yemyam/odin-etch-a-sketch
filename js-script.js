const container = document.querySelector("#container");
createGrid(50);
var mousedown = false;

var slider = document.querySelector(".slider")
var resolution = document.querySelector("#resolution")
slider.oninput = function() {
    resolution.textContent = this.value + " X " + this.value;
    container.replaceChildren();
    createGrid(this.value)
  }

function createGrid(dimension) {
    // loop to add grid cells into container
    for (let i = 0; i < dimension; i++){
        for (let j = 0; j < dimension; j++){
            var cell = document.createElement("div");
            let boxSize = 600/dimension;
            cell.classList.add("cell")
            cell.style.maxWidth = boxSize + 'px';
            cell.style.maxHeight = boxSize + 'px';
            cell.style.minWidth = boxSize + 'px';
            cell.style.minHeight = boxSize + 'px';
            container.appendChild(cell);    
        }
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.classList.add("hovered")
            if(mousedown){
                cell.classList.add("colored")
            }
        })
        cell.addEventListener("mouseleave", () => {
        cell.classList.remove("hovered")
        })
        cell.addEventListener("mousedown", () => {
            mousedown = true;
            cell.classList.add("colored")
        })
        cell.addEventListener("mouseup", () => {
            mousedown = false;
        })
    })
}

// var circle = document.querySelector(".circle");
// circle.addEventListener("mouseover",() => {

// })