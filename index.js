var finalscore = 0;
var question = 0;
var answers = [0,0,0,0,0,0,0,0,0,0];
var fa =[2,4,1,3,2,2,1,4,2,4]
var x = 0;
var val = [0,0,0,0]
let runing =true;
function select1(){
    if(runing ==true){
    if(val[1] ==0){
        document.getElementById('o1').style.backgroundColor ="grey"
        val[2] =0; document.getElementById('o2').style.backgroundColor ="white"
        val[3] =0; document.getElementById('o3').style.backgroundColor ="white"
        val[4] =0; document.getElementById('o4').style.backgroundColor ="white"
        val[1]++
    }
    
    else if(val[1] ==1){
        document.getElementById('o1').style.backgroundColor ="white"
        val[1] = 0
    }}}
function select2(){
    if(runing ==true){
        if(val[2] ==0){
            document.getElementById('o2').style.backgroundColor ="grey"
            val[1] =0; document.getElementById('o1').style.backgroundColor ="white"
            val[3] =0; document.getElementById('o3').style.backgroundColor ="white"
            val[4] =0; document.getElementById('o4').style.backgroundColor ="white"
            val[2]++
        }
        else if(val[2] ==1){
            document.getElementById('o2').style.backgroundColor ="white"
            val[2] = 0
    }}}
function select3(){
    if(runing ==true){
    if(val[3] ==0){
        document.getElementById('o3').style.backgroundColor ="grey"
        val[1] =0; document.getElementById('o1').style.backgroundColor ="white"
        val[2] =0; document.getElementById('o2').style.backgroundColor ="white"
        val[4] =0; document.getElementById('o4').style.backgroundColor ="white"
        val[3]++
    }
    else if(val[3] ==1){
        document.getElementById('o3').style.backgroundColor ="white"
        val[3] = 0
    }}}
function select4(){
    if(runing ==true){
    if(val[4] ==0){
        document.getElementById('o4').style.backgroundColor ="grey"
        val[1] =0; document.getElementById('o1').style.backgroundColor ="white"
        val[2] =0; document.getElementById('o2').style.backgroundColor ="white"
        val[3] =0; document.getElementById('o3').style.backgroundColor ="white"
        val[4]++
    }
    else if(val[4] ==1){
        document.getElementById('o4').style.backgroundColor ="white"
        val[4] = 0
    }}}
