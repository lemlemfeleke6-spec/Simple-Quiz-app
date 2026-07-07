const questions=[
    {
        question:"What does HTML stand for?",
        answer:[
                {text:"Hyper Text Markup Language",correct: true},
                {text:"High Tech Modern Language",correct:false},
                {text:"Hyper Tool Multi Language",correct:false},
                {text:"Home Text Markup Language",correct:false},
        ]
      
    },
    {
        question:"Which language is mainly used to style web pages?",
        answer:[
            {text:"HTML",correct:false},
            {text:"CSS",correct:true},
            {text:"java",correct:false},
            {text:"python",correct:false},
        ]
    },
    {
        question:"Which JavaScript keyword is used to declare a variable?",
        answer:[
            {text:"let",correct:true},
            {text:"loop",correct:false},
            {text:"print",correct:false},
            {text:"input",correct:false},
        ]
    },
    {
        question:"What is CPU stand for?",
        answer:[
            {text:"central processing unit",correct:true},
            {text:"computer power unit",correct:false},
            {text:"core processing utility",correct:false},
            {text:"Central Program Utility",correct:false},
        ]
    },
    {question:"which company developed the windows operating system?",
        answer:[
            {text:"Apple",correct:false},
            {text:"Google",correct:false},
            {text:"Microsoft",correct:true},
            {text:"IBM",correct:false},
        ]

    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

    let currentQuestionIndex=0;
    let score=0;

    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML="Next";
        showQuestion();
    }
    function showQuestion(){
        resetState();
        let currentQuestion=questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex+1;
        questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

        currentQuestion.answer.forEach(answer=>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",selectAnswer);
        });
    }

    function resetState(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct==="true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
                button.disabled=true;
        });
        nextButton.style.display="block";

    }
    function showScore(){
         resetState();
         questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
         nextButton.innerHTML="play Again";
         nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }
        else{
             startQuiz();
        }
    });
    startQuiz();
    
   