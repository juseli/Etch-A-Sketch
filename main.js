document.getElementById("etch").style.maxWidth = "640px";
document.getElementById("etch").style.maxHeight = "640px";

    
let slider = document.querySelector("#myRange");
let gridContainer = document.querySelector("#etch");
let sliderValue = document.querySelector("#sliderValue");

function createGrid () {

    let size = slider.value;
    let w = 640/size;
    let h = 640/size;

    gridContainer.innerHTML = "";

    for (let i = 0; i < size ; i++) {
    
     for (let i = 0; i < size ; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.cssFloat = "right";
        grid.style.width = w + "px";
        grid.style.height = h + "px";
        grid.style.backgroundColor = "white";

            
        gridContainer.appendChild(grid);
        }
       
    }
    
    sliderValue.innerHTML = size + "x" + size;
    
}

createGrid ();

slider.addEventListener("input", createGrid);


gridContainer.addEventListener("mouseover", function(event){
    if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = "black";
    }
});

document.getElementById("clearBtn").onclick = clear;

function clear () {
    gridContainer.innerHTML = ""
    createGrid ();
}