function submit(){
    for(i=0;i<=4;i++){
        if(val[i]==1){
            answers[question] = i;

        }
    }
    if(answers[question] == fa[question]){
        document.getElementById('o'+answers[question]).style.backgroundColor ="green"
        runing = false
        finalscore++
    }
    else{
        document.getElementById('o'+answers[question]).style.backgroundColor ="red"
        runing = false
    }

}
function next(){
    if(answers[question] > 0){
    if(question == 8){
        document.getElementById('next').style.display ="none"
        document.getElementById('finish').style.display ="block"
    }
    question++
    x = question +1
    document.getElementById('num').innerHTML = "Question: " + x;

    document.getElementById('o1').style.backgroundColor ="white"
    document.getElementById('o2').style.backgroundColor ="white"
    document.getElementById('o3').style.backgroundColor ="white"
    document.getElementById('o4').style.backgroundColor ="white"
    q()
    if(answers[question]==0){
        runing = true;
 
    }
    else{
        if(answers[question] == fa[question]){
            document.getElementById('o'+answers[question]).style.backgroundColor ="green"
     
        }
        else{
            document.getElementById('o'+answers[question]).style.backgroundColor ="red"
        } 
    }
    sub=false
}}
function prev(){
    if(question > 0){
    question--
    x = question +1
    document.getElementById('num').innerHTML = "Question: " + x;
    document.getElementById('next').style.display ="block"
    document.getElementById('finish').style.display ="none"
    document.getElementById('o1').style.backgroundColor ="white"
    document.getElementById('o2').style.backgroundColor ="white"
    document.getElementById('o3').style.backgroundColor ="white"
    document.getElementById('o4').style.backgroundColor ="white"
        q()
    if(answers[question] == fa[question]){
        document.getElementById('o'+answers[question]).style.backgroundColor ="green"
 
    }
    else{
        document.getElementById('o'+answers[question]).style.backgroundColor ="red"
    }
}}
function finish(){
    if(answers[question] > 0){
        document.getElementById('Daddy').style.display ="none"
        document.getElementById('Done').style.display ="block"

        document.getElementById('score').innerHTML = "YOU GOT " + finalscore +"/10!!!!"
    }

}
function q(){
    if(question == 0){
        document.getElementById('quest').innerHTML = "What does CSS stand for?"

        document.getElementById('o1').innerHTML = "Creative Style Sheets"
        document.getElementById('o2').innerHTML = "Cascading Style Sheets"
        document.getElementById('o3').innerHTML = "Computer Style Sheets"
        document.getElementById('o4').innerHTML = "Colorful Style Sheets"
    }
    else if(question ==1){
        document.getElementById('quest').innerHTML = "Which HTML attribute is used to define inline styles?"

        document.getElementById('o1').innerHTML = "Class"
        document.getElementById('o2').innerHTML = "Font"
        document.getElementById('o3').innerHTML = "Styles"
        document.getElementById('o4').innerHTML = "Style"
    }
    else if(question ==2){
        document.getElementById('quest').innerHTML = "Which is the correct CSS syntax?"

        document.getElementById('o1').innerHTML = "body {color: black;}  "
        document.getElementById('o2').innerHTML = "{body;color:black;}"
        document.getElementById('o3').innerHTML = "body:color=black;"
        document.getElementById('o4').innerHTML = "{body:color=black;}"
    }
    else if(question ==3){
        document.getElementById('quest').innerHTML = "How do you insert a comment in a CSS file?"

        document.getElementById('o1').innerHTML = "' this is a comment  "
        document.getElementById('o2').innerHTML = "// this is a comment"
        document.getElementById('o3').innerHTML = "/* this is a comment */  "
        document.getElementById('o4').innerHTML = "// this is a comment //"
    }
    else if(question ==4){
        document.getElementById('quest').innerHTML = "Which CSS property controls the text size?"

        document.getElementById('o1').innerHTML = "text-style"
        document.getElementById('o2').innerHTML = "font-size"
        document.getElementById('o3').innerHTML = "font-style"
        document.getElementById('o4').innerHTML = "text-size"
    }
    else if(question ==5){
        document.getElementById('quest').innerHTML = "How do you display hyperlinks without an underline?"

        document.getElementById('o1').innerHTML = "a {decoration:no-underline;}"
        document.getElementById('o2').innerHTML = "a {text-decoration:none;}"
        document.getElementById('o3').innerHTML = "a {text-decoration:no-underline;}"
        document.getElementById('o4').innerHTML = "a {underline:none;}"
    }
    else if(question ==6){
        document.getElementById('quest').innerHTML = "How do you make each word in a text start with a capital letter?"

        document.getElementById('o1').innerHTML = "text-transform:capitalize  "
        document.getElementById('o2').innerHTML = "text-style:capitalize"
        document.getElementById('o3').innerHTML = "transform:capitalize"
        document.getElementById('o4').innerHTML = "You can't do that with CSS"
    }
    else if(question ==7){
        document.getElementById('quest').innerHTML = "How do you select an element with id 'demo'?"

        document.getElementById('o1').innerHTML = "demo"
        document.getElementById('o2').innerHTML = "*demo"
        document.getElementById('o3').innerHTML = ".demo"
        document.getElementById('o4').innerHTML = "#demo"
    }
    else if(question ==8){
        document.getElementById('quest').innerHTML = "How do you select elements with class name 'test'?"

        document.getElementById('o1').innerHTML = "#test"
        document.getElementById('o2').innerHTML = ".test"
        document.getElementById('o3').innerHTML = "*test"
        document.getElementById('o4').innerHTML = "test"
    }
    else if(question ==9){
        document.getElementById('quest').innerHTML = "What is the default value of the position property?"

        document.getElementById('o1').innerHTML = "fixed"
        document.getElementById('o2').innerHTML = "relative"
        document.getElementById('o3').innerHTML = "absolute"
        document.getElementById('o4').innerHTML = "static"
    }
    
}