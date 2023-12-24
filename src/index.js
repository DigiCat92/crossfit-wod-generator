/** @format */

function displayWod(response) {
  new Typewriter("#wod", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateWod(event) {
  event.preventDefault();

  let instructions = document.querySelector("#instructions");
  let apiKey = "98b863f53fct5c440f83aado4bf27204";
  let context =
    "You are a crossfit coach expert and love to create WODs for your athletes. Your mission is to generate a 4 line crossfit WOD in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title for the WOD. Sign the WOD with 'Almeirim Box AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a WOD with ${instructions.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let wodElement = document.querySelector("#wod");
  wodElement.classList.remove("hidden");
  wodElement.innerHTML = `<div class="generating">⏳ Generating a WOD with ${instructions.value}</div>`;

  axios.get(apiURL).then(displayWod);
}

let wodFormElement = document.querySelector("#wod-generator-form");
wodFormElement.addEventListener("submit", generateWod);
