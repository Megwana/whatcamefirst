# What Came First

## Table of Contents

* [Introduction](#Introduction)
* [User Design Experience (UX)](#User-Design-Experience)
* [Features](#features)
* [Technologies Applied](#Technologies-Applied)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Credits](#Credits)

![What Came First website, displayed on a variety of devices](./assets/images/responsiveWhatCameFirst.png)

The Website is responsive, this allows site visitors to interact with the platform on a variety of devices. This may range from, desktops, laptops, tablets, and mobiles. 

Please see above a mockup of the website on a range of devices. 

To view the deployed site, click this link: [What Came First](https://megwana.github.io/whatcamefirst)

## 1. Introduction

### Introduction & Premise 

A quiz is classed as a game or even a sport for the mind. People either individually or in a team try to answer questions correctly on an array of topics. To read more about this, [click here](https://en.wikipedia.org/wiki/Quiz).

What Came First is a website designed for visitors to learn and test their knowledge of general history. The goal for the user is to play the quiz game and try and guess what historical event, place, or person came first from the selection of options. 

### Goals 

- New Visitors to the site: 

For new visitors, I have the following goals depending on different factors. 
If the visitors already have a good sense of general knowledge then I want this to be a fun experience for them as a quiz game.
If the visitor does not know much about history, then I want the user to have learned and gained knowledge after completing the quiz. 
As the user is a new visitor, I want them to find the website easy to navigate. I want them to find the rules easy to understand. In addition, I would like them to find the website visually clear to read and appealing design-wise. 

- Regular Visitors to the site: 

For regular visitors, I want them to keep coming back. Therefore as time transpires, I will look to add more questions and quizzes to the website. 

- All visitors:

I want all visitors to have had a fun and interactive experience whilst completing the quiz. 
I want them to find the site easy to navigate.
My target audience is anyone with a curious mind. I hope those who answer the majority of the quiz correctly, enjoyed the questions and felt challenged at times if they have any feedback on how to make it more challenging; they can get in contact via the contact page.
Furthermore, I hope those who did not score highly, managed to learn something new and either research more about a question topic in their own time or decide to get in touch via the contact page. 

## 2. User Design Experience (UX)

### Conceptualisation

The original concept for this website is based on the board game (link referenced below):
https://www.amazon.co.uk/First-Board-Picking-Betting-Big/dp/B07VGLK2BY

The website is, however, a quiz game with its prime goal being that people may have learned something new after participating.

Whereas the board game has a more competitive element and a betting structure.

### Wireframes

As the quiz isn't just general trivia and is specifically on various historical people, places, and events that occurred: I wanted the insert a background image that embodies ancient history. For me, an image of the Pyramids was perfect to capture this. In addition, I wanted it to display also a fun lightness to it. Therefore, a cartoon of the Pyramids I thought aided this well. 

I created Wireframes for mobile, tablet, and desktop devices using Figma. 

![Home Page](./assets/images/wireframes/HomePageWireFrame.png)
![Instructions Modal](./assets/images/wireframes/InstructionsModalWireFrame.png)
![Start Button](./assets/images/wireframes/startButtonWireFrame.png)
![Introduction Page (points and timer rules)](./assets/images/wireframes/PointsTimeRulesWireFrame.png)
![Quiz Container](./assets/images/wireframes/QuestionContainerWireFrame.png)
![Results Container](./assets/images/wireframes/ResultsWireFrame.png)
![Contact Page](./assets/images/wireframes/ContactWireFrame.png)

### Colour Scheme

In the colour scheme, I wanted to have neutral elements such as black and white partnered with bright colours for 'correct' and 'incorrect' answers. In addition to this, I selected sky blue Crayola to be neutral between the Imperial red and Malachite green when trying to select an option. The blue also nicely connects on theme with sky featured in the historic illustration of the Egyptian Pyramids in the background.

![Colour Scheme](./assets/images/QuizColourScheme.png)

### Typography

Google Fonts: 

- The Header I wanted to be more illustrative and more delicate handwriting look to appear more historical. Therefore 'Dancing Script' was used.
![Dancing Script](./assets/images/DancingScriptFont.png)

- The main body font, I wanted to be slightly more formal and easy to read questions and options in the quiz. I felt handwriting text would prove challenging for people with reading/ visual impairments. Therefore, I selected 'Josefin Sans'.
![Josefin Sans](./assets/images/WebsiteFont.png)

### Imagery

- For the website background, I wanted to have an ancient background. However, I wanted this to be more fun and educational appearing rather than a real-life photo. 
The cartoon image of the pyramids felt perfect for a bright background and suited the history theme well.

### Accessibility

It is important to ensure that the website is user-friendly. I have fulfilled this by the following actions:

I have used semantic HTML and included aria-labels on click options and links where possible.
Establishing adequate color contrast on the website overall.

## 3. Features

### Existing Features

- Header Title: 

Header title 'What Came First?' always leads you back to the home page.

![Header Title](./assets/images/features/headerHome.png)

- Temple Icon - Top Left:

The Temple icon appears as a logo and also a drop-down menu. It lets you know it is interactive because when you hover over it, it turns 360 degrees.

![logo Temple](./assets/images/features/logoMenuDrop.png)

- Welcome Container

I wanted to create a general welcome container to give users the options to look at instructions, contact, or play the quiz.

I have numbered the bullet points in upper roman style to give an ancient feel.

![welcome container](./assets/images/features/welcomeContainer.png)

- Javascript Modal containing Instructions:

Due to the rules not being extensive, I felt an interactive modal would be more appropriate as opposed to creating a whole page for it. 

I added an interactive exit button, so on theme with the temple icon in the top left. It will spin 360 degrees when you hover over it. 

![instructions](./assets/images/features/instructionsModal.png)

- Start Quiz Button:

The start button breaks up the home page and the quiz from one another. It gives the user time to prepare, make sure they have no distractions, and are ready to fully immerse themselves in the quiz.
![Start Button](./assets/images/features/startQuiz.png)

- Introduction Container:

Although I created an Instructions modal, I felt it was important to always bear in mind and alert the user that they will only have 20 seconds to answer each question, they don't score '1' point per question, they score 20: and they have 10 questions in total.

In addition, to highlight that should they wish to exit at any point they can click the 'what came first?' header to return to the home page.
![Introduction Container](./assets/images/features/introContainer.png)

- Continue, Exit Button, Try again Button:

The user needed to have access to full navigation should they wish to return to the start button or continue the quiz. This is the same once they complete the quiz (for reference see the buttons above in the introduction container").

- Questions Counter:

This allowed users to keep a track of where they are and how many questions they have left to answer.

![Question Counter](./assets/images/features/counterTimer.png)

- Time counter and Time Line that increases:

I wanted to have a numerical countdown but also a visual line representing the time.

![Time Counter](./assets/images/features/counterTimer.png)

- Correct and Incorrect options:

When the user selects an answer, they get to know the correct answer regardless of whether they selected an incorrect option.

![Correct and Incorrect](./assets/images/features/correctIncorrect.png)

- Next Button Appears:

This encourages users to have a go at each question rather than trying to skip answers they don't know. This will mean they get to see the answer should the time run out or they select the wrong one. 

![Show Next Button](./assets/images/features/nextShow.png)

- Results Container

I have typed different responses depending on how the user performed. All messages are encouraging but still provide a scale of okay to amazing. 

![results container](./assets/images/features/results.png)

- Javascript Contact Form:

Users will be able to contact me with any questions or feedback they have for the quiz. Allowing direct contact with users and the ability to improve the site further based on what people possibly request.

![contact form](./assets/images/features/contactForm.png)
![contact form sent](./assets/images/features/MessageSent.png)

### Future Features

- More Questions or Quizzes on the website
- Add multiple difficulties 

### Why Certain Features Were Not Included

Many quizzes have high scores and shuffled questions. However, these are games that hold a competition to them about how much knowledge someone knows over the other. 

I did not feel these features suited my quiz because the history quiz is about learning new things and while points are a nice way to keep track and measure how well a user did. The purpose of the site is to ignite an interest in general history rather than focus on a competition structure. 

## 4. Technologies Applied

Languages:
- HTML 
- CSS
- Javascript

Other:

- FontAwesome - https://fontawesome.com/
- Flaticon - https://www.flaticon.com/free-icons/greek
- GoogleFonts - https://fonts.google.com/
- SmtpJS - https://smtpjs.com/
- Am I Responsive? - https://ui.dev/amiresponsive
- Grammarly - https://app.grammarly.com/
- freePik https://www.freepik.com/
- Coolors https://coolors.co/b47eb3-fdf5bf-ffd5ff-92d1c3-8bb8a8

## 5. Testing

### W3C Validator & JsHint 

- HTML W3C Validator
![index.html](./assets/images/Testing/index.htmlCheck.png)
![play.html](./assets/images/Testing/play.htmlCheck.png)
![contact.html](./assets/images/Testing/contactcssCheck.png)
![404.html](./assets/images/Testing/404PageCheck.png)

- CSS W3C Validator

![style.css](./assets/images/Testing/cssIndexCheck.png)
![play.css](./assets/images/Testing/playcssCheck.png)
![contact.css](./assets/images/Testing/contactcssCheck.png)

- JsHint

Please note: warnings for play.js were not relevant as ES6 is available. 

![script.js](./assets/images/Testing/jsHintIndex.png)
![play.js](./assets/images/Testing/jsHintPlay.png)
![contact.js](./assets/images/Testing/jsHintContact.png)

### Lighthouse

As you can see, after conducting testing via Lighthouse. The website is showing strong results:

![Home Desktop](./assets/images/lighthouse/HomeDeskTest.png)
![Home Mobile](./assets/images/lighthouse/HomeMobTest.png)
![Play Desktop](./assets/images/lighthouse/playDeskTest.png)
![Play Mobile](./assets/images/lighthouse/playMobTest.png)
![Contact Desktop](./assets/images/lighthouse/contactDeskTest.png)
![Contact Mobile](./assets/images/lighthouse/ImprovedContactMobTest.png)

### Bugs

1. When deploying the website, I had an issue with the background image appearing and my play.css file linking. 

To fix this bug, I had to change the live site URLs from absolute and relative.

2. The background image was not covering the page in mobile mode. 

To fix this I changed the position to relative. 

3. I was experiencing a gap at the bottom in mobile device mode.

To fix this, increased the background heights vh to 120 as opposed to 100.

4. higher z-index on the drop-down menu to ensure it is not behind the other elements when trying to navigate the website.

5. The Time Line was too long

To fix this I altered the seconds it runs and the number of pixels of the width.

## 6. Deployment

GitHub pages were used to deploy the live website of Beam Me Up. The measures to deploy the website are as follows:

Step 1: Logged on to GitHub Pages.

Step 2: Navigated to the settings tab, which can be found in the GitHub repository for Beam Me Up.

Step 3: On the left-hand column, I went to Pages and selected the master branch 'main'.

Step 4: Once the mast branch was selected, I clicked 'save' and the page automatically refreshed with a live link at the top of the page, registering the website's successful deployment.

The live link can be found here: https://megwana.github.io/whatcamefirst

## 7. Credits

Thank you to the below tutorials for guiding me in creating this website. 

Links Used:
- https://fontawesome.com/
- Google Fonts, including an icon for Favicon "https://www.flaticon.com/free-icons/greek"
- Brian Design https://www.youtube.com/watch?v=f4fB9Xg2JEY
- Coding Nepal https://www.youtube.com/watch?v=WUBhpSRS_fk
- https://smtpjs.com/
- https://www.youtube.com/watch?v=KjQ8uvAt9kQ
- https://www.w3schools.com/

In addition, thank you to Alex from student tutoring who guided me in relative and absolute URLs.