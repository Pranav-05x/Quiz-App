import {quizData} from "./data.js"

let currentQuestion=0
let correct=0
let wrong=0
let skipped=0

function loadQuestion(){
    if(currentQuestion>=quizData.length){
          confetti({
        particleCount:400,
        spread:120,
        origin: { y: 0.6 }
     })
         document.getElementById("question").innerHTML = ""
        document.getElementById("options").innerHTML = ""
        document.getElementById("next-btn").style.display = "none"
        document.getElementById("result").innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>✅ Correct: ${correct}</p>
            <p>❌ Wrong: ${wrong}</p>
            <p>⏭️ Skipped: ${skipped}</p>
        `
        return
    }
    const data=quizData[currentQuestion]
   
    document.getElementById("question").innerText=data.question
    
    const optionsDiv = document.getElementById("options")
    optionsDiv.innerHTML = `
        <input type="radio" name="option" value="a"> <label>${data.a}</label><br>
        <input type="radio" name="option" value="b"> <label>${data.b}</label><br>
        <input type="radio" name="option" value="c"> <label>${data.c}</label><br>
        <input type="radio" name="option" value="d"> <label>${data.d}</label><br>
    `
}

loadQuestion()

document.getElementById("next-btn").addEventListener("click",function(){
    const selected=document.querySelector('input[name="option"]:checked')

    if(selected){
        if(selected.value==quizData[currentQuestion].correct){
            correct++;
        }
        else{
            wrong++;
        }
    }
    else{
        skipped++;
    }
    currentQuestion++
    loadQuestion()
})

