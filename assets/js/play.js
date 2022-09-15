//Required elements listed as const below
const startButton = document.querySelector(".startButton button");
const introContainer = document.querySelector(".introContainer");
const exitButton = introContainer.querySelector(".buttons .home");
const contButton = introContainer.querySelector(".buttons .restart");
const quizContainer = document.querySelector(".quizContainer");
const resultContainer = document.querySelector(".resultContainer");
const options = document.querySelector(".options");
const timeDecline = document.querySelector(".statsRow .timeDecline");
const timeText = document.querySelector(".timer .timeText");
const timeCounter = document.querySelector(".timer .timeSeconds");
const nextButton = document.querySelector(".nextDiv .nextButton");
const leftQuCounter = document.querySelector(".statsRow .maximumQuestions");
const restartQuiz = resultContainer.querySelector(".buttons .restart");
const returnHome = resultContainer.querySelector(".buttons .home");

// Start button click action
startButton.onclick = ()=>{
    introContainer.classList.add("activeIntro"); //show info box
    startButton.classList.add("hideMe");
};

//Exit button click action
exitButton.onclick = ()=>{
    introContainer.classList.remove("activeIntro"); //hide info box
    startButton.classList.remove("hideMe");
  };

// Continue button click action
contButton.onclick = ()=>{
    introContainer.classList.remove("activeIntro"); //hide info box
    quizContainer.classList.add("activeQuiz"); //show quiz box
    setQuestions(0); //calling setQestions function
    questionCounter(1); //passing 1 parameter to questionCounter
    startTimer(20); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
};

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
    resultContainer.classList.remove("activeResult"); 

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
};

// Home button will return the user back to the landing page click action
returnHome.onclick = ()=>{
    history.back(-1);
};

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
};

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
};

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
        nextButton.classList.add("show")
};

// showResult function
function showResult(){
    introContainer.classList.remove("activeIntro"); 
    quizContainer.classList.remove("activeQuiz"); 
    resultContainer.classList.add("activeResult"); 
    const scoreText = resultContainer.querySelector(".scoreText");
    if (userScore > 140){ 
        let scoreTag = '<span> Amazing, you got <p>'+ userScore +'</p> out of <p>'+ maxPoints +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 100){ // if user scored more than 1
        let scoreTag = '<span> Well done, you got <p>'+ userScore +'</p> out of <p>'+ maxPoints +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 100
        let scoreTag = '<span> Nice try, you got <p>'+ userScore +'</p> out of <p>'+ maxPoints +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
};

// startTimer function
function startTimer(time){
    counter = setInterval(timer, 100);
    function timer(){
        timeCounter.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCounter.textContent; 
            timeCounter.textContent = "0" + addZero;
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Countdown:"; 
            const allOptions = options.children.length; 
            let correcAnswer = questions[queCount].answer; 
            for(i=0; i < allOptions; i++){
                if(options.children[i].textContent == correcAnswer){
                    options.children[i].setAttribute("class", "option correct"); 
                    options.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                options.children[i].classList.add("disabled"); 
            }
            nextButton.classList.add("show"); 
        }
    }
};

// startTimerLine function
function startTimerLine(time){
    counterLine = setInterval(timer, 33);
    function timer(){
        time += 1;
        timeDecline.style.width = time + "px";
        if(time > 600){ 
            clearInterval(counterLine); 
        }
    }
};

// questionCounter function
function questionCounter(index){
    let totalQueCounTag = '<span>Question:<p>'+ index +'</p> of <p>'+ questions.length +'</p></span>';
    leftQuCounter.innerHTML = totalQueCounTag; 
};

// All Quiz questions 
let questions = [
    {
    numb: 1,
    question:"What was founded first?",
    answer: "Oxford University",
    options: [
        "Oxford University",
        "Aztec Empire",
        "Cambridge University",
        "Inca Empire",
    ]
  },
    {
    numb: 2,
    question: "What was created first?",
    answer: "Leonardo Da Vinci’s ‘Mona Lisa’ painting",
    options: [
      "Vermeer's 'Girl with a Pearl Earring'",
      "Michelangelo’s ‘David’ sculpture",
      "Van Gough's 'The Starry Night'",
      "Leonardo Da Vinci’s ‘Mona Lisa’ painting",
    ]
  },
    {
    numb: 3,
    question: "Who was born first?",
    answer: "Queen Elizabeth II",
    options: [
      "Tony Bennett",
      "David Attenborough",
      "Queen Elizabeth II",
      "Marilyn Monroe",
    ]
  },
    {
    numb: 4,
    question: "Which of the following came first?",
    answer: "Bowling",
    options: [
      "Bowling",
      "Cricket",
      "Golf",
      "Volleyball",
    ]
  },
    {
    numb: 5,
    question: "Which of the following came first?",
    answer: "Haitian Revolution",
    options:[
      "Haitian Revolution",
      "Greek War of Independence",
      "American Revolution",
      "French Revolution",
    ]
  },
      {
    numb: 6,
    question: "Which structure was built first?",
    answer: "Statue of Liberty",
    options:[
      "The Gherkin",
      "Statue of Liberty",
      "Eiffel Tower",
      "The Shard",
    ]
  },
      {
    numb: 7,
    question: "Which Roman Emperor ruled first?",
    answer: "Augustus",
    options:[
      "Hadrian",
      "Julius Ceaser",
      "Marcus Aurelius",
      "Augustus",
    ]
  },
      {
    numb: 8,
    question: "Which of the following came first? ",
    answer: "Hawaii admission into the US",
    options:[
      "Hawaii admission into the US",
      "Alaska admission into the US",
      "Isla Mujeres' admission into the US",
      "Toronto's admission into the US",
    ]
  },
      {
    numb: 9,
    question: "Which Greek Philosopher was born first?",
    answer: "Plato",
    options:[
      "Socrates",
      "Aristotle",
      "Plato",
      "Pythagoras",
    ]
  },
      {
    numb: 10,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },

        {
    numb: 11,
    question: "What came first ",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
      {
    numb: 12,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
        {
    numb: 13,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
        {
    numb: 14,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
        {
    numb: 15,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
        {
    numb: 16,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
        {
    numb: 17,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
        {
    numb: 18,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
        {
    numb: 19,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
        {
    numb: 20,
    question: "What William became Prime Minister first?",
    answer: "William Cavendish",
    options:[
      "William Grenville",
      "William Cavendish",
      "William Gladstone",
      "William Lamb",
    ]
  },
 ];