var gridBox = 16;


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        var rowContainer = document.createElement("div");
        rowContainer.className = "rowContainer" + i;
        rowContainer.id = i;
        rowContainer.style.display = "flex";
        rowContainer.style.flexWrap = "nowrap";
        rowContainer.style.width = "100%";
        rowContainer.style.height = 100/gridSize + "%";
        rowContainer.style.backgroundColor = "black"
        document.querySelector(".sketchpad").appendChild(rowContainer);
        for (let j = 0; j < gridBox; j++) {
            var singleBox = document.createElement("div");
            singleBox.style.width = 100/gridSize + "%";
            singleBox.style.height = "100%";
            singleBox.style.backgroundColor = "grey"
            document.querySelector(".rowContainer" + i).appendChild(singleBox);
        }
    }
}

createGrid(gridBox);