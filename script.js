"use strict"

// model
let gameBoard = {
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],

  print: function () {
    this.board.forEach(row => console.log(`[${row[0]}], [${row[1]}], [${row[2]}]`))
    console.log('-------------------')
  }
}

const nextTurn = document.querySelector(".player") 
const winningMessage = document.querySelector(".message") 
const xBegins = document.querySelector(".xBegins")


const controller = () => {
  let currentPlayer = 'X'



  const checkForWin = (currentPlayer) => {
    const { board } = gameBoard

    const allEqual = (arr, val) => arr.every(element => element === val);

    // check rows
    for (const row of board) {
      if (allEqual(row, currentPlayer)) {
        return true ; 
      }
    }

    // check columns
    // get column values at particular location
    const arrayColumn = (arr, n) => arr.map(x => x[n]);

    for (const colNumber in [0, 1, 2]) {
      const cols = arrayColumn(board, colNumber)

      if (allEqual(cols, currentPlayer)) {
        return true
      }
    } 


    // const checkDiagonals = (board , currentPlayer) => {
    // if ((state[0][0] === val && state[1][1] === val && state[2][2] === val) ||
    //     (state[0][2] === val && state[1][1] === val && state[2][0] === val)) {
    //     return true;
    // } }



    return false
    } 



  const start = () => {
    const tableEl = document.getElementById('table')
    const startButtonEl = document.getElementById('startOver') 


    tableEl.addEventListener("click", (event) => {
      const cellId = event.target.id 

      xBegins.innerText = "";

      // id = "0-2" then row = 0, col = 2
      const [row, col] = cellId.split('-')

      if (gameBoard.board[row][col] !== '') {
        gameBoard.print()
        return
      }

      gameBoard.board[row][col] = currentPlayer
      gameBoard.print()

      view.renderAt(row, col, currentPlayer)

      if (checkForWin(currentPlayer)) {
        const winningMessage = document.querySelector(".message")
        winningMessage.innerText =  currentPlayer + " WINS"
        winningMessage.style.marginLeft= "190px";

        return
      }

      // flip the player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'  
      

       
      
      nextTurn.innerText = "It's your turn:   " + currentPlayer 

      nextTurn.style.marginLeft= "135px"; 
      nextTurn.style.marginBottom= "45px";

    });
  }

  start()
}


const view = {
  renderAt: function (row, col, value) {
    const cellId = row + "-" + col
    document.getElementById(cellId).innerText = value
  },

  redraw: function () {
    for (const rows of gameBoard.board) {
      for (const row in rows) {
        for (const col in [0, 1, 2]) {
          const cellId = row + "-" + col

          // update the cell with value from the gameBoard
          document.getElementById(cellId).innerText = gameBoard.board[row][col]
        }
      }
    }
  },
}


document.querySelector("#startOver").addEventListener("click", resetBoard) 


const cells = document.querySelectorAll(".cell")


function resetBoard (e , currentPlayer) { 
    cells.forEach(cell=> { 
        cell.innerText= ""
    }) 

    gameBoard.board =  [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]
    
      nextTurn.innerText =""; 
         nextTurn.style.marginLeft = "170px";
      winningMessage.innerText = "";
   

}
controller()







//-------------constants-------------// 
// const colors [
//     null= 
//     player1= 
// ]

// const winningConditions = [
//       ["c0","c1","c2"] , 
//       ["c3","c4","c5"] , 
//       ["c6","c7","c8"] ,
//       ["c0","c3","c6"] , 
//       ["c1","c4","c7"] ,
//       ["c2","c5","c8"] , 
//       ["c0","c4","c8"] , 
//       ["c2","c4","c6"]
// ];

        

// //------------variables-------------// 
// let board = [ [null , null , null] , 
//               [null , null , null] ,
//               [null , null , null] ]; 

// let winner = ;  


// if (cells.innerText )  



      


//



//player that won, tie, game in play 




//--------------event listeners-----// they arent't wokring!

// document.getElementById("c0").addEventListener("click", okok);  
// document.getElementById("c1").addEventListener("click", okok); 
// document.getElementById("c2").addEventListener("click", okok); 
// document.getElementById("c3").addEventListener("click", okok); 
// document.getElementById("c4").addEventListener("click", okok); 
// document.getElementById("c5").addEventListener("click", okok); 
// document.getElementById("c6").addEventListener("click", okok); 
// document.getElementById("c7").addEventListener("click", okok); 
// document.getElementById("c8").addEventListener("click", makeCurrentPlayer); 



// function okok (event) { 
//     event.target.innerText = "X"
// }


// //-------------functions------------// 
// function makeCurrentPlayer(event) { 
//     if(event.target.innerText != "") return;
//     event.target.innerHTML = "X" ; 
//     const currentPlayer = event.target.innerText;
//         //  const clickedCell = event.target;
  
//  currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";    
//  }

// function makeMessage () { 
//     const message = document.getElementsByClassName(`message`) 
//     message.innerText = [clickedCell + "'s turn"];
//   }