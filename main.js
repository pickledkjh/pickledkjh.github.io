const audio = new Audio("Sounds/on.mp3");
const GundamId = document.getElementById("gundam-img");

window.addEventListener('DOMContentLoaded', function() {
    // Hide all pages except page1
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.add('hidden');
    });

    // Header image cross-fade loop
    const headerImages = document.querySelectorAll('.header-img-container .header-img');
    let current = 0;
    if (headerImages.length > 1) {
        setInterval(function() {
            headerImages[current].classList.remove('show');
            current = (current + 1) % headerImages.length;
            headerImages[current].classList.add('show');
        }, 2500); // Change image every 2.5 seconds
    }
});

document.getElementById('startbtn').addEventListener('click', function() {
    this.classList.add('startbtn-fadeout');
    setTimeout(function() { 
        document.getElementById('startbtn').style.display = 'none'; 
    }, 1000); //hide start button after fade out

    const images = document.querySelectorAll('.fade-img'); // Select all images with the class 'fade-img'
    let count = 0;

    audio.play(); // Play the audio when the start button is clicked

    // Fade in images one by one
    function fadeInNext() {
        if (count < images.length) {
            images[count].classList.add('fade-in');
            count++;
            audio.play();
            setTimeout(fadeInNext, 1500);
        } else {
            // After all images are faded in, start fading out
            audio.play();
            setTimeout(function() { fadeOutImagesAll(images); }, 1000);
        }
    }

    // Fade out images one by one
   function fadeOutImagesAll(images) {
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('fade-in');
        images[i].classList.add('fade-out');
    }
    // After fade out transition, show the pages
    setTimeout(function() {
        document.getElementById('startpage').classList.add('hidden');
        document.getElementById('page1').classList.remove('hidden');
        document.getElementById('page2').classList.remove('hidden');
        document.getElementById('page3').classList.remove('hidden');
        document.getElementById('page4').classList.remove('hidden');
        document.getElementById('page5').classList.remove('hidden');
        document.querySelector('header').classList.remove('hidden');
        document.querySelector('nav').classList.remove('hidden');
    }, 1000); 
}

    setTimeout(fadeInNext, 1500);
});

//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");

// /*find references to all the buttons and ball */
// const leftBtn = document.querySelector("#leftBtn");
// const rightBtn = document.querySelector("#rightBtn");
// const upBtn = document.querySelector("#upBtn");
// const downBtn = document.querySelector("#downBtn");
// const resetBtn = document.querySelector("#resetBtn");
// const ball = document.querySelector("#ball");
// var ballX = ballY = 0; //assign initial position of ball

var allpages = document.querySelectorAll(".page");

const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("ul");
hamBtn.addEventListener("click", toggleMenus);

//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}

function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
    setActiveButton(1);
});
page2btn.addEventListener("click", function () {
    show(2);
    setActiveButton(2);
});
page3btn.addEventListener("click", function () {
    show(3);
    setActiveButton(3);
});
page4btn.addEventListener("click", function () {
    show(4);
    setActiveButton(4);
});
page5btn.addEventListener("click", function () {
    show(5);
    setActiveButton(5);
});
hideall();

function toggleMenus() {
    if (menuItemsList.classList.contains("menuShow")) {
        menuItemsList.classList.remove("menuShow");
        menuItemsList.classList.add("menuHide");
        hamBtn.innerHTML = "Menu";
    } else {
        menuItemsList.classList.remove("menuHide");
        menuItemsList.classList.add("menuShow");
        hamBtn.innerHTML = "Close";
    }
}

function setActiveButton(pgno) {
    page1btn.classList.remove('active');
    page2btn.classList.remove('active');
    page3btn.classList.remove('active');
    page4btn.classList.remove('active');
    page5btn.classList.remove('active');
    if (pgno === 1) page1btn.classList.add('active');
    if (pgno === 2) page2btn.classList.add('active');
    if (pgno === 3) page3btn.classList.add('active');
    if (pgno === 4) page4btn.classList.add('active');
    if (pgno === 5) page5btn.classList.add('active');
}

window.addEventListener('scroll', function() {
    var content2 = document.querySelector('.page1-content2');
    if (!content2) return;
    var rect = content2.getBoundingClientRect();
    // Check if top of .page1-content2 is within viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        content2.classList.add('visible');
    } else {
        content2.classList.remove('visible');
    }
    
    var timelineTable = document.querySelector('.timeline-table');
    if (timelineTable) {
        var tableRect = timelineTable.getBoundingClientRect();
        if (tableRect.top < window.innerHeight && tableRect.bottom > 0) {
            timelineTable.classList.add('visible');
        } else {
            timelineTable.classList.remove('visible');
        }
    }

    var page2content2 = document.querySelector('.page2-content2');
    if (!page2content2) return;
    var page2rect = page2content2.getBoundingClientRect();
    // Check if top of .page2-content2 is within viewport
    if (page2rect.top < window.innerHeight && page2rect.bottom > 0) {
        page2content2.classList.add('visible');
    } else{
        page2content2.classList.remove('visible');
    }

     var page3content = document.querySelector('.page3-content');
    var page3content2 = document.querySelector('.page3-content2');
    if (page3content) {
        var rect = page3content.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            page3content.classList.add('visible');
        } else {
            page3content.classList.remove('visible');
        }
    }
    if (page3content2) {
        var rect2 = page3content2.getBoundingClientRect();
        if (rect2.top < window.innerHeight && rect2.bottom > 0) {
            page3content2.classList.add('visible');
        } else {
            page3content2.classList.remove('visible');
        }
    }
});




function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}


