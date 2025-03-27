let buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {

   //when press on the butten 
   buttons[i].addEventListener('click', () => {

      //save current butten
      let currentLetter = buttons[i].innerHTML;
      //אירוע סאונד בלחיצה
      makeSound(currentLetter);
      //אירוע שקיפות בלחיצה
      buttonAnimation(currentLetter);
   });
   
};



//צליל בהתאם לכפתור/מקש שנלחץ
function makeSound(currentLetter) {

   currentLetter = currentLetter.toLowerCase();

   switch (currentLetter) {
      case "w":
       //שמירת הסאונד לכפתור הספציפי והפעלתו
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
 
      case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
 
 
      case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
 
 
      case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
 
      case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
 
      case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
       kick.play();
      break;
 
      case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
 
 
      default: console.log(currentLetter);
   }
}


// כשלוחצים על מקש  במקלדת שיעשה צליל
document.addEventListener("keydown", (event) =>{
   makeSound(event.key);
   buttonAnimation(event.key);
});


//כשלוחצים על הכפתור שיעשה שקיפות
function buttonAnimation(currentKey) {

   let activeButton = document.querySelector("." + currentKey);
 
   activeButton.classList.add("pressed");
 
   setTimeout(function() {
     activeButton.classList.remove("pressed");
   }, 100);
 
}

