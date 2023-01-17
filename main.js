document.getElementById("etch").style.maxWidth = "640px";
document.getElementById("etch").style.maxHeight = "640px";


document.getElementById("reset").onclick = reset;

function reset () {
    document.getElementById("grid").style.backgroundColor = "white";
    document.getElementById("gridTwo").style.backgroundColor = "white";
}


for ( let i = 1; i<17; i++) {   

    for( let i = 1; i <17; i++) {

        const grid = document.createElement("grid");

        grid.classList.add("grid");

        grid.style.cssFloat = "right";
        grid.style.width = "40px";
        grid.style.height = "40px";
        grid.style.backgroundColor = "white";
        grid.style.border = "solid";
        grid.style.borderColor = "grey";
        grid.style.boxSizing = "border-box";
        grid.addEventListener("mouseover", mouseOver, true);
        
        function mouseOver (){
            grid.style.backgroundColor = "black";
            grid.style.borderColor = "black";
        }

        
        etch.appendChild(grid);
    }
}

document.getElementById("standard").onclick = standard;

function standard () {
document.querySelector("#etch").innerHTML = ""

for ( let i = 1; i<17; i++) {   

    for( let i = 1; i <17; i++) {

        const grid = document.createElement("grid");

        grid.classList.add("grid");
        grid.style.cssFloat = "right";
        grid.style.width = "40px";
        grid.style.height = "40px";
        grid.style.backgroundColor = "white";
        grid.style.border = "solid";
        grid.style.borderColor = "grey";
        grid.style.boxSizing = "border-box";
        grid.addEventListener("mouseover", mouseOver, true);
        
        function mouseOver (){
            grid.style.backgroundColor = "black";
            grid.style.borderColor = "black";
        }

        
        etch.appendChild(grid);
    }
}

}

document.getElementById("double").onclick = double;

function double () {
document.querySelector("#etch").innerHTML = ""
for ( let i = 1; i<33; i++) {   

    for( let i = 1; i <33; i++) {

        const gridTwo = document.createElement("gridTwo");

        gridTwo.classList.add("gridTwo");
        gridTwo.style.cssFloat = "right";
        gridTwo.style.width = "20px";
        gridTwo.style.height = "20px";
        gridTwo.style.backgroundColor = "white";
        gridTwo.style.border = "solid";
        gridTwo.style.boxSizing = "border-box";
        gridTwo.style.borderColor = "grey";
        gridTwo.addEventListener("mouseover", mouseOver, true);

        function mouseOver (){
            gridTwo.style.backgroundColor = "black";
            gridTwo.style.borderColor = "black";
        }

        
        etch.appendChild(gridTwo);
     }
    }
}

document.getElementById("custom").onclick = custom;

function custom () {

document.querySelector("#etch").innerHTML = ""

let n = +prompt("Please enter a number.");
let w = 640/n;
let h = 640/n;

    for ( let i = 1; i < n + 1; i++) {   
    
        for( let i = 1; i < n + 1; i++) {
    
            const gridCustom = document.createElement("gridCustom");
    
            gridCustom.classList.add("gridTwo");
            gridCustom.style.cssFloat = "right";
            gridCustom.style.width = w + "px";
            gridCustom.style.height = h + "px";
            gridCustom.style.backgroundColor = "white";
            gridCustom.style.border = "solid";
            gridCustom.style.boxSizing = "border-box";
            gridCustom.style.borderColor = "grey";
            gridCustom.addEventListener("mouseover", mouseOver, true);
    
            function mouseOver (){
                gridCustom.style.backgroundColor = "black";
                gridCustom.style.borderColor = "black";
            }
    
            
            etch.appendChild(gridCustom);
         }
        }
    }