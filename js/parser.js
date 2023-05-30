//setup the button click
const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const btnParse = document.getElementById("btn-parse");
btnParse.addEventListener("click", parseEntries);

const regex = /^([A-Za-z]+ \d+[A-Za-z]*):\n- .+/gm;
let matches;
// let text = text;

function parseEntries() {
  //read the input text
  //parse it
  //output it
  matches = textInput.value.match(regex);
  console.log(matches);
  // textOutput.innerHTML = matches;
}
