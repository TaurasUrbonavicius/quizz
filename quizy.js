function myFunction() {
  let correct = 0;
  let incorrect = 0;
  let question1 = ["Hyper Text Markup Language", "Hyper Textile Makeup learner", "Hes Turtle Mutant Learner", "Has Text max Language"];
  let funny1 = prompt("What does HTML stand for?:  Hyper Text Markup Language, Hyper Textile Makeup learner, Hes Turtle Mutant Learner, Has Text max Language");

  let question2 = ["Animating", "Drawing", "Stuff", "Design"]
  let funny2 = prompt("What is CSS used for?:  Animating, Drawing, Stuff, Design") ;

  let question3 = ["For Python", "For web pages", "Poopy stuff", "For cats"]
  let funny3 = prompt("Why is JavaScript used for?:  For Python, For web pages, Poopy stuff, For cats");

  let question4 = ["W3Schools", "FreeCodeCamp", "ChatGPT", "Reddit"]
  let funny4 = prompt("What do people mostly use for help while programming?:  W3Schools, FreeCodeCamp, ChatGPT, Reddit");

  let question5 = ["Because it's fun", "Because it's useful", "Because we thought it'll be fun to learn.", "BECAUSE IT'S GREAT"]
  let funny5 = prompt("Why do people learn JS?:  Because it's fun, Because it's useful, Because we thought it'll be fun to learn., BECAUSE IT'S GREAT");

  let question6 = ["JavaScript", "Python", "C#", "C++"] 
  let funny6 = prompt("Which is better?:  JavaScript, Python, C#, C++");

  let question7 = ["CSS", "HTML", "JavaScript", "Python"]
  let funny7 = prompt("What is the base for web creation?:  CSS, HTML, JavaScript, Python");

  let question8 = ["Python", "C++", "Unity", "JavaScript"]
  let funny8 = prompt("With what is Cookie Clicker made?:  Python, C++, Unity, JavaScript");

  let question9 = ["2048", "PolyCraft", "Minecraft", "Cookie Clicker"]
  let funny9 = prompt("What game WASN'T made with JavaScript?:  2048, PolyCraft, Minecraft, Cookie Clicker");

  let question10 = ["no", "no", "yes", "no"]
  let funny10 = prompt("Is JavaScript better then python?: no, no, YES, no");

  let answer1 = question1[funny1]
  if (answer1 == question1[0]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer2 = question2[funny2]
  if (answer2 == question2[3]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer3 = question3[funny3]
  if (answer3 == question3[1]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer4 = question4[funny4]
  if (answer4 == question4[2]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer5 = question5[funny5]
  if (answer5 == question5[2]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer6 = question6[funny6]
  if (answer6 == question6[0]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer7 = question7[funny7]
  if (answer7 == question7[1]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer8 = question8[funny8]
  if (answer8 == question8[3]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer9 = question9[funny9]
  if (answer9 == question9[2]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  let answer10 = question10[funny10]
  if (answer10 == question10[2]) {
    correct = correct + 1;
  } else {
    incorrect = incorrect + 1
  }
  document.getElementById("demo").innerHTML = "You have answered " + correct + " question correctly, and " + incorrect + " incorrectly.";
}