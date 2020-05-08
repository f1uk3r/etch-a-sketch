let gridBox = 25;
let buttonActive = "randomColor";
let resetButton = document.querySelector('.reset')

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
            singleBox.style.backgroundColor = "white"
            singleBox.style.border = "1px solid black";
            document.querySelector(".rowContainer" + i).appendChild(singleBox);
        }
    }
}

createGrid(gridBox);
setTheme(buttonActive); 

function setTheme(buttonActive) {
    if (buttonActive == "black") {
        blackHover();
    }
    else if (buttonActive == "randomColor") {
        randomHover();
    }
    else if (buttonActive == "grayScale") {
        grayScale();
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

/*function reset() {
    let allBoxes = document.querySelectorAll('.single-box');
    allBoxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
    let divCount = prompt('How many squares wide should the grid be? (1-100)');
    createGrid(divCount)

}

resetButton.addEventListener('click', reset())*/