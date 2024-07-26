let inp = document.querySelector('#quate')

function display(){
    let num = Math.random()
    inp.innerText=num
    if(num<0.1){
     inp.innerText='"your life is to hevy to carry on"'
    }
    else if (num>0.1 && num<0.2){
     inp.innerText='"you canot see with your eyes"'

    } else if (num>0.2 && num<0.3){
        inp.innerText='"a problem written down a problem half solve"'
   
       } else if (num>0.3 && num<0.4){
        inp.innerText='"the logic not lies in your brain but in your hand"'
   
       } else if (num>0.4 && num<0.5){
        inp.innerText='"what you see is not what you hear"'
   
       } else if (num>0.5 && num<0.6){
        inp.innerText='"every master was once a fool every fool things a master"'
   
       } else if (num>0.7 && num<0.8){
        inp.innerText='"a blind person see is more than you"'
   
       } else if (num>0.8 && num<0.9){
        inp.innerText='"life is not fear "'
   
       } else if (num>0.9 && num<0.10){
        inp.innerText='"life is not about hitting hard"'
   
       }
       else{
        inp.innerText='"life is about how hard you can be hitted"'

       }
}