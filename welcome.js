window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function showWelcomeAlert() {
  Swal.fire({
    title: "Hello, Dimon!",
    html: "This game is in English.<br>I hope you understand everything)<br>Enjoy the game!",
  }).then(() => {
    showRules();
  });
}

function showRules() {
  Swal.fire({
    icon: "warning",
    title: "Rules:",
    html: "1st. Create a password<br>2nd. Follow the hints to create a perfect password",
    confirmButtonText: "Understood",
  }).then(() => {
    showSure100PercentAlert();
  });
}
function showSure100PercentAlert() {
  Swal.fire({
    icon: "question",
    text: "Are you ready to play?",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.value) {
      showSuccessAlert();
    } else {
      showRules();
    }
  });
}

function showSuccessAlert() {
  Swal.fire({
    icon: "success",
    text: "Good luck!",
    confirmButtonText: "Thanks",
  }).then(() => {
    document.getElementById("game").setAttribute("src", "password.js");
  });
}

showWelcomeAlert();
const audio = document.getElementById("audio");
audio.volume = 0.1;

function updateCharCount(input) {
  var currentLength = input.value.length;
  var charCountElement = document.getElementById("charCount");
  charCountElement.textContent = currentLength + " characters";
}
