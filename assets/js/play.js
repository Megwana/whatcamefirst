//Required elements listed as const below
const startButton = document.querySelector('.start-button button');
const question = document.querySelector("#question-text");
const optionText = Array.from(document.querySelectorAll('#option-text'));
const questNum = document.querySelector(".quest-num");
const questCounter = document.querySelector(".quest-counter");
const pointsCounter = document.querySelector(".points-counter");
const quizContainer = document.querySelector('.quiz-container');
const nextButton = document.querySelector(".next-button");

//the action of clicking the Start Button startButton.onclick = ()=> {quizContainer.classList.add("activeQuiz")

startButton.onclick = ()=>{
    quizContainer.classList.add("activeInfo"); //show info box
    startButton.classList.add("hideme");
};

//the action of clicking the Next Buttonl

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let points = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What was founded first?",
        option1: "Oxford University",
        option2: "Aztec Empire",
        option3: "Cambridge University",
        option4: "Inca Empire",
        answer: 1,
    },
    {
        question: "What?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 4,
    },
    {
        question: "founded?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 3,
    },
    {
        question: "Was?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 2,
    },
    {
        question: "first?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 3,
    },
    {
        question: "What was 1?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 1,
    },
    {
        question: "What was 2?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 2,
    },
    {
        question: "founded first 1?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 3,
    },
    {
        question: "how are you1?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 4,
    },
    {
        question: "how are you?",
        option1: "OU",
        option2: "45",
        option3: "56",
        option4: "happy",
        answer: 1,
    },
];

const SCORE_POINTS = 200;
const MAX_QUESTIONS = 10;

beginGame = () => {
    questionCounter = 0;
    points = 0;
    availableQuestions = [...questions];
    setNewQuestion();
};

setNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentPoints', points);
        //return window.location.assign('/end.html')
    }

    questionCounter++;
    questNum.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    questCounter.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    optionText.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

optionText.forEach(option => {
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementPoints(SCORE_POINTS);
        }

        selectedOption.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            setNewQuestion();
        }, 1000);

    });
});

incrementPoints = num => {
    points +=num;
    pointsCounter.innerText = points;
};

beginGame();
