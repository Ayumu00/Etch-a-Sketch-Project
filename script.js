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
const selectAllTheButtonTrans = document.querySelectorAll("button");
const titleName = document.querySelector(".name-title");
const creditName = document.querySelector(".credit");

let switchMouse = true;
let backgroundColorHover = "black";

function grid(size){
    const selectAllDiv = boardDiv.querySelectorAll("div");
    selectAllDiv.forEach(div => div.remove());
    boardDiv.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    boardDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size*size); i++){
        const newDiv = document.createElement("div");
        newDiv.style.border = "1px solid #E0E0E0";
        newDiv.style.background = "white";
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
        onOffPen.firstChild.src = "./images/switch-on.png";
    } else {
        switchMouse=true;
        hover()
        onOffPen.firstChild.src = "./images/switch-off.png";
    }
}

function removeTransition(e){
    e.target.classList.remove("button-trans");
}

function transitionButtonStart(){
    this.classList.add("button-trans")
}

function outLineBorder(whichButton){
    if (whichButton == "eraser"){
        eraserBtn.style.borderColor = "red";
        defaultColorBtn.style.borderColor = "black";
        redColorBtn.style.borderColor = "black";
        randomColorBtn.style.borderColor = "black";
    } else if (whichButton == "black"){
        eraserBtn.style.borderColor = "black";
        defaultColorBtn.style.borderColor = "red";
        redColorBtn.style.borderColor = "black";
        randomColorBtn.style.borderColor = "black";
    } else if (whichButton == "random"){
        eraserBtn.style.borderColor = "black";
        defaultColorBtn.style.borderColor = "black";
        redColorBtn.style.borderColor = "black";
        randomColorBtn.style.borderColor = "red";
    } else if (whichButton == "red"){
        eraserBtn.style.borderColor = "black";
        defaultColorBtn.style.borderColor = "black";
        redColorBtn.style.borderColor = "red";
        randomColorBtn.style.borderColor = "black";
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
    whatPen.firstChild.src = "./images/eraser.png";
    outLineBorder("eraser");
});
defaultColorBtn.addEventListener("click",()=>{
    backgroundColorHover= "black";
    whatPen.firstChild.src = "./images/black-pen.png";
    outLineBorder("black");
})
redColorBtn.addEventListener("click",()=>{
    backgroundColorHover="red";
    whatPen.firstChild.src = "./images/record.png";
    outLineBorder("red");
})

randomColorBtn.addEventListener("click",()=>{
    backgroundColorHover="random";
    whatPen.firstChild.src = "./images/random.png";
    outLineBorder("random");
})

selectAllTheButtonTrans.forEach(buttonTrans => {
    buttonTrans.addEventListener("click", transitionButtonStart)
})

selectAllTheButtonTrans.forEach(buttonTransEnd => {
    buttonTransEnd.addEventListener("transitionend", removeTransition)
})


// Etch a Sketch
let titleColor = "Etch a Sketch";
for (let i = 0; i < titleColor.length; i++){
    let spans = document.createElement("span");
    spans.textContent = titleColor[i];
    spans.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`
    spans.style.fontWeight = "bold";
    titleName.appendChild(spans);
}

// My Name
let myName = "Created By Ayumu!";
for (let i = 0; i < myName.length; i++){
    let spans = document.createElement("span");
    spans.textContent = myName[i];
    spans.style.fontWeight = "bold";
    if (i >= 11){
        spans.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
    creditName.appendChild(spans);
}
