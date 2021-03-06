let defaultGridSize = 16;
let resetButton = document.querySelector('.reset');
let blackButton = document.querySelector('.black');
let randomColorButton = document.querySelector('.random-color');
let grayScaleButton = document.querySelector('.gray-scale');

function main() {

    createGrid(defaultGridSize);
    grayScaleHover();
    blackButton.addEventListener('click', blackHover);
    randomColorButton.addEventListener('click', randomHover);
    grayScaleButton.addEventListener('click', grayScaleHover);
    resetButton.addEventListener('click', reset);
}

main()

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        var rowContainer = document.createElement("div");
        rowContainer.className = "rowContainer" + i;
        rowContainer.style.display = "flex";
        rowContainer.style.flexWrap = "nowrap";
        rowContainer.style.width = "100%";
        rowContainer.style.height = 100/gridSize + "%";
        document.querySelector(".sketchpad").appendChild(rowContainer);
        for (let j = 0; j < gridSize; j++) {
            var singleBox = document.createElement("div");
            singleBox.className = "single-box"
            singleBox.className += " box-" + i + "-" + j
            singleBox.style.width = 100/gridSize + "%";
            singleBox.style.height = "100%";
            singleBox.style.backgroundColor = "rgb(255, 255, 255)"
            singleBox.style.border = "1px solid black";
            document.querySelector(".rowContainer" + i).appendChild(singleBox);
        }
    }
}

function blackHover() {
    let allBoxes = document.querySelectorAll('.single-box')
    allBoxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "rgb(0,0,0)"
        })
    })
}


function randomHover() {
    let allBoxes = document.querySelectorAll('.single-box')
    allBoxes.forEach((box) => {
        box.addEventListener('mouseenter', (e) => {
            let red = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
        })
    })
}

function grayScaleHover() {
    let allBoxes = document.querySelectorAll('.single-box');
    allBoxes.forEach((box) => {
        box.addEventListener('mouseenter', (e) => {
            let colorInfo = e.target.style.backgroundColor;
            let colorValues = colorInfo.slice(4, -1);
            let rgbArray = colorValues.split(", ");

            let rValue = rgbArray[0]-26;
            let gValue = rgbArray[1]-26;
            let bValue = rgbArray[2]-26;

            e.target.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
        });
    });
}

function reset() {
    let gridContainer = document.querySelector('.sketchpad')

    let newGridBox = prompt('How many squares wide should the grid be? (1-100)');
    gridContainer.innerHTML = '';
    createGrid(newGridBox);
}

