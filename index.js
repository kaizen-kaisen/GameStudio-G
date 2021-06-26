for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
    move(buttonInnerHTML);
  });
}

function makesound(key) {

  switch (key) {
    case "Simon":
      var tom1 = new Audio('sounds/Simon.mp3');
      tom1.play();
      break;
    case "funDrum":
      var tom2 = new Audio('sounds/funDrum.mp3');
      tom2.play();
      break;
    case "DiceMe":
      var tom3 = new Audio('sounds/DiceMe.mp3');
      tom3.play();
      break;
    default:
      console.log(key);
  }
}

function addAnimation(buttonPressed) {
  var activeButton = document.querySelector("." + buttonPressed);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


function move(key) {

  switch (key) {
    case "Simon":
      setTimeout(function() {
        window.location = 'https://kaizen-kaisen.github.io/Simon_Game/';
      }, 1800);

      break;
    case "funDrum":
    setTimeout(function() {
      window.location = 'https://kaizen-kaisen.github.io/funDrum/';
    }, 1800);

      break;
    case "DiceMe":
    setTimeout(function() {
      window.location = 'https://kaizen-kaisen.github.io/DiceMe-/';
    }, 1000);

      break;
    default:
      console.log(key);
  }
}
