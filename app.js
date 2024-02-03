const question = [{
    'que':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'NodeJs',
    'correct':'a'
},{
    'que':"what year was javascript launched?",
    'a':"2000",
    'b':"1995",
    'c':"1994",
    'd':"none of the above",
    'correct':"b",
},{
    'que':"what does CSS stands for?",
    'a':"Hyper text marked up language",
    'b':"Cascading style sheet",
    'c':"jason object",
    'd':"helicopter termonals notoboats lamborginis",
    'correct':"b",
}
]
let index =0;
let total=question.length;
let right=0;
    wrong=0;
const quesBox =document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion =()=>{
    if(index===total){
       return endQuize() 
    }
    reset()
    const data =question [index]
    console.log(data)
    quesBox.innerText=` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;

}
const submitQuize =()=>{
    const data =question [index]
    const ans=getAnswer()
    console.log(ans,data.correct)
    if (ans===data.correct){
        right++;
    }else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if (input.checked) {
                answer= input.value;
            
            }  
            
        }
    )
    return answer;
}
const reset=()=>{
    optionInputs.forEach(
            (input)=>{
                input.checked=false;
            }
    )
   
}
const endQuize = () => {
    document.getElementById("box").innerHTML=`
  <h3> Thank you for playing the quize </h3> 
   <h2> ${right} / ${total} are correct </h2>
  `
}

loadQuestion();