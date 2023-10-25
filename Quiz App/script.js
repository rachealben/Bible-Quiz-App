const quizData = [
    {
    
        question: "Who was the first man created?",
        a: "Adam",
        b: "Noah",
        c: "Abraham",
        d: "Moses",
        correct: "c",
    }, 
    {

        question: "What is the first book of the New Testament?",
        a: "Genesis",
        b: "Exodus", 
        c: "Matthew", 
        d: "Acts", 
        correct: "c",
    },
    {
        question: "How many days and nights did it rain during the great flood?",
        a: "20", 
        b: "30", 
        c: "40",
        d: "50", 
        correct: "c",
    }, 
    {

        question: "Who betrayed Jesus with a kiss?",
        a: "Peter",
        b: "Judas Iscariot", 
        c: "John", 
        d: "Thomas", 
        correct: "b",
    }, 
    {

        question: "Which prophet saw a valley of dry bones come to life?",
        a: "Isaiah", 
        b: "Ezekiel",
        c: "Jeremiah", 
        d: "Daniel", 
        correct: "b",
    },
    {

        question: "What is the shortest verse in the Bible?",
        a: "John 3:16", 
        b: "Genesis 1:1", 
        c: "Psalm 23:1",
        d: "John 11:35", 
        correct: "d",
    },
    {

        question: "In the story of David and Goliath, what did David use to defeat Goliath?",
        a: "Bow and Arrow",
        b: "Slingshot and Stone", 
        c: "Sword",
        d: "Spear", 
        correct: "b",
    },
    {

        question: "What animal spoke to Balaam in the Bible?",
        a: "Camel",
        b: "Horse",
        c: "Elephant",
        d: "Donkey",      
        correct: "d",
    }, 
    {

        question: "Who was known for his wisdom and wrote the book of Proverbs?",
        a: "King Solomon",
        b: "King David",
        c: "Daniel",
        d: "Isaiah",
        correct: "a",
    }, 
    {
        
        question: "What is the fruit of the Spirit mentioned in Galatians 5:22-23?",
        a: "Love, Joy, Peace", 
        b: "Kindness, Goodness, Faithfulness",
        c: "Patience, Gentleness, Self-control'",
        d: "All of the above",
         correct: "d",
    }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly .</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});