function MoveGundam() {
GundamId.style.left = GetRandom(0, 500) + "px";
GundamId.style.top = GetRandom(0, 500) + "px";
}

moveGundamItvId = setInterval(MoveGundam, 1000);

const scoreBox=document.getElementById("scoreBox");
const timerBox = document.getElementById("timerBox"); 
const startGameBtn = document.getElementById("startGameBtn");
var score = 0;
var timeLeft = 20;
var gundamTimeoutId = null;
var gameTimerId = null;

GundamId.style.display = "none"; // Hide Gundam initially

function updateTimer() {
    timerBox.innerHTML = "Time Left: " + timeLeft + "s";
    if (timeLeft <= 0) {
        GundamId.style.display = "none";
        timerBox.innerHTML = "Game Over!";
        scoreBox.innerHTML = "Final Score: " + score;
        clearInterval(gameTimerId);
        if (gundamTimeoutId) clearTimeout(gundamTimeoutId);
    }
}

function spawnGundam() {
    GundamId.style.opacity = "1";
    GundamId.classList.remove("anim1");
    GundamId.style.left = GetRandom(0, 500) + "px";
    GundamId.style.top = GetRandom(0, 500) + "px";
    GundamId.style.display = "block";

    // Set timeout for disappearance if not clicked in time
    if (gundamTimeoutId) clearTimeout(gundamTimeoutId);
    gundamTimeoutId = setTimeout(function() {
        GundamId.style.opacity = "0";
        setTimeout(function() {
            if (timeLeft > 0) spawnGundam();
        }, 1000);
    }, 1000);
}


function gundamCatch() {
//increases score after clicking
score++;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;
audio.play();

GundamId.classList.add("anim1");
GundamId.style.opacity = "0";

 setTimeout(function() {
        GundamId.classList.remove("anim1");
        GundamId.style.opacity = "1";
        // Move to new random position
        GundamId.style.left = GetRandom(0, 500) + "px";
        GundamId.style.top = GetRandom(0, 500) + "px";
    }, 1000);
}

// Timer countdown
function startGameTimer() {
    gameTimerId = setInterval(function() {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(gameTimerId);
            GundamId.style.display = "none";
        }
    }, 1000);
}

function startGame() {
    score = 0;
    timeLeft = 20;
    scoreBox.innerHTML = "Score: " + score;
    GundamId.style.display = "block";
    updateTimer();
    spawnGundam();
    startGameTimer();
}


//link gundam to mouseclick to gundamCatch function
startGameBtn.addEventListener("click", startGame);
GundamId.addEventListener("click",gundamCatch);

document.addEventListener("keydown",function(evt){
console.log(evt);
if(evt.code=="KeyT"){
GundamId.classList.add("shrink");
}
if(evt.code=="KeyU"){
GundamId.classList.remove("shrink");
}
if(evt.code=="KeyA"){
GundamId.classList.add("anim1");
}
if(evt.code=="KeyB"){
GundamId.classList.remove("anim1");
}
});

const btnSubmit=document.querySelector("#btnSubmit");
const scorebox=document.querySelector("#scorebox");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizQuestions = document.querySelectorAll(".quiz-q");
const nextBtns = document.querySelectorAll(".nextBtn");
var q1,q2,q3,score=0;

function showQuestion(id) {
    quizQuestions.forEach(function(q) {
        q.classList.remove("visible");
    });
    var qn = document.getElementById(id);
    if (qn) qn.classList.add("visible");
}

startQuizBtn.addEventListener("click", function() {
    startQuizBtn.style.display = "none";
    showQuestion("q1-fieldset");
});

nextBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var currentFieldset = btn.parentElement;
        currentFieldset.classList.remove("visible");
        var nextId = btn.getAttribute("data-next");
        setTimeout(function() {
            showQuestion(nextId);
        }, 1000); // Wait for fade out transition
    });
});

function CheckAns() {
    // If nothing is selected, .value will be undefined
    q1 = document.querySelector("input[name='q1']:checked")?.value;
    q2 = document.querySelector("input[name='q2']:checked")?.value;
    q3 = document.querySelector("input[name='q3']:checked")?.value;
    let score = 0;
    if (q1 === "Universal Century") score++;
    if (q2 === "Rx-78-2") score++;
    if (q3 === "Cosmic Era") score++;
    scorebox.innerHTML = "Score: " + score;
}
btnSubmit.addEventListener("click", CheckAns);

window.addEventListener('resize', function() {
    const menuItemsList = document.querySelector('nav ul');
    const hamBtn = document.getElementById('hamIcon');
    if (window.innerWidth > 800) {
        // Always show menu in row on desktop
        menuItemsList.classList.remove('menuShow');
        menuItemsList.classList.remove('menuHide');
        menuItemsList.style.display = 'flex';
        menuItemsList.style.flexDirection = 'row';
        menuItemsList.style.opacity = '1';
        if (hamBtn) hamBtn.innerHTML = "Menu";
    } else {
        // Hide menu by default on mobile
        menuItemsList.style.display = '';
        menuItemsList.style.flexDirection = '';
        menuItemsList.style.opacity = '';
        menuItemsList.classList.remove('menuShow');
        menuItemsList.classList.add('menuHide');
        if (hamBtn) hamBtn.innerHTML = "Menu";
    }
});

const restartQuizBtn = document.getElementById("restartQuizBtn");

// restart quiz
restartQuizBtn.addEventListener("click", function() {
    scorebox.innerHTML = "";
    startQuizBtn.style.display = "block";
    quizQuestions.forEach(function(q) {
        q.classList.remove("visible");
        q.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
    });
});
