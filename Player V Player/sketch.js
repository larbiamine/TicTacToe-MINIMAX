let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let w; 
let h; 

let P1 = 'X';
let P2 = 'O';
let currentPlayer = P2;

function setup() {
  cnv = createCanvas(800, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  w = width / 3;
  ww = (width -200) / 3;
  h = height / 3;
  hh = (height -200) / 3;
  //bestMove();
}

function equals3(a, b, c) {
  return a == b && b == c && a != '';
}

function checkWinner() {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots == 0) {
    return 'tie';
  } else {
    return winner;
  }
}

function mousePressed() {
  let i;
  let j;
  if (currentPlayer == P2) {
    if(mouseX >100 && mouseX <700 && mouseY >100 && mouseY <700 ){
        if(mouseX >= 100 && mouseX <= 300)  
          i=0;
        if(mouseX >= 300 && mouseX <= 500)  
          i=1;
        if(mouseX >= 500 && mouseX <= 700)  
          i=2;
        if(mouseY >= 100 && mouseY <= 300)  
          j=0;
        if(mouseY >= 300 && mouseY <= 500)  
          j=1;
        if(mouseY >= 500 && mouseY <= 700)  
          j=2;
      
        if (board[i][j] == '') {
          board[i][j] = P2;
          currentPlayer = P1;
        }
    }
  }
  if (currentPlayer == P1) {
    if(mouseX >100 && mouseX <700 && mouseY >100 && mouseY <700 ){
        if(mouseX >= 100 && mouseX <= 300)  
          i=0;
        if(mouseX >= 300 && mouseX <= 500)  
          i=1;
        if(mouseX >= 500 && mouseX <= 700)  
          i=2;
        if(mouseY >= 100 && mouseY <= 300)  
          j=0;
        if(mouseY >= 300 && mouseY <= 500)  
          j=1;
        if(mouseY >= 500 && mouseY <= 700)  
          j=2;
      
        if (board[i][j] == '') {
          board[i][j] = P1;
          currentPlayer = P2;
        }
    }
  }
  let a = checkWinner();
  if(a != null){
    if (mouseX > 325 && mouseX < 325+150 && mouseY > 500 && mouseY < 550) {
      restartgame();
    }
  }
}


function restartgame(){
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = P1;
  //bestMove();
}



function draw() {
  background(50);
  strokeWeight(4);
  fill(255);
  noStroke();
  
  
  textSize(30);
  text("TIC TAC TOE! ", 310, 50);
  stroke(20);

  strokeWeight(4);
  fill(79,54,163);
  rect(100, 100, 600, 600);
  line(300,100,300,700);
  line(500,100,500,700);
  line(700,100,700,700);    
  line(100,300,700,300);
  line(100,500,700,500);
  line(100,700,700,700);



  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i/1.28+ w / 2 + 55 ;
      let y = h * j/1.28 + h / 2 + 55;

      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == P2) {
        stroke(84,217,179);
        noFill();
        strokeWeight(12);
        ellipse(x, y, r*2+5);
        stroke(0,0,0);
        strokeWeight(2);

      } else if (spot == P1) {

        stroke(84,217,179);
        strokeWeight(12);
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
        stroke(0,0,0);
      }
    }
  }

  noStroke();
  if(checkWinner() == null){
    textSize(20);
    fill(255);
    if(currentPlayer == 'X'){
      text("Player 1's turn : X ", 330, 78);

    }else{
      text("Player 2's turn : O ", 330, 78);
    }


  }else{
    fill(79,54,163,180);
    rect(100, 100, 600, 600);
    fill(177,248,242);
    textSize(45);
    text("Game Over !! ", 280, 400);
    switch (checkWinner()) {
      case 'tie':{
        textSize(20);
        fill(177,248,242);
        text("No winner", 370, 440);
      }break;
      case 'O':{
        textSize(20);
        fill(177,248,242);
        text("O Wins ", 370, 440);
      }break;
      case 'X':{
        textSize(20);
        fill(177,248,242);
        text("P1 wins", 370, 440);
      }
      break;
      
      default:
        break;
    }
    
    fill(177,248,242);
    stroke(20);
    rect(325, 500, 150, 50);
    noStroke();
    fill(79,54,163,180);
    textSize(20);
    text("Restart game", 340, 530);

  }
}
