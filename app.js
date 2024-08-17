let gameSeq=[];      //to track game sequence
let userSeq=[];      //to track user sequence

let btns=["yellow","red","green","blue"];

let started=false;     //game is not yet started;
let level=0;

let h2=document.querySelector("h2");      //accessing h2;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){      // functn to make a flash when user presses a key
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];      //resetting user value;
    level++;        //updates the level
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);                      //to generate random color from btns arr
    let randColor=btns[randIdx];                                 //to store the color value
    let randBtn=document.querySelector(`.${randColor}`);        //to access the random button
    
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    btnFlash(randBtn);
}

 function checkAns(idx){
   
    
   if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp(),1000);
       }
   }else{
    h2.innerHTML=`Game Over! <b>Your Score is ${level} <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="rgb(209, 78, 78)";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="floralwhite";
    },150)
    
    reset();
   }
 }

function btnPress(){
    let btn=this;
    
    btnFlash(btn); //calls the btnflash functn with our clicked btn as argumenta
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){       //reseting the game after gameOver
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}








