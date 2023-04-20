
// function finishFunction() {

//     alert("Thank you for comepleting the quiz.")
// }

function checkAnswer(){
var score = 0;
//assign the quiz elements to the quiz variable
quiz = document.forms.Quiz.elements;
//assign the answer to the question to the answer1 variable

answer1 =  quiz.interest.value;
// check the answer to the first question
if (answer1 == "50%") {
    //add 1 to the score
    score = score + 1;
}

answer2 = quiz.talent.value;
if (answer2 == "50") {
score = score + 1;

}

userName = quiz.name.value;




alert ("Well done, " + userName + "! Your score is: " + score + " How much text can we actually fit in this alert box? Could I ramble on a bit and tell people what kind of frog they are in great detail? t can we actually fit in this alert box? Could I ramble on a bit and tell people what kind of frog they are in great detail? t can we actually fit in this alert box? Could I ramble on a bit and tell people what kind of frog they are in great detail?");
}

//document pulls the DOM bit of the javascipt version of html, then next bit is forms, Quiz is the name of the specific form in case there is other forms then elements

//DOM Document Object Model

