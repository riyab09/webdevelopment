let boxes=document.querySelectorAll(".box");
let restb=document.querySelector("#reset");
let newgame=document.querySelector(".new");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector(".winner");
let turn0=true;
let count=0;
const winningpatt=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const enableBoxes=()=>{
 for(let box of boxes){
    box.disabled= false;
    box.innerText="";
 }
}
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgCont.classList.add("hide");
};
const draw=(count)=>{
    if(count===9)
    {
        msg.innerText="No Winner";

    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true)
        {
            box.innerText="O";
            turn0=false;
            count++;
        }
        else{
            box.innerText="X";
            turn0=true;
            count++;
        }
        box.disabled=true;
       checkWinner();
    });
});


const disabledboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const showWinnner=(winner)=>{
    msg.innerText=`Congratulations !!,winner is ${winner}`;
    msgCont.classList.remove("hide");
    disabledboxes();
};

const checkWinner=()=>{
    for(let pattern of winningpatt){
        let pos1=boxes[pattern[0]].innerText ;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        // console.log(pattern[0],pattern[1],pattern[2]);
       if(pos1 !=="" && pos2 !=="" && pos3 !==""){
        if(pos1===pos2 && pos2===pos3){
            console.log("Winner");
            console.log(pos1);

            showWinnner(pos1);
        }
        if(count==9){
            draw(count);
        }
    }
}
};
newgame.addEventListener("click",resetGame);
restb.addEventListener("click",resetGame);