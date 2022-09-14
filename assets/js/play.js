//Required elements listed as const below
const startButton = document.querySelector(".startButton button");
const introContainer = document.querySelector(".introContainer");
const exitButton = introContainer.querySelector(".buttons .home");
const contButton = introContainer.querySelector(".buttons .restart");
const quizContainer = document.querySelector(".quizContainer");
const resultContainer = document.querySelector(".resultContainer");
const options = document.querySelector(".options");
const timeDecline = document.querySelector(".statsRow .timeDecline");
const timeText = document.querySelector(".timer .time-txt");
const timeCounter = document.querySelector(".timer .timeSeconds");
const nextButton = document.querySelector(".nextDiv .nextButton");
const leftQuCounter = document.querySelector(".statsRow .maximumQuestions");
const restartQuiz = resultContainer.querySelector(".buttons .restart");
const returnHome = resultContainer.querySelector(".buttons .home");

//the action of clicking the Start Button startButton.onclick = ()=> {quizContainer.classList.add("activeQuiz")

// Start button click action
startButton.onclick = ()=>{
    quizContainer.classList.add("activeInfo"); //show info box
    startButton.classList.add("hideme");
};

// Exit button click action
exitButton.onclick = ()=>{
    introContainer.classList.remove("activeInfo"); //hide info box
    startButton.classList.remove("hideMe");
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
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let maxPoints = 200;

// Restart Quiz button click action
restartQuiz.onclick = ()=>{
    quizContainer.classList.add("activeQuiz"); 
//show quiz container
resultContainer.classList.remove("activeResult"); 
//hide results container
timeValue = 20; 
queCount = 0;
queNumb = 1;
userScore = 0;
widthValue = 0;
setQuestions(queCount);
questionCounter(queNumb);
clearInterval(counter);
clearInterval(counterLine);
startTime(timeValue);
startTimerLine(widthValue);
timeText.textContent = "Time Left";
nextButton.classList.remove("show");
}

// Home button will return the user back to the landing page click action
returnHome.onclick = ()=>{
    history.back(-1);
}

// Next button click action
nextButton.onclick = ()=>{
    if(queCount < questions.length - 1){
        queCount++;
        queNumb++;
        setQuestions(queCount);
        questionCounter(queNumb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left:";
        nextButton.classList.remove("show"); 
    }
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

// Setting questions and answer options from array

function setQuestions(index) {
    let questionText = document.querySelector("questionText");
    let questionTag = '<span>' + questions[index].question + '</span>';
    let optionTag = '<div class="option"><span>'+ questions[index].options[0] 
    + '</span></div>' + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    questionText.innerHTML = questionTag;
    options.innerHTML = optionTag;
    const option = options.querySelectorAll("option");
    for(i=0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionClicked(this)");
    }
}

// New div tags for tick and cross icons 
let iconTickTag = '<div class="icon tick"><i class="fa-solid fa-square-check"></i></div>';
let iconCrossTag = '<div class="icon cross"><i class="fa-solid fa-square-xmark"></i></div>';

// Option click function for when the user has selected their answer
function optionClicked(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent; 
    let correcAnswer = questions[queCount].answer;
    const allOptions = options.children.length;
    if(userAns == correcAnswer){
        userScore += 20;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", iconTickTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);}
        else{
            answer.classList.add("incorrect");
            answer.insertAdjacentHTML("beforeend", iconCrossTag); 
            console.log("Incorrect Answer");
            for(i=0; i < allOptions; i++){
                if(options.children[i].textContent == correcAnswer){
                    options.children[i].setAttribute("class", "option correct");
                    options.children[i].insertAdjacentHTML("beforeend", iconTickTag);
                    console.log("Auto selected correct answer.");
        }}}
        for(i=0; i < allOptions; i++){
            options.children[i].classList.add("disabled");
        }
        nextButton.classList.add("show");}
        

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
]

