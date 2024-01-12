let gameOver=false;
let marker="x";
const gameBoard = (()=>{
    let boxes=["","","","","","","","",""];

    const check=()=>{
        
        if((boxes[0]==boxes[1]) && (boxes[1]==boxes[2]) && (boxes[0]=="x")|| (boxes[3]==boxes[4]) && (boxes[4]==boxes[5]) && (boxes[3]=="x") || (boxes[6]==boxes[7]) && (boxes[7]==boxes[8]) && (boxes[6]=="x") || (boxes[0]==boxes[3]) && (boxes[3]==boxes[6]) && (boxes[0]=="x") || (boxes[1]==boxes[4]) && (boxes[4]==boxes[7]) && (boxes[1]=="x") || (boxes[2]==boxes[5]) && (boxes[5]==boxes[8]) && (boxes[2]=="x") || (boxes[0]==boxes[4]) && (boxes[4]==boxes[8]) && (boxes[0]=="x") || (boxes[2]==boxes[4]) && (boxes[4]==boxes[6]) && (boxes[2]=="x"))
        {console.log("x wins");
         result(1);
         gameOver=true;
               }

        else if((boxes[0]==boxes[1]) && (boxes[1]==boxes[2]) && (boxes[0]=="o")|| (boxes[3]==boxes[4]) && (boxes[4]==boxes[5]) && (boxes[3]=="o") || (boxes[6]==boxes[7]) && (boxes[7]==boxes[8]) && (boxes[6]=="o") || (boxes[0]==boxes[3]) && (boxes[3]==boxes[6]) && (boxes[0]=="o") || (boxes[1]==boxes[4]) && (boxes[4]==boxes[7]) && (boxes[1]=="o") || (boxes[2]==boxes[5]) && (boxes[5]==boxes[8]) && (boxes[2]=="o") || (boxes[0]==boxes[4]) && (boxes[4]==boxes[8]) && (boxes[0]=="o") || (boxes[2]==boxes[4]) && (boxes[4]==boxes[6]) && (boxes[2]=="o"))
        {console.log("o wins");
         result(2);
         gameOver=true;
               }

        else {return false;}
    }
    return {boxes,check};
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

    

    const isEmpty = (e, index) => {
        if (gameOver) {
            return;
        } else if (e.textContent == "" && marker == "x") {
            e.textContent = "x";
            e.classList.add("fade-in");
            gameBoard.boxes[index] = "x";
            marker = "o";
            player1Banner.player1.textContent = "";
            player2Banner.player2BannerDisplay();
        } else if (e.textContent == "" && marker == "o") {
            e.textContent = "o";
            e.classList.add("fade-in");
            gameBoard.boxes[index] = "o";
            marker = "x";
            player2Banner.player2.textContent = "";
            player1Banner.player1BannerDisplay();
        }
            gameBoard.check();
     }
     const addEventListeners = () => {
        box1.addEventListener("click", () => isEmpty(box1, 0));
        box2.addEventListener("click", () => isEmpty(box2, 1));
        box3.addEventListener("click", () => isEmpty(box3, 2));
        box4.addEventListener("click", () => isEmpty(box4, 3));
        box5.addEventListener("click", () => isEmpty(box5, 4));
        box6.addEventListener("click", () => isEmpty(box6, 5));
        box7.addEventListener("click", () => isEmpty(box7, 6));
        box8.addEventListener("click", () => isEmpty(box8, 7));
        box9.addEventListener("click", () => isEmpty(box9, 8));
    };

    addEventListeners();


    return {box1,box2,box3,box4,box5,box6,box7,box8,box9,isEmpty}; 

})();



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

const result=(num)=>{
    
    const resultBanner=document.querySelector(".result");
    resultBanner.textContent=`Player ${num} has won !`;
    return true ;
    

}

const restart=()=>{
    gameOver=false;
    marker="x"; 
    gameBoard.boxes=["","","","","","","","",""];
   
    location.reload(); // literally sorry :( for doing this for a restart function , i tried everything before this



    display.addEventListener();
    
    
}

const restartBtn=document.querySelector(".restart");
restartBtn.addEventListener("click",restart);


