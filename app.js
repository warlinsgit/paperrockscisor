//alert('welcome here lindo');


let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector('.score-board');

const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scisor_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random() * 3 ));
  return choices[randomNumber];
}


function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scisor";

}


function Win(userChoice, computerChoice){
  //console.log("User wins");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "comp".fontsize(3).sup();
  //result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";

  const userChoice_div = document.getElementById(userChoice);



    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord} You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => { userChoice_div.classList.remove('green-glow') }, 300);

}


function Lose(userChoice, computerChoice){

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "comp".fontsize(3).sup();
  //result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";

  const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord} computer wins!`;

    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);

}

function Draw(userChoice, computerChoice){


  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  //result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";

  const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord} it's a draw!; `

    userChoice_div.classList.add('gray-glow');
    setTimeout(() =>  userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){

  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    //console.log("User wins");
    Win(userChoice, computerChoice);
      break;
      case "rp":
      case "ps":
      case "sp":
//console.log("Computer wins");
Lose(userChoice, computerChoice);
    break;

    case "rr":
    case "pp":
    case "ss":
    //console.log("Its a draw");
    Draw(userChoice, computerChoice);
    break;
  }


}

function main(){

rock_div.addEventListener('click',() => game("r"));
  //console.log("hey rock");

paper_div.addEventListener('click', () => game("p"));

//  console.log("hey paper");


scisor_div.addEventListener('click', () => game("s"));
//  console.log("hey scisor");


}
main();
