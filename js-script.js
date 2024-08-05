const container = document.querySelector("#container");
// loop to add grid cells into container
for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        var cell = document.createElement("div");
        cell.classList.add("cell")
        container.appendChild(cell);
    }
}