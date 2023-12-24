/** @format */
function generateWod(event) {
  event.preventDefault();

  new Typewriter("#wod", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let wodFormElement = document.querySelector("#wod-generator-form");
wodFormElement.addEventListener("submit", generateWod);
