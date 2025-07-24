let buttons = document.querySelectorAll(".drum");

buttons.forEach((button) => {
  button.textContent = button.classList[0]; // show letter
  button.addEventListener("click", function () {
    let buttonInnerHTML = this.textContent;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    animateDancers();
    createFloatingNote();
  });
});

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  animateDancers();
  createFloatingNote();
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.warn("Unrecognized key: " + key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

function animateDancers() {
  const leftDancer = document.querySelector(".dancer-left");
  const rightDancer = document.querySelector(".dancer-right");

  leftDancer.classList.add("animate");
  rightDancer.classList.add("animate");

  setTimeout(() => {
    leftDancer.classList.remove("animate");
    rightDancer.classList.remove("animate");
  }, 600);
}

function createFloatingNote() {
  const note = document.createElement("span");
  note.classList.add("music-note");
  note.textContent = Math.random() > 0.5 ? "🎵" : "🎶";

  note.style.left = Math.random() * 90 + "vw";
  document.body.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 3000);
}
