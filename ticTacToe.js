const gameBoard = (()=>{
    const boxes=["","","","","","","","",""];
    
    
    const check=()=>{
        if((boxes[0]==boxes[1]) && (boxes[1]==boxes[2]) && (boxes[0]=="x")|| (boxes[3]==boxes[4]) && (boxes[4]==boxes[5]) && (boxes[3]=="x") || (boxes[6]==boxes[7]) && (boxes[7]==boxes[8]) && (boxes[6]=="x") || (boxes[0]==boxes[3]) && (boxes[3]==boxes[6]) && (boxes[0]=="x") || (boxes[1]==boxes[4]) && (boxes[4]==boxes[7]) && (boxes[1]=="x") || (boxes[2]==boxes[5]) && (boxes[5]==boxes[8]) && (boxes[2]=="x") || (boxes[0]==boxes[4]) && (boxes[4]==boxes[8]) && (boxes[0]=="x") || (boxes[2]==boxes[4]) && (boxes[4]==boxes[6]) && (boxes[2]=="x"))
        {console.log("x wins");}
        else if((boxes[0]==boxes[1]) && (boxes[1]==boxes[2]) && (boxes[0]=="o")|| (boxes[3]==boxes[4]) && (boxes[4]==boxes[5]) && (boxes[3]=="o") || (boxes[6]==boxes[7]) && (boxes[7]==boxes[8]) && (boxes[6]=="o") || (boxes[0]==boxes[3]) && (boxes[3]==boxes[6]) && (boxes[0]=="o") || (boxes[1]==boxes[4]) && (boxes[4]==boxes[7]) && (boxes[1]=="o") || (boxes[2]==boxes[5]) && (boxes[5]==boxes[8]) && (boxes[2]=="o") || (boxes[0]==boxes[4]) && (boxes[4]==boxes[8]) && (boxes[0]=="o") || (boxes[2]==boxes[4]) && (boxes[4]==boxes[6]) && (boxes[2]=="o"))
        {console.log("o wins");}
        else return;
    }
    return {boxes:boxes,check:check};
})();

const display=(()=>{
    
    const box1=document.querySelector(".box1");
    const box2=document.querySelector(".box2");
    const box3=document.querySelector(".box3");
    const box4=document.querySelector(".box4");
    const box5=document.querySelector(".box5");
    const box6=document.querySelector(".box6");
    const box7=document.querySelector(".box7");
    const box8=document.querySelector(".box8");
    const box9=document.querySelector(".box9");

    let marker="x"

     const isEmpty = (e,index)=>() => {
        if (e.textContent== "" && marker=="x") {
            e.textContent = "x";
            e.classList.add("fade-in");
            gameBoard.boxes[index]="x";
            marker="o";
            player1Banner.player1.textContent="";
            player2Banner.player2BannerDisplay();

        }
        else if(e.textContent=="" && marker=="o"){
            e.textContent="o";
            e.classList.add("fade-in");
            gameBoard.boxes[index]="o"
            marker="x";
            player2Banner.player2.textContent="";
            player1Banner.player1BannerDisplay();
        }
            gameBoard.check();

     }

    return {box1,box2,box3,box4,box5,box6,box7,box8,box9,isEmpty}; 

})();

display.box1.addEventListener("click",display.isEmpty(display.box1,0));
display.box2.addEventListener("click",display.isEmpty(display.box2,1));
display.box3.addEventListener("click",display.isEmpty(display.box3,2));
display.box4.addEventListener("click",display.isEmpty(display.box4,3));
display.box5.addEventListener("click",display.isEmpty(display.box5,4));
display.box6.addEventListener("click",display.isEmpty(display.box6,5));
display.box7.addEventListener("click",display.isEmpty(display.box7,6));
display.box8.addEventListener("click",display.isEmpty(display.box8,7));
display.box9.addEventListener("click",display.isEmpty(display.box9,8));

const player2Banner=(()=>{
    const player2=document.querySelector(".player2");
    const player2BannerDisplay= ()=>{setTimeout(()=>{player2.textContent="Player 2's Turn"; player2.classList.add("fade-in");},250);}
    
    return{player2BannerDisplay,player2};
})();


const player1Banner=(()=>{
   const player1=document.querySelector(".player1");
    const player1BannerDisplay=()=>{setTimeout(()=>{player1.textContent="Player 1's Turn"; player1.classList.add("fade-in");},250);}
    
    return{player1,player1BannerDisplay};
})();

