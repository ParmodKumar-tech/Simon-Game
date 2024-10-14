
let gameSeq=[];
let userSeq=[];
let btnsColor=["brown","skyblue","yellow","darkpurple"];

let startGame=false;
let level=0;
let highScore=0;


let titleOfGame=document.querySelector("h1");
let levelLabel=document.querySelector("h3");
let highScoreLabel=document.querySelector("h2");
let btns=document.querySelectorAll(".btn");
let startGameBtn=document.querySelector(".startGameBtn");


document.addEventListener("click",startingPointOfGame);
document.addEventListener("keypress",startingPointOfGame);

let startingPointOfGame=()=>{
    if(!startGame){
        startGame=true;
        console.log("game start");
        levelUp();
        
    }
}



function buttonFlash(btn){
    btn.classList.add("btnflash");
    setTimeout(function(){
        btn.classList.remove("btnflash")
    },200);

}

function levelUp(){
    userSeq=[];
    level++;
    levelLabel.innerText=`Level ${level}`;
    let rand=Math.floor(Math.random()*4);
    let randColor=btnsColor[rand];
    let randBtn=document.querySelector(`.${randColor}`)
    
    gameSeq.push(randColor)
    console.log(gameSeq)
    
    buttonFlash(randBtn);
}

function userFlashBtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },200);
}


function checkAns(idx){
    // console.log(`current level ${level}`)
   
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            // console.log("same value");
            setTimeout(levelUp,300)
            
        }
    }
    else{
        levelLabel.innerHTML=`Game Over! Your Score: ${level} <br> Press any key to start`;
        // document.querySelector("body").style.backgroundColor="red";
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)

        if(highScore<level){
            highScore=level;
        }
        highScoreLabel.innerText=`High Score: ${highScore}`;
        resetGame();

    }
}

function resetGame(){
    startGame=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function btnPress(){
    let btn=this;
  
    userFlashBtn(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
   
    checkAns(userSeq.length-1);

}

for(buttons of btns){
    buttons.addEventListener("click",btnPress)
}
