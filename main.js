var gridBox = 16;


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        var rowContainer = document.createElement("div");
        rowContainer.className = "rowContainer" + i;
        rowContainer.style.display = "flex";
        rowContainer.style.flexWrap = "nowrap";
        rowContainer.style.width = "100%";
        rowContainer.style.height = 100/gridSize + "%";
        rowContainer.style.backgroundColor = "black"
        document.querySelector(".sketchpad").appendChild(rowContainer);
        for (let j = 0; j < gridBox; j++) {
            var singleBox = document.createElement("div");
            singleBox.className = "single-box"
            singleBox.className += " box-" + i + "-" + j
            singleBox.style.width = 100/gridSize + "%";
            singleBox.style.height = "100%";
            singleBox.style.backgroundColor = "#f6f6f6"
            singleBox.style.border = "1px solid black";
            document.querySelector(".rowContainer" + i).appendChild(singleBox);
        }
    }
}

createGrid(gridBox);

function blackHover() {
    let allBoxes = document.querySelectorAll('.single-box')
    allBoxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "rgb(0,0,0)"
        })
    })
}

blackHover();

function randomColor() {
    let allBoxes = document.querySelectorAll('.single-box')
    
}