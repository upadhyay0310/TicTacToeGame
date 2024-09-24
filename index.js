
let playerStatus = document.querySelector(".playerStatus");
let boxes = document.querySelectorAll(".div");
let newGame = document.querySelector(".newGameBtn");

const winPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let grid = ["","","","","","","","",""] ;

let currentPlayer = "X" ;
let scoreX = 0;
let scoreO = 0;
document.querySelector(".updatedScoreX").innerText = scoreX;
document.querySelector(".updatedScoreY").innerText = scoreO;


function init(){
    currentPlayer = "X" ;
    playerStatus.innerText =`Current Player - ${currentPlayer} `;
    boxes.forEach((box,index) => {
        box.innerText = "";
        grid[index] = "";
        box.style.pointerEvents = "all" ;
        box.classList.remove("win");
    })

    boxes.forEach((box,index) => {
        // console.log(box);
        box.addEventListener('click',()=>{
            setBox(index);
            document.querySelector(".updatedScoreX").innerText = scoreX;
            document.querySelector(".updatedScoreY").innerText = scoreO;
        });
    })
   
    newGame.classList.remove('active');
}

function setBox(index){
    if(grid[index]===""){
        boxes[index].innerText = currentPlayer;
        grid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none" ;
        swapTurn();
        checkWinStatus();
    }
}

function swapTurn(){
    if(currentPlayer == "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    playerStatus.innerText =`Current Player - ${currentPlayer} `;
}

function checkWinStatus(){
    let winner ;
    winPosition.forEach((position)=>{
        if((grid[position[0]] !== "" && grid[position[1]] !== "" && grid[position[2]] !== "" ) && ((grid[position[0]] === grid[position[1]])) && (grid[position[0]] === grid[position[2]]) ){
            if(grid[position[0]] === "X"){
                winner = "X" ;
            }
            else {
                winner = "O" ;
            }
            
            boxes.forEach((box)=>{
                box.style.pointerEvents = "none" ;
            })
            if(winner !== ""){
                playerStatus.innerText =`Winner - ${winner} `;
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
                newGame.classList.add("active");
                newGame.addEventListener("click",init);
            }    
        }
        else if(grid[0] !== "" && grid[1] !== "" && grid[2] !== "" && grid[3] !== "" && grid[4] !== "" && grid[5] !== "" && grid[6] !== "" && grid[7] !== "" && grid[8] !== "" ){
            playerStatus.innerText ="Game Tied";
            winner = "GameTied" ;
            newGame.classList.add("active");
            newGame.addEventListener("click",init);
        }
    })
    if(winner === "X"){
        scoreX+=2;
    }
    else if(winner === "O"){
        scoreO+=2;
    }
    else if(winner === "GameTied"){
        scoreX+=1;
        scoreO+=1;
    }
    //console.log("scoreX = ",scoreX," scoreO = ",scoreO ) ;
}

init();







