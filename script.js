let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");
let newGamebtn = document.querySelectorAll("#new-btn");
let msgcontainer = document.querySelectorAll(".msg-container");
let msg = document.querySelectorAll("#msg");




let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
   msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click" ,() => {
      console.log("box is clicked");
     if(turnO) {
        box.innerText = "O";
        turnO = false;
     }
     else{
        box.innerText = "X";
        turnO = true;
     }
     box.disabled = true;
     checkWinner();
    });
});
const disableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
   disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns) {
       
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame)

