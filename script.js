
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

/*How much of a frog are you?

Answers 
1 or below You are really not a frog and that is ok
2-5 You have some slight frog tendencies and could fit in with a group of frog frens
6+ A frog, you are a frog. Ribbit ribbit.

Thank you for your quiz feedback, I wish you more enjoyment in your future quiz endeavours :)
Thank you for your quiz feedback, good day to you :)
Thank you for your quiz feedback, I’m glad you enjoyed the quiz :) 

You fancy a sit down and pick…
A lily pad +3
A human chair +0
A rock or the floor will do +2

Where do you hang out in the winter?
Indoors keeping dry and cosy +0
I am partial to leaving the house and touching grass, even in the winter! +1
In pond mud or under piles of rotting leaves +3

Your hands/feet are:
Hands and feet -1
Webbed +3
It depends +1 

How much did you enjoy this quiz?*/



alert ("Well done, " + userName + "! Your score is: " + score + " 1 or below You are really not a frog and that is ok. 2-5 You have some slight frog tendencies and could fit in with a group of frog frens. 6+ A frog, you are a frog. Ribbit ribbit. Thank you for your quiz feedback, I wish you more enjoyment in your future quiz endeavours :) Thank you for your quiz feedback, good day to you :) Thank you for your quiz feedback, I’m glad you enjoyed the quiz :)");
}

//document pulls the DOM bit of the javascipt version of html, then next bit is forms, Quiz is the name of the specific form in case there is other forms then elements

//DOM Document Object Model

