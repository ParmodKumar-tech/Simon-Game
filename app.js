
let gameSeq=[];
let userSeq=[];

let btnsColor=["orange","purple","cyan","crimson"]

let startGame=false;
let level=0;

let h2=document.querySelector("h2");
let allBtns=document.querySelectorAll(".btn");
let body=document.querySelector("body");
let startBtn=document.querySelector(".startBtn");



function BeginGame(){
    if(startGame == false){
        startGame=true;
        body.style.backgroundColor="white"
        console.log("game start");
        levelUp();
    }
   

}

startBtn.addEventListener("click",BeginGame)

document.addEventListener("keypress",BeginGame)


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let colorBasedOnIdx=btnsColor[randIdx];
    let btn=document.querySelector(`.${colorBasedOnIdx}`);
    gameSeq.push(colorBasedOnIdx);

    btnFlashByGame(btn);
}


function btnFlashByGame(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },200);

}

function btnFlashByUser(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function btnPress(){
    let clickedBtn=this;
    btnFlashByUser(this);
   
    let colorByClickedBtn=clickedBtn.getAttribute("id");
    userSeq.push(colorByClickedBtn);
    checkSeq(userSeq.length-1);
}

function checkSeq(idx){

    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length===userSeq.length){
            setTimeout(()=>{
                levelUp();

            },700);
        }
    }
    else{
        h2.innerHTML=`Game Over!, Your Score : ${level} <br>press or click to restart!`;
        body.style.backgroundColor="#ced8ff"
        resetGame();
    }
}

for(btn of allBtns){
    btn.addEventListener("click",btnPress)
        
    }


function resetGame(){
    startGame=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

