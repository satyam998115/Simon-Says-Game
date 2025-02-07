let gameseq=[];
let userseq=[];
let btns=["yellow", "red","purple", "green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let highscore=0;

document.addEventListener("keypress",function(){
   if(started==false){
    console.log("Game is started!");
    started=true;
    levelup();
   }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },200);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

   let randx=Math.floor(Math.random()*4);
   let randcolor=btns[randx];
   let randbtn=document.querySelector(`.${randcolor}`);

   gameseq.push(randcolor)
    gameFlash(randbtn);

}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
         setTimeout( levelup,1000);
       }
    } else {
        let score = level * 10;
        if (score > highscore) {
            highscore = score;
        }
        h2.innerHTML=`Game Over! Your Score was: <b>${score}</b> <br>
                       Highest Score: <b>${highscore}</b><br>
                      Press Any Key to Start.`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgb(195, 205, 213)";
        })
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;

    userFlash(btn);

     usercolor=btn.getAttribute("id");
     userseq.push(usercolor);

     checkAns(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function reset() {
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}