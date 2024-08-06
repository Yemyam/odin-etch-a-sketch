const container = document.querySelector("#container");
var dimension = 25;
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
    })
    cell.addEventListener("mouseleave", () => {
        cell.classList.remove("hovered")
    })
})

// container.addEventListener("mouseover",(event) => {
//     let target = event.target;
//     target.classList.add("hovered");
// })
// container.addEventListener("mouseleave", (event => {
//     let target = event.target;
//     console.log(target)
//     target.classList.remove("hovered")
// }))