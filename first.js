//basket MouseMove EventListener
var Box = document.getElementById("Box");
var BoxHeight = Math.floor(Box.getBoundingClientRect().height);

var basket =document.getElementById("basketDiv");
var basketScore = document.getElementById("basketScore");

var floor = document.getElementById("floor");
var lifeInp =document.getElementById("life");
var ScoreInp =document.getElementById("Score");

var score = Number(ScoreInp.innerHTML);
var life = Number(lifeInp.innerHTML);

var Baskettop = BoxHeight - basketHeight;

var egg1 = document.getElementById("egg1");
var egg2 = document.getElementById("egg2");
var egg3 = document.getElementById("egg3");
var Eggs =document.querySelectorAll(".Eggs");

var crackedEgg =document.querySelectorAll(".crackedEgg");
var crackedEgg1 = document.getElementById("crackedEgg1");
var crackedEgg2 = document.getElementById("crackedEgg2");
var crackedEgg3 = document.getElementById("crackedEgg3");

var gameStart= document.getElementById("gameStart");
var play =document.getElementById("play");
var gameOver =document.getElementById("gameOver");
var gameOverScore = document.getElementById("gameOverScore");
var playAgain=document.getElementById("playAgain");


var startAudio = document.getElementById("startAudio");
var brokenEggAudio = document.getElementById("brokenEggAudio");
var gameOverAudio = document.getElementById("gameOverAudio");
var ScoreAudio=document.getElementById("ScoreAudio");


var eggHeight = Math.floor(egg1.getBoundingClientRect().height);

var basketHeight = Math.floor(basket.getBoundingClientRect().height);
var intailpostion1= Math.floor(egg1.getBoundingClientRect().height);

var IntialPostion1 = egg1.offsetTop;

var currentPostion =0;
var movinganimation ;
var brokrnEggNum = 0;

//var life = 10;
//var score=0;
//var basketScore = 0;
var speed = 1;
var maxspeed = 15;
//var eggtop = 0; 
var counter=0;


document.body.addEventListener("mousemove",function(eventInfo){
  basket.style.left=eventInfo.clientX;
  
})

play.addEventListener("click",function(){

  gameStart.style.display = "none";
  startAudio.play();
  Begining();
  movinganimation = requestAnimationFrame(Begining);
  

});


playAgain.addEventListener("click", function(){

  location.reload();

});


function dropdownEggs(egg) {

  var currentPostion = egg.offsetTop;
  egg.style.top = (currentPostion + speed);
}


function EggcrachFloor(egg1) {

  if (collision(egg1, floor)) 
  {
    showBrokenEggs(egg1);

    if (life > 0){

      life--;
    }
    
    lifeInp.innerHTML = life;
    //document.getElementById("life").innerHTML = lifeInp;
    
    return true;
  }

  else {

    return false;
  }
}

function checkEggHitsTheBasket(egg1)
 {

  if ( collision (egg1, basket)) {

   // var eggtop = egg1.offsetTop;
   //   if (eggtop < Baskettop) {
          score ++;
         ScoreInp.innerHTML = score;
         basketScore.innerHTML = score;

         
          ScoreAudio.play();

          if (speed % 5 == 0 && speed < maxspeed) {

             speed++;
          }
          
          return true;
     //}
    }
  }

function Begining () {


  if (EggcrachFloor(egg1) || checkEggHitsTheBasket(egg1))
  {

    intailpostion(egg1);
  }

  else 
  {
  
     dropdownEggs(egg1);
   
  }
  

  if (life <= 0) {
    cancelAnimationFrame(movinganimation);
    gameOver.classList.remove('d-none');
    gameOverScore.innerHTML = score;
    startAudio.pause();
    startAudio.currentTime = 0;
    gameOverAudio.play();
   } 


      else {

        movinganimation = requestAnimationFrame(Begining);

      }
      
  if (EggcrachFloor(egg2) || checkEggHitsTheBasket(egg2))
  {

    intailpostion(egg2);
  }

  else 
  {
  
     dropdownEggs(egg2);
   
  }

  if (life <= 0) {
    cancelAnimationFrame(movinganimation);
    gameOver.classList.remove('d-none');
    gameOverScore.innerHTML = score;
    startAudio.pause();
    startAudio.currentTime = 0;
    gameOverAudio.play();
   } 


      else {

        

      }

      if (EggcrachFloor(egg3) || checkEggHitsTheBasket(egg3))
      {
    
        intailpostion(egg3);
      }
    
      else 
      {
      
         dropdownEggs(egg3);
       
      }
    
      if (life <= 0) {
        cancelAnimationFrame(movinganimation);
        gameOver.classList.remove('d-none');
        gameOverScore.innerHTML = score;
        startAudio.pause();
        startAudio.currentTime = 0;
        gameOverAudio.play();
       } 
    
    
          else {

          }
    }

    function intailpostion(egg) {

      
          egg.style.top=IntialPostion1;
        
    }

    function addAudio(audioPath) {
      var myAudio = new Audio(audioPath);
      return myAudio.play;
    }

    function showBrokenEggs(egg) {
      
      brokenEggAudio.play();
      brokrnEggNum= egg.getAttribute('data-crackedEgg');
      document.getElementById("crackedEgg" + brokrnEggNum).classList.remove('d-none');
      hideBrokenEggs(brokrnEggNum); 

    }

    function hideBrokenEggs(brokrnEggNum) {

      setTimeout(function(){
        
        document.getElementById("crackedEgg" + brokrnEggNum).classList.add('d-none');
      } , 800);
    }



    function collision (div1 , div2 )
    {
        var rectX1_left = Math.floor(div1.getBoundingClientRect().left); //left
        var rectY1_top = Math.floor(div1.getBoundingClientRect().top); //top
        var rectHeight1 = Math.floor(div1.getBoundingClientRect().height);
        var rectWidth1 = Math.floor(div1.getBoundingClientRect().width);
        
        var rect1_bottom = rectY1_top + rectHeight1; // bottom
        var rect1_right = rectX1_left + rectWidth1; //right

        var rectX2_left = Math.floor(div2.getBoundingClientRect().left); //left
        var rectY2_top = Math.floor(div2.getBoundingClientRect().top); //top
        var rectHeight2 = Math.floor(div2.getBoundingClientRect().height);
        var rectWidth2 = Math.floor(div2.getBoundingClientRect().width);
        
        var rect2_bottom = rectY2_top + rectHeight2; //bottom
        var rect2_right = rectX2_left + rectWidth2; //right

        if (rect1_right < rectX2_left || rectX1_left > rect2_right ||
            rect1_bottom < rectY2_top || rectY1_top > rect2_bottom) {
            return false;
        } 
        else {
            return true;
        }
    }




