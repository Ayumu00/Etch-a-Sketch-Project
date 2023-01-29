const boardDiv = document.querySelector(".board");
const inputUser = document.querySelector("input");
const acceptSizeBtn = document.querySelector(".accept-size-btn");
const resetBtn = document.querySelector(".reset-btn");
const eraserBtn = document.querySelector(".eraser");
const defaultColorBtn = document.querySelector(".default");
const redColorBtn = document.querySelector(".red");
const randomColorBtn = document.querySelector(".random");
const onOffPen = document.querySelector(".on-off-pen");
const whatPen = document.querySelector(".what-pen");

let switchMouse = true;
let backgroundColorHover = "black";

function grid(size){
    const selectAllDiv = boardDiv.querySelectorAll("div");
    selectAllDiv.forEach(div => div.remove());
    boardDiv.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    boardDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size*size); i++){
        const newDiv = document.createElement("div");
        boardDiv.appendChild(newDiv);
    }
}

function whenPressed(e){
    if (e.keyCode == "13" && (this.value >= 2 && this.value <= 100)){
        grid(this.value);
        switchMouse=true;
    }
}

function coloringFunc(){
    if (backgroundColorHover == "random"){
        let DivSelectAllHover = boardDiv.querySelectorAll("div");
        this.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    } else {
        let DivSelectAllHover = boardDiv.querySelectorAll("div");
        this.style.background = backgroundColorHover;
    }

}

function whenClicked(e){
    if (inputUser.value >= 2 && inputUser.value <= 100){
        grid(inputUser.value);
        switchMouse=true;
    }
}

function hover(){
    if (!switchMouse){
        let DivSelectAllHover = boardDiv.querySelectorAll("div");
        DivSelectAllHover.forEach(selectDiv => selectDiv.addEventListener("mouseover", coloringFunc));
    } else if (switchMouse) {
        let DivSelectAllHover = boardDiv.querySelectorAll("div");
        DivSelectAllHover.forEach(selectDiv => selectDiv.removeEventListener("mouseover", coloringFunc));
    }
}

function write(){
    if (switchMouse){
        switchMouse=false;
        hover()
        onOffPen.textContent = "On";
    } else {
        switchMouse=true;
        hover()
        onOffPen.textContent = "Off";
    }
}

grid(16);

inputUser.addEventListener("keydown",whenPressed);
boardDiv.addEventListener("click", write);
acceptSizeBtn.addEventListener("click",whenClicked)
resetBtn.addEventListener("click",()=>{
    let mainDiv = boardDiv.querySelectorAll("div");
    mainDiv.forEach(divReset => divReset.style.background = "white")
})
eraserBtn.addEventListener("click",()=>{
    backgroundColorHover = "white";
    whatPen.textContent = "ERASER";
});
defaultColorBtn.addEventListener("click",()=>{
    backgroundColorHover= "black";
    whatPen.textContent = "DEFAULT";
})
redColorBtn.addEventListener("click",()=>{
    backgroundColorHover="red";
    whatPen.textContent = "RED";
})

randomColorBtn.addEventListener("click",()=>{
    backgroundColorHover="random";
    whatPen.textContent = "RANDOM";
})