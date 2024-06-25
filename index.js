let GRIDSIZE = 600;
let rows = 16;
let columns = 16;

let container = document.getElementById('container');
container.style.height = `${GRIDSIZE}px`;
container.style.width = `${GRIDSIZE}px`;

function changeToBlack(){
        this.style.backgroundColor = 'black';
}

function createGrid(){
    for(let i = 0; i < (rows * columns); i++){
        let gridcell = document.createElement("div");
        gridcell.style.height = `${GRIDSIZE/rows}px`;
        gridcell.style.width = `${GRIDSIZE/columns}px`;

        gridcell.classList.add("cell");

        container.append(gridcell);

        gridcell.addEventListener('mouseover', changeToBlack);
    }
}

createGrid();