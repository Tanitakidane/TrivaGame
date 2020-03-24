   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'What is the name of the main character on Dragonball Z?', options:['Goku','Tommy Pickle','Daffy Duck','Arnold'],answer:1},

                          {q:'What planet are Goku and Vegeta from?',options:['Earth','Cripton','Vegeta','Namek'],answer:3},

                          {q:'What item is used to restore a wounded Z fighter to full health??',options:['Senzu bean','Saiyan hair','Z Sword','Capsule Corp medicine'],answer:1},

                          {q:'What is the highest Super Saiyan level attained by Vegeta in DBZ?',options:['Super Saiyan 1','Super Saiyan 2','Super Saiyan 3','Super Saiyan 4'],answer:2},

                          {q:'Who is not related to goku?',options:['Gohan','Goten','Trunks','Chi-Chi'],answer:3},

                          {q:'What is Goku wifes name?',options:['Bulma','18','Pan','Chi-Chi'],answer:4},

                          {q:'Who does Captain Ginyu serve??',options:['Gohan','Frezia','Cooler','Krillin'],answer:2},

                          {q:'Where did Goku first turn Super Sayin?',options:['Earth','Mars','Namek','King Kai Planet'],answer:3},

                          {q:'What is the name of Gohans wife?',options:['Videl','Pan','Hillary','Michelle'],answer:1},

                          {q:'What color is a Super Sayins Hair?',options:['Red','Black','Orange','Blonde'],answer:4},
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="GAME OVER!!!!!!!!!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



