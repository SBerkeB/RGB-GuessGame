let mainArr = [];
let a;
let val;
let chosenColor;
let selectedSquare;
let newColorsBtn = document.getElementById("reset");
let square1 = document.getElementById("button-0");
let square2 = document.getElementById("button-1");
let square3 = document.getElementById("button-2");
let square4 = document.getElementById("button-3");
let square5 = document.getElementById("button-4");
let square6 = document.getElementById("button-5");
let closingBtn = document.getElementById("closing-message");
let easyBtn = document.getElementById("easy-mode");
let hardBtn = document.getElementById("hard-mode");
let winningMessage = document.getElementById("message1");
let losingMessage = document.getElementById("message2");
let randomlyChosenColor = document.getElementById("color-msg");
let abc = 6;
let difficulty;
let decision1;

const defObj = {
    red: 0,
    green: 0,
    blu: 0,
    id: 0,
}

function randomNumGen(num) {
    a = Math.floor(Math.random() * (num + 1));
    return a;
}

function messageDeleter() {

    winningMessage.style.visibility = "hidden";
    losingMessage.style.visibility = "hidden";
    closingBtn.style.visibility = "hidden";

}

function playerDecision(dec) {
    decision1 = dec;
    switch (dec) {
        case 0:
            console.log(dec);
            selectedSquare = mainArr[0].id;
            break;
        case 1:
            selectedSquare = mainArr[1].id;
            break;
        case 2:
            selectedSquare = mainArr[2].id;
            break;
        case 3:
            selectedSquare = mainArr[3].id;
            break;
        case 4:
            selectedSquare = mainArr[4].id;
            break;
        case 5:
            selectedSquare = mainArr[5].id;
            break;
    }
    console.log(selectedSquare);
    decisionChecker();
}


function decisionChecker() {
    let instChosenSquare = document.getElementById(`button-${decision1}`);
    if (chosenColor === selectedSquare) {
        winningMessage.style.visibility = "visible";
        instChosenSquare.style.visibility = "hidden";
    } else {
        losingMessage.style.visibility = "visible";
        instChosenSquare.style.visibility = "hidden";
    }

    closingBtn.style.visibility = "visible";
}

function randomIndex() {
    let randomChosenIndex = randomNumGen(abc);
    chosenColor = mainArr[randomChosenIndex].id;
    randomlyChosenColor.textContent = `${mainArr[randomChosenIndex].red}  ${mainArr[randomChosenIndex].green}  ${mainArr[randomChosenIndex].blu}`;
}

function squareColorSetter() {
    let newObj = {
        red: randomNumGen(255),
        green: randomNumGen(255),
        blu: randomNumGen(255),
        id: randomNumGen(1000000)
    }
    mainArr.push(newObj);
    //console.log(newObj);
}


function difficultySetter(arg1) {
    if (arg1 === 1) {
        difficulty = 1;
    } else if (arg1 === 2) {
        difficulty = 2;
    }
}

function beginnerFunc() {
    if (difficulty) {
        squareCreator(difficulty);
    } else {
        alert("CHOOSE A DIFFICULTY AMQ!!");
        return;
    }
}



function squareCreator(val) {
    if (mainArr.length !== 0) {
        mainArr.splice(0, mainArr.length);
    }
    if (val === 1) {
        abc = 3;
        for (let i = 0; i < 3; i++) {
            let squareToDelete = document.getElementById(`button-${i+3}`);
            squareToDelete.style.visibility = "hidden";
            squareColorSetter();
            let instSquare = document.getElementById(`button-${i}`);
            instSquare.style.backgroundColor = `RGB(${mainArr[i].red}, ${mainArr[i].green}, ${mainArr[i].blu})`;
        }
    } else {
        for (let i = 0; i < 6; i++) {
            squareColorSetter();
            let squareAtWork = document.getElementById(`button-${i}`);
            squareAtWork.style.backgroundColor = `RGB(${mainArr[i].red}, ${mainArr[i].green}, ${mainArr[i].blu})`;
        }
    }
    console.log(mainArr);
    randomIndex();
}


easyBtn.addEventListener("click", difficultySetter.bind(this, 1));
hardBtn.addEventListener("click", difficultySetter.bind(this, 2));
closingBtn.addEventListener("click", messageDeleter);
newColorsBtn.addEventListener("click", beginnerFunc);
square1.addEventListener("click", playerDecision.bind(this, 0));
square2.addEventListener("click", playerDecision.bind(this, 1));
square3.addEventListener("click", playerDecision.bind(this, 2));
square4.addEventListener("click", playerDecision.bind(this, 3));
square5.addEventListener("click", playerDecision.bind(this, 4));
square6.addEventListener("click", playerDecision.bind(this, 5));


//bismillah:]