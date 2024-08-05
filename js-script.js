const container = document.querySelector("#container");
// loop to add grid cells into container
for (let i = 0; i < 16; i++){
    var gridRow = document.createElement("div")
    gridRow.classList.add("row")
    for (let j = 0; j < 16; j++){
        var cell = document.createElement("div");
        cell.classList.add("cell")
        gridRow.appendChild(cell);
    }
    container.appendChild(gridRow)
}