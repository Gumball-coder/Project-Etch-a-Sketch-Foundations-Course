
let rows = prompt("How many rows/columns", 0);
console.log(rows);

let columns = rows;

let GRIDSIZE = 600;


let container = document.getElementById('container');
container.style.height = `${GRIDSIZE}px`;
container.style.width = `${GRIDSIZE}px`;


function createGrid(){
    for(let i = 0; i < (rows * columns); i++){
        let gridcell = document.createElement("div");
        gridcell.style.height = `${GRIDSIZE/rows}px`;
        gridcell.style.width = `${GRIDSIZE/columns}px`;

        gridcell.classList.add("cell");

        container.append(gridcell);

        gridcell.addEventListener('mouseover', resetBoard);
    }
}

function resetBoard(){

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'pink'; // Reset to original color (default background color)
    });
 }
 
function changeToBlack(){
    this.style.backgroundColor = 'black';
}

function changeToRainbow(){
let valRed = Math.random() * 255;
let valBlue = Math.random() * 255;
let valGreen = Math.random() * 255;

this.style.backgroundColor = `rgb(${valRed} ${valBlue} ${valGreen})`;
}

function eraser(){
this.style.backgroundColor = 'pink';

}

function resetBoard(){
createGrid();

}




createGrid();