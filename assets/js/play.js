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

// Continue button click action
contButton.onclick = ()=>{
    introContainer.classList.remove("activeInfo"); //hide info box
    quizContainer.classList.add("activeQuiz"); //show quiz box
    setQuestions(0); //calling setQestions function
    questionCounter(1); //passing 1 parameter to questionCounter
    startTimer(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let maxPoints = 200;

//restartQuiz button
restartQuiz.onclick = ()=>{
    quizContainer.classList.add("activeQuiz"); 
//show quiz container
resultContainer.classList.remove("activeResult"); 
//hide results container
timeValue = 20; 
que_count = 0;
que_numb = 1;
userScore = 0;
widthValue = 0;
setQuestions(que_count);
questionCounter(que_numb);
clearInterval(counter);
clearInterval(counterLine);
startTime(timeValue);
startTimerLine(widthValue);
timeText.textContent = "Time Left";
nextButton.classList.remove("show");
}

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
