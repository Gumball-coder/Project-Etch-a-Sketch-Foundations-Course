
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
    }
}

function resetBoard(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
 }
 
function changeToBlack(){
    const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', function() {
                this.style.backgroundColor = 'black';
            });
        });
}

function changeToRainbow(){

    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            let valRed = Math.random() * 255;
            let valBlue = Math.random() * 255;
            let valGreen = Math.random() * 255;
        
            this.style.backgroundColor = `rgb(${valRed} ${valBlue} ${valGreen})`;
        })
    })
}

function eraser(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {

            cell.addEventListener('mouseover', function(){
            this.style.backgroundColor = 'white';
            
        })
        }
    )
}


createGrid();