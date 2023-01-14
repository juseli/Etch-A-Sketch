document.getElementById("container").style.maxWidth = "700px";
document.getElementById("container").style.maxHeight = "700px";


document.getElementById("reset").onclick = reset;

function reset () {
    document.getElementById("grid").style.backgroundColor = "white";
}

for ( let i = 1; i<17; i++) {   

    for( let i = 1; i <17; i++) {
        const grid = document.createElement("grid");

        grid.classList.add("grid");
        grid.style.border = "solid";
        grid.style.borderColor = "grey";
        grid.style.cssFloat = "right";
        grid.addEventListener("mouseover", mouseOver, true);

        function mouseOver (){
            grid.style.backgroundColor = "black";
            grid.style.borderColor = "black";
        }

        
        container.appendChild(grid);
    }
}


