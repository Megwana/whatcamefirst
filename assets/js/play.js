//selecting all required elements
const startButton = document.querySelector(".start-button button");
const introContainer = document.querySelector(".introContainer");
const exitButton = introContainer.querySelector(".buttons .home-button");
const contButton = introContainer.querySelector(".buttons .restart-button");
const quizContainer = document.querySelector(".quizContainer");
const resultContainer = document.querySelector(".resultContainer");
const options = document.querySelector(".options");
const timeDecline = document.querySelector(".statsRow .timeDecline");
const timeText = document.querySelector(".timer .timeText");
const timeCounter = document.querySelector(".timer .timeSeconds");
const nextButton = document.querySelector(".nextDiv .next-button");
const leftQuCounter = document.querySelector(".statsRow .maximum-questions");
const restartQuiz = resultContainer.querySelector(".buttons .restart-button");
const returnHome = resultContainer.querySelector(".buttons .home-button");

// Start button click action
startButton.onclick = ()=>{
  introContainer.classList.add("activeIntro"); 
  startButton.classList.add("hideMe");
}

// Exit button click action
exitButton.onclick = ()=>{
  introContainer.classList.remove("activeIntro"); 
  startButton.classList.remove("hideMe");
}

// continue button click action
contButton.onclick = ()=>{
    introContainer.classList.remove("activeIntro"); 
    quizContainer.classList.add("activeQuiz"); 
    setQuestions(0); 
    questionCounter(1); 
    startTimer(20); 
    startTimerLine(0); 
}

let timeValue =  20;
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let maxPoints = 200;

// restartQuiz button clicked
restartQuiz.onclick = ()=>{
    quizContainer.classList.add("activeQuiz"); //show quiz box
    resultContainer.classList.remove("activeResult"); //hide result box
    timeValue = 20; 
    queCount = 0;
    queNumb = 1;
    userScore = 0;
    widthValue = 0;
    setQuestions(queCount); //calling setQestions function
    questionCounter(queNumb); //passing que_numb value to questionCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    nextButton.classList.remove("show"); //hide the next button
}

// returnHome button click takes user back to the home page
returnHome.onclick = ()=>{
    history.back(-1);
}

// Next button clicked
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
    }else{
        clearInterval(counter);
        clearInterval(counterLine); 
        showResult(); 
    }
}

//setQuestions function
function setQuestions(index){
  let questionText = document.querySelector(".questionText");
  let que_tag = '<span>'+ questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  
  questionText.innerHTML = que_tag; 
  
  options.innerHTML = option_tag; 
    
  const option = options.querySelectorAll(".option");
  
  for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionClicked(this)");
    }
}

// New div tags for icons
let iconTickTag = '<div class="icon tick"><i class="fa-solid fa-square-check"></i></div>';
let iconCrossTag = '<div class="icon cross"><i class="fa-solid fa-square-xmark"></i></div>';

// Option click function when user has selected their answer
function optionClicked(answer){
    clearInterval(counter); //clear the qustion counter
    clearInterval(counterLine); //clear counter's declining width line
    let userAns = answer.textContent; //User selected option
    let correcAnswer = questions[queCount].answer; //correct answer from array
    const allOptions = options.children.length; //all option items
    
    if(userAns == correcAnswer){ //if correct answer
        userScore += 20; //Increment score by 20
        answer.classList.add("correct"); // green colour added to correct option
        answer.insertAdjacentHTML("beforeend", iconTickTag); //square tick icon added to correct clicked option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //red colour added to incorrect clicked option
        answer.insertAdjacentHTML("beforeend", iconCrossTag); //square cross icon added to incorrect clicked option
        console.log("Incorrect Answer");

        for(i=0; i < allOptions; i++){
            if(options.children[i].textContent == correcAnswer){ //if there is an option which is matched to an array answer 
                options.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                options.children[i].insertAdjacentHTML("beforeend", iconTickTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        options.children[i].classList.add("disabled"); 
    }
    nextButton.classList.add("show"); 
}

// showResult function
function showResult(){
    introContainer.classList.remove("activeInfo"); 
    quizContainer.classList.remove("activeQuiz"); 
    resultContainer.classList.add("activeResult"); 
    const scoreText = resultContainer.querySelector(".scoreText");
    if (userScore > 140){ 
        let scoreTag = '<span> Amazing, you got <p>'+ userScore +'</p> out of <p>'+ maxPoints +'</p>.</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 100){ // if user scored more than 1
        let scoreTag = '<span> Well done, you got <p>'+ userScore +'</p> out of <p>'+ maxPoints +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 100
        let scoreTag = '<span> Nice try, you got<p>'+ userScore +'</p> out of <p>'+ maxPoints +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}




// startTimer function
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCounter.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCounter.textContent; 
            timeCounter.textContent = "0" + addZero;
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Left:"; 
            const allOptions = options.children.length; 
            let correcAnswer = questions[queCount].answer; 
            for(i=0; i < allOptions; i++){
                if(options.children[i].textContent == correcAnswer){
                    options.children[i].setAttribute("class", "option correct"); 
                    options.children[i].insertAdjacentHTML("beforeend", iconTickTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                options.children[i].classList.add("disabled"); 
            }
            nextButton.classList.add("show"); 
        }
    }
}

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
}

// questionCounter function
function questionCounter(index){
    let totalQueCounTag = '<span>Question:<p>'+ index +'</p> of <p>'+ questions.length +'</p></span>';
    leftQuCounter.innerHTML = totalQueCounTag; 
}

// All quiz questions below in an Array and passing the number, questions, options, and answers
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
    question: "Which Sport came first?",
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
    question: "Which Revolution came first?",
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
    answer: "Hawaii’s admission into the US",
    options:[
      "Hawaii’s admission into the US",
      "Alaska’s admission into the US",
      "Isla Mujeres' admission into the US",
      "Toronto's admission into the US",
    ]
  },
      {
    numb: 9,
    question: "Which Philosopher was born first?",
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
    question: "Who was Prime Minister first?",
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

