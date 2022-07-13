var MusicLister= document.querySelectorAll(".Music").length;

for(var i=0; i<MusicLister;i++){
  document.querySelectorAll(".Music")[i].addEventListener("click", function(){

    this.style.color="black";

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

    document.addEventListener("keypress", function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
    });

    function makeSound(key){
      switch(key){
        case "a":
          var first = new Audio("music/Guitar1.wav");
          first.play();
          break;
  
        case "b" :
          var second = new Audio("music/piano1.wav");
          second.play();
          break;
  
        case "c":
          var third= new Audio("music/drum.wav");
          third.play();
          break;
  
        case "d":
          var fouth = new Audio("music/violin.mp3");
          fouth.play();
          break;
        
        case "e":
          var fifty = new Audio("music/Sitar1.mp3");
          fifty.play();
          break;
  
        case "f":
          var sixth = new Audio("music/flute.wav");
          sixth.play();
          break;
  
        case "g":
          var seventh = new Audio("music/drum3.wav");
          seventh.play();
          break;
  
          default: console.log(buttonInnerHTML);
      }
   };
    
  function buttonAnimation(currentKey){
    var activebutton = document.querySelector("."+ currentKey);

    activebutton.classList.add("pressed");

    setTimeout(function(){
      activebutton.classList.remove("pressed");
    }, 100);
  }
