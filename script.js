const questions = [
    {
        question: "Tw_n Towers. What letter is missing from the word?",
        answers: [
            {text: "Letter e", correct: false},
            {text: "Letter i", correct: true},
            {text: "Letter y", correct: false},
            {text: "Letter a", correct: false},
        ]
    },
    {
        question: "___ square",
        answers: [
            {text: "Lychee", correct: false},
            {text: "Lime", correct: false},
            {text: "Lemon", correct: false},
            {text: "Lennon", correct: true},
        ]
    },
    {
        question: "Aragorn is ___'s heir.",
        answers: [
            {text: "Gandalf", correct: false},
            {text: "Bilbo", correct: false},
            {text: "Isildur", correct: true},
            {text: "Thranduil", correct: false},
        ]
    },
    {
        question: "Old Major represents ___",
        answers: [
            {text: "Roosevelt", correct: false},
            {text: "Martin Luther King Jr.", correct: false},
            {text: "Niccolo Machiavelli", correct: false},
            {text: "Karl Marx", correct: true},
        ]
    },
    {
        question: "Who is the principal enemy of the state of Oceania?",
        answers: [
            {text: "Julius Caesar", correct: false},
            {text: "Immanuel Kant", correct: false},
            {text: "Daenerys Targaryen", correct: false},
            {text: "Emmanuel Goldstein", correct: true},
        ]
    },
    {
        question: "What color is often associated with joy?",
        answers: [
            {text: "Yellow", correct: true},
            {text: "Yam", correct: false},
            {text: "Mellow", correct: false},
            {text: "Mint", correct: false},
        ]
    },
    {
        question: "You're ___ of touch, I'm ___ of time. But I'm ___ of my head when you're not around",
        answers: [
            {text: "ouch", correct: false},
            {text: "off", correct: false},
            {text: "of", correct: false},
            {text: "out", correct: true},
        ]
    },
    {
        question: "Alf: Is it me or does it smell like ___ in here? Len: What's ___? Alf: Nothing much. What's up with you?",
        answers: [
            {text: "Under where", correct: false},
            {text: "Updog", correct: true},
            {text: "Under", correct: false},
            {text: "Undergo", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", () => {
        window.location.href = "Confythird.html";
    });
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();