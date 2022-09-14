//Required elements listed as const below
const startButton = document.querySelector(".start-button button");
const introContainer = document.querySelector(".intro-container");
const exitButton = introContainer.querySelector(".buttons .quit");
const contButton = introContainer.querySelector(".buttons .restart");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".resultContainer");
const options = document.querySelector(".options");
const timeDecline = document.querySelector(".stats-row .time-decline");
const timeText = document.querySelector(".timer .time-txt");
const timeCounter = document.querySelector(".timer .time-sec");
const nextButton = document.querySelector(".next-div .next-button");
const leftQuCounter = document.querySelector(".stats-row .maximum-questions");
const restartQuiz = resultContainer.querySelector(".buttons .restart");
const returnHome = resultContainer.querySelector(".buttons .quit");

//the action of clicking the Start Button startButton.onclick = ()=> {quizContainer.classList.add("activeQuiz")

// Start button click action
startButton.onclick = ()=>{
    quizContainer.classList.add("activeInfo"); //show info box
    startButton.classList.add("hideme");
};

// Exit button click action
exitButton.onclick = ()=>{
    introContainer.classList.remove("activeInfo"); //hide info box
    startButton.classList.remove("hideme");
  }

contButton.onclick = ()=>{
    introContainer.classList.remove("activeInfo"); //hide info box
    quizContainer.classList.add("activeQuiz"); //show quiz box
    setQuestions(0); //calling setQestions function
    questionCounter(1); //passing 1 parameter to questionCounter
    startTimer(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let points = 0;
let availableQuestions = [];

// All Quiz questions 
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
        question: "What was created first?",
        option1: "Vermeer's 'Girl with a Pearl Earring'",
        option2: "Michelangelo’s ‘David’ sculpture",
        option3: "Van Gough's 'The Starry Night'",
        option4: "Leonardo Da Vinci’s ‘Mona Lisa’ painting",
        answer: 4,
    },
    {
        question: "Who was born first?",
        option1: "Tony Bennett",
        option2: "David Attenborough",
        option3: "Queen Elizabeth II",
        option4: "Marilyn Monroe",
        answer: 3,
    },
    {
        question: "What Sport came first?",
        option1: "Bowling",
        option2: "Cricket",
        option3: "Golf",
        option4: "Volleyball",
        answer: 1,
    },
    {
        question: "Which of the following came first?",
        option1: "Haitian Revolution",
        option2: "Greek War of Independence",
        option3: "American Revolution",
        option4: "French Revolution",
        answer: 3,
    },
    {
        question: "Which structure was built first?",
        option1: "The Gherkin",
        option2: "Statue of Liberty",
        option3: "Eiffel Tower",
        option4: "The Shard",
        answer: 2,
    },
    {
        question: "Which Roman Emperor ruled first?",
        option1: "Hadrian",
        option2: "Julius Ceaser ",
        option3: "Marcus Aurelius ",
        option4: "Augustus",
        answer: 4,
    },
    {
        question: "Which of the following came first? ",
        option1: "Hawaii’s admission into the US",
        option2: "Alaska’s admission into the US",
        option3: "Isla Mujeres' admission into the US",
        option4: "Toronto's admission into the US",
        answer: 1,
    },
    {
        question: "Which Greek Philosopher was born first? ",
        option1: "Socrates",
        option2: "Aristotle",
        option3: "Plato",
        option4: "Pythagoras",
        answer: 3,
    },
    {
        question: "What William became Prime Minister first? ",
        option1: "William Grenville",
        option2: "William Cavendish",
        option3: "William Lamb",
        option4: "William Gladstone",
        answer: 2,
    },
];

// const for score points awarded and maximum number of questions
const SCORE_POINTS = 20;
const MAX_QUESTIONS = 10;

// function to begin the game
beginGame = () => {
    questionCounter = 0;
    points = 0;
    availableQuestions = [...questions];
    setNewQuestion();
};

questionCounter++
questNum.innerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
questCounter.style.Array = `${(questionCounter/MAX_QUESTIONS)}%}`;

// function to set new questions after each is answered
setNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentPoints', points);
        //return window.location.assign('/end.html')
    }
    const totalQuestions = question.length;
    for (let i=0; i<totalQuestions; i++){
        availableQuestions.push(question[i])
    }
    questionCounter.innerHTML = "Question" + (questCounter +1) + " of " + question.length
    // Const below to shuffles at random
    const questionsIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerHTML = currentQuestion.question;

    optionText.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });
    
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};

// function to select options as correct or incorrect
optionText.forEach(option => {
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementPoints(SCORE_POINTS);
            option.innerHTML = 'CORRECT!';
            nextButton.addEventListener("click", setNewQuestion);
        }

        else option.innerHTML = 'INCORRECT!';

        selectedOption.parentElement.classList.add(classToApply);
        nextButton.addEventListener("click", () => {
            selectedOption.parentElement.classList.remove(classToApply);
           
            setNewQuestion()
        });
    
    });
});

incrementPoints = num => {
    points +=num;
    pointsCounter.innerText = points;
};

beginGame();
