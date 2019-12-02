let start=document.getElementById('startBtn');
let main=document.querySelector('.main-input');
let lines=document.querySelectorAll('.line');

let score=0;
let result=document.querySelector('.displayresult');
let tekst=[];
let send;
let div;
let audio=new Audio('GameOver.mp3');
let restart=document.createElement("img");
restart.setAttribute("src","https://icon-library.net/images/restart-icon/restart-icon-16.jpg");
restart.setAttribute("class","restart");
restart.setAttribute("onclick","reload()");
div=document.createElement("div");
div.setAttribute("id","gameover");
div.innerHTML="GAME OVER";
function sav(){
    let inp=main.value;
    
    let a;
    let temp;
    if(tekst.includes(inp)){
        a=document.querySelectorAll('span');
        
        brisi();
       function brisi(){
           
           
            for(var i=0; i<a.length;i++){
                 temp=a[i].textContent;
                
                 
                 if(temp==inp){
                    a[i].style.background="blue";
                    fadeOut(a[i]);
                    let index=tekst.indexOf(inp);
                   send=tekst[index];
                 
                 
                    tekst.splice(index,1);
                  
                    score++;
                    result.innerHTML=score;
            }
            }
        }
        main.value="";
    }
    
    
}  


function fadeOut(e){
    
   
    let fadeeffect=setInterval(function(){
        if(!e.style.opacity){
            e.style.opacity=1;
        }else if(e.style.opacity){
            e.style.opacity-=0.1;
        }else{
            clearInterval(fadeeffect);
        }
    },10);
}
function startGame(){
  
main.focus();
start.classList.add('hidden');
let speed=1;

let textLength=3;
let kraj=true;
let tekst2=[];
let typingWords=words.filter(function(element){
if(element.length==textLength){
    return element;
}
});

let node=[];
let lvl=6;
let speedUP=setInterval(function () {
    textLength++;
     typingWords=words.filter(function(element){
        if(element.length==textLength){
            return element;
        }
        });
},20000);





function insertSpans(){
    let br=0;
for(var i=0; i<lines.length;i++){
    let rand=Math.floor(Math.random()*20);
  
    
    if(rand<=lvl){
        let text=izaberiText();
         node[br] = document.createElement('span');
         
        node[br].innerHTML=text;
        tekst.push(text);
        tekst2.push(text);
    
        lines[i].appendChild(node[br]); 
        br++;
        
      
        
    }
}



if(kraj==true){
setTimeout(insertSpans,5000);
}
}
insertSpans();


function izaberiText(){
    let rand=Math.floor(Math.random()*typingWords.length);
    let save=typingWords[rand];
   
    
    typingWords.splice(rand,1);
    return save;

}



let move=setInterval(function(){
    let spans=[];
   
     spans=document.querySelectorAll('span');

   
        
for(var i=0;i<spans.length;i++){
    
    
    const t = getComputedStyle(spans[i]); //uzima style cijeli iz css
    let left=t.left; //uzima property left  iz css
    let k=parseInt(left);
  
    k=k+speed;
        spans[i].style.left="+"+k+"px";
        
        
        
    
        
    }
    
  
    
    
   let k=0;
 do{
    if(send==spans[k].textContent){
       
        
        
        spans[k].textContent="0";
     
        
        
        
    }
    k++;
 }while(k!=spans.length);
    

 
 for(var i=0;i<spans.length;i++){
    let a;  
   
   
    let p;
    p=spans[i].style.left;
    a=parseInt(p,10);
    
    
    if(spans[i].textContent=="0"){
        
    }else{
        
        
    
    if(a>=850){
       clear(); 
       kraj=false;
        
    }else if(a>700 && a<705){
        spans[i].classList.add('danger');
    }

    
   
    
}}
    
},20);

function clear(){
    
    clearInterval(move);
   
   document.body.appendChild(div);
   document.body.appendChild(restart);
   kont=document.querySelector(".container");
   kont.style.background="red";
   
    audio.play();
}

}

function reload(){
    location.reload();
}
  
    
