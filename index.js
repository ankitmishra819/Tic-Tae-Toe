let boxes=document.querySelectorAll(".btn");
let msgcontainer=document.querySelector('.msgcontainer');
let msg=document.querySelector('.msg');
let restart=document.querySelector('.restartBtn');
let reset=document.querySelector('.reset');
let turn=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enabledbox =()=>{
    for(let btn of boxes){
       btn.disabled=false;
       btn.innerHTML="";

    }
   }

const disabled =()=>{
 for(let btn of boxes){
    btn.disabled=true;
 }
}


const resetgame=()=>{
turn=true;
enabledbox();
msgcontainer.classList.add("hide");
}


const showwinner=(wineer)=>{
    msg.innerText=`congrulation winner ${wineer}`;
    msgcontainer.classList.remove("hide");
    disabled();
  

}

boxes.forEach((btn) => {
    btn.addEventListener('click',()=>{
        //console.log("btn was clicked");
        if(turn===true){
            btn.innerText="O";
            turn=false;
        }
        else{
            btn.innerText="X";
            turn=true;
        }
        btn.disabled=true;
        checkwiner();   
    })
});

const checkwiner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
  if(pos1val !="" &&pos2val !="" &pos3val !=""){
    if(pos1val===pos2val && pos2val===pos3val){
       showwinner(pos1val);
    }
  }
    }
}

restart.addEventListener('click',resetgame);
reset.addEventListener('click',resetgame);