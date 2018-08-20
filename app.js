console.log(`Connected!`);

function startGame() {
  document.turn = "X";
}


function nextMove(cell) {
   if(cell.innerText == '') {
      cell.innerText = document.turn;
   switchTurn();
   }else {
       clearInterval();
   }
}

function switchTurn() {
  if(document.turn == "X") {
      document.turn = "O";
  } else {
      document.turn = "X";
  }
}







 
    
 
