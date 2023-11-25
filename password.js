function validate() {
  const password = document.getElementById("password").value;

  if (password.trim() === "") {
    document.getElementById("rule").innerHTML = "";
    return false;
  }

  const englishLetterAndNumberRegex =
    /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/;

  if (!englishLetterAndNumberRegex.test(password)) {
    document.getElementById("rule").innerHTML = "Use the English alphabet!";
    return false;
  }

  if (password.length < 8) {
    document.getElementById("rule").innerHTML =
      "Your password must contain at least 8 characters!";
    return false;
  }

  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  if (!specialCharRegex.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain at least 1 special character!";
    return false;
  }

  const numberRegex = /\d/;
  if (!numberRegex.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain at least 1 number!";
    return false;
  }

  const masturbation = /masturbate|masturbation/i;
  if (!masturbation.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the thing that you do every night!";
    return false;
  }

  const happiness = /porn/i;
  if (!happiness.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the thing that makes you happy!";
    return false;
  }

  const math = 9;
  if (!password.includes(math.toString())) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the answer to this math problem: 6:2(1+3)=";
    return false;
  }
  const id = 11;

  if (!password.includes(id.toString())) {
    const imgContainer = document.getElementById("image-container");

    if (!imgContainer.querySelector("img")) {
      const img = document.createElement("img");
      img.src = "photo_2023-11-25_15-45-48.jpg";

      document.getElementById("rule").innerHTML =
        "Your password must contain the last and first digits of your student ID!";

      imgContainer.appendChild(img);
    }

    return false;
  }

  const imgContainer = document.getElementById("image-container");
  const existingImg = imgContainer.querySelector("img");
  if (existingImg) {
    imgContainer.removeChild(existingImg);
  }

  const anime = /akira/i;
  if (!anime.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the name of the iconic 1988 Japanese animated film, directed by Katsuhiro Otomo, that features a dystopian cyberpunk world and is often considered a landmark in the anime genre!";
    return false;
  }

  const breakingBadCharacter =
    /walterwhite|jessepinkman|skylerwhite|hankschrader|saulgoodman|gusfring/i;
  if (!breakingBadCharacter.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the name of a Breaking Bad character!";
    return false;
  }

  const game = /BLASPHEMOUS/i;
  if (!game.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the name of the game that is currently shown in the background!";
    return false;
  }

  const marvelHero = /silversurfer|silver-surfer/i;
  if (!marvelHero.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the name of your favorite superhero!";
    return false;
  }

  const animeStudio = /ghibli|madhouse|kyotoanimation|toei/i;
  if (!animeStudio.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the name of a famous anime studio!";
    return false;
  }

  const mythicalCreatures =
    /dragon|phoenix|unicorn|griffin|kraken|centaur|banshee|minotaur|siren|pegasus|cyclops|basilisk|manticore/i;
  if (!mythicalCreatures.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the name of a mythical creature!";
    return false;
  }

  const breakingBadQuote =
    /saymyname|iamthedanger|treadlightly|yeahscience|breakingbad/i;
  if (!breakingBadQuote.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain a famous Breaking Bad quote!";
    return false;
  }

  const viceversa = /nomid|amid|ortymd|yirtimd/i;
  if (!viceversa.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain your first name backwards!";
    return false;
  }

  const mathProblem = 12;
  if (!password.includes(mathProblem.toString())) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the square root of 144!";
    return false;
  }

  const gameReleaseYear = 2019;
  if (!password.includes(gameReleaseYear.toString())) {
    document.getElementById("rule").innerHTML =
      "Your password must contain the release year of the game shown in the background!";
    return false;
  }

  const breakingBadElement = /carbon|hydrogen|nitrogen|oxygen|methamphetamine/i;
  if (!breakingBadElement.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain an element related to Breaking Bad!";
    return false;
  }

  const viceVersa = /dims/i;
  if (!viceVersa.test(password)) {
    document.getElementById("rule").innerHTML =
      "Your password must contain your first name with 'a' replaced by 's'!";
    return false;
  }

  const oppie = /juliusrobertoppenheimer/i;

  if (!oppie.test(password)) {
    const imgContainer1 = document.getElementById("image-container");

    if (!imgContainer1.querySelector("img")) {
      const img1 = document.createElement("img");
      img1.src = "image.png";

      document.getElementById("rule").innerHTML =
        "Your password must contain the full name of the guy on this photo!";

      imgContainer1.appendChild(img1);
    }

    return false;
  }

  const imgContainer1 = document.getElementById("image-container");
  const existingImg1 = imgContainer1.querySelector("img");
  if (existingImg1) {
    imgContainer1.removeChild(existingImg1);
  }

  const characterLimit = 104;
  if (password.length > characterLimit) {
    document.getElementById("rule").innerHTML =
      "You exceeded the character limit in your password!";
    setTimeout(() => {
      document.getElementById("rule").innerHTML =
        "Just kidding! In fact, you won the game! \n Enjoy your prize)";
      showPrizeImage();
    }, 4000);
    return false;
  }

  document.getElementById("rule").innerHTML = "";
  return true;
}

function showPrizeImage() {
  const imgContainer = document.getElementById("image-container");

  if (!imgContainer.querySelector("img")) {
    const img = document.createElement("img");
    img.src = "prize.png";
    img.classList.add("prize-image");

    imgContainer.appendChild(img);

    setTimeout(() => {
      img.style.opacity = 1;
    }, 1000);
  }
}

const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", function () {
  validate();
});

validate();
