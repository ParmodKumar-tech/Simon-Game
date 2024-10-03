// // // let oldImage=document.getElementsByClassName("oldImg");// it give collection of array

// // // for(let i=0 ;i<oldImage.length; i++){
// // //     oldImage[i].src="spiderman_img.png";
// // //     console.log(`the value of ${i} is changed`);
// // // }

// // console.dir(document.querySelectorAll('.oldImg'))

// // let p=document.createElement('p');
// // p.innerText="hi i am red";
// // document.querySelector('body').append(p);
// // p.classList.add('red');

// // let h3=document.createElement('h3');
// // h3.innerText="i am blue h3!";
// // document.querySelector('body').appendChild(h3);
// // h3.classList.add("blue");

// // let div=document.createElement('div');
// // div.style.border='black';
// // div.style.backgroundColor='pink';
// // let h1=document.createElement('h1');
// // h1.innerText='hy i am div';
// // let para=document.createElement('para');
// // para.innerText="Me Too";

// // document.querySelector('div').appendChild(h1);
// // document.querySelector('div').appendChild(para);

// // let div=document.createElement('div');
// // let para=document.createElement('para');
// // let h1=document.createElement('h1');

// // h1.innerText="i am div";
// // para.innerText="i am also";

// // h1.style.color='yellow';
// // div.style.borderColor='green';

// // div.append(h1);
// // div.append(para);

// // div.classList.add('div');

// // document.querySelector('body').prepend(div);

// // let inputField=document.createElement('input');
// // let btn=document.createElement('button');

// // btn.innerText="Click Me";
// // btn.setAttribute("id","btn");
// // inputField.setAttribute("placeholder","username");


// // document.querySelector('body').append(inputField);
// // document.querySelector('body').append(btn);

// // let accessBtn=document.querySelector('#btn');
// // accessBtn.classList.add('btn');

// // let h1=document.createElement('h1');
// // h1.innerHTML="<u>DOM Practice<u>";
// // h1.style.color="purple";


// // document.querySelector('body').append(h1);

// // let para2=document.createElement('para');
// // para2.innerHTML="Drag <b>Coder</b>";

// // document.querySelector('body').append(para2);

// // let btn1=document.querySelector("button");

// // btn1.onclick=function(){
// //     h1.innerText="Hiiiiiiiiiiiiiiiiiiii.........";
// //     console.log("hello buddy")
// // }

// // btn1.addEventListener("click",fine);
// // btn1.addEventListener("click",fine2);
// // btn1.addEventListener("dblclick",function(){
// //     console.log("you double click");
// // });

// // btn1.addEventListener("click",fine2);
// // function fine(){
// //     console.log("button clicked");
// // }

// // function fine2(){
// //     console.log("btn clicked");
// // }

// let generatBtn=document.querySelector("button");
// generatBtn.addEventListener("click",function(){
//     let redColor=Math.floor(Math.random()*255);
//     let greenColor=Math.floor(Math.random()*255);
//     let blueColor=Math.floor(Math.random()*255);

//     let color=`rgb(${redColor},${greenColor},${blueColor})`;
//     console.log(color)
    
//     let h1=document.querySelector("h1");
//     h1.innerText=color;
//     let div=document.querySelector("div");
//     div.style.backgroundColor=color;
// })
// let para=document.querySelector("div p");
// para.addEventListener("click",function(){
//     console.log("para is clicked");
// })

// let box=document.querySelector("div");
// box.addEventListener("click",function(){
//     console.log(this.key)
//     console.log(this.innerText); // here this means box obj.  
// })

// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){
//     console.log(event.key)
//     console.log(event.code) //keyA ,keyB <-- like wise 
    
// })

// let form=document.querySelector("form");
// form.addEventListener("load",function(e){ 
//     // e.preventDefault();
//     let input=document.querySelector("input");
//     console.log(input.value);
//     alert(input.value);
// })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

// let btn=document.createElement("button");
// btn.innerText="click me";
// btn.addEventListener("click",function(){

//     btn.classList.add("btn");
//     console.log("color change");
// })

// document.body.prepend(btn);

// let input=document.createElement("input");
// let h2=document.createElement("h2");

// input.placeholder="enter your name";
// document.body.append(input);

// function 

// let btn=document.querySelector("button");
// let input=document.querySelector("input");
// let list=document.querySelector("ul");

// btn.addEventListener("click",function(){
//     // console.log(input.value)
//     // order matters--
//     let item=document.createElement("li");
//     let deleteBtn=document.createElement("button");
//     item.innerText=input.value;
//     deleteBtn.innerText="delete";
    
//     deleteBtn.classList.add("delete");

//     item.appendChild(deleteBtn);

    
//     list.appendChild(item);
    
//     input.value="";

// })

// let deleteBtn=document.querySelectorAll(".delete");

// for(deleteB of deleteBtn){
//     deleteB.addEventListener("click",function(){
//         let pare=this.parentElement;
//         // console.log(pare)
//         pare.remove();
//     })
// }
// fine ------ :()
// list.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let listItem=event.target.parentElement;
//         listItem.remove();
//     }
// })
let gameSeq=[];
let userSeq=[];
let btnsColor=["brown","skyblue","yellow","drakpurple"];

let startGame=false;
let level=0;
let highScore=0;


let titleOfGame=document.querySelector("h1");
let levelLabel=document.querySelector("h3");
let highScoreLabel=document.querySelector("h2");
let btns=document.querySelectorAll(".btn");



document.addEventListener("keypress",function(){
  
    if(!startGame){
        startGame=true;
        console.log("game start");
        levelUp();
        
    }
   
});


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
        document.querySelector("body").style.backgroundColor="red";
        
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
