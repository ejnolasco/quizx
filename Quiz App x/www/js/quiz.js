console.log("gumagana");


let process = {
	quiz:function() {
		let content = 
		<div>
		<div id="quizContainer" class="container">
			<div class="title">GAME QUIZ APPS </div>
			<div id="question" class="question"></div>
			<label class="option"><input type="radio" name="option" value="1"/> <span id="opt1"></span></label>
			<label class="option"><input type="radio" name="option" value="2"/> <span id="opt2"></span></label>
			<label class="option"><input type="radio" name="option" value="3"/> <span id="opt3"></span></label>
			<label class="option"><input type="radio" name="option" value="4"/> <span id="opt4"></span></label>
			<button id="nextButton" class="next-btn" onClick={loadNextQuestion}>Next Question </button>			
		</div>
		<div id="result" className="container result">
		</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.quiz();

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var backbutton = document.getElementById('backbutton');
var resultCont = document.getElementById('result');
var backbutton = document.getElementById('backbutton');


function loadQuestion (questionIndex){
	  console.log("Lospe Dumaya");
	  var q = questions[questionIndex];
	  questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
opt1.textContent = q.option1;
opt2.textContent = q.option2;
opt3.textContent = q.option3;
opt4.textContent = q.option4;
resultCont.style.display = "none";
};

function loadNextQuestion (){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}

	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions -1){
	nextButton.textContent = 'Finish';

}
if(currentQuestion == totQuestions){
	container.style.display = 'none';
	resultCont.style.display = "block";
	resultCont.textContent = 'your score:' + score;

	return;
}

loadQuestion(currentQuestion);

}

loadQuestion(currentQuestion);