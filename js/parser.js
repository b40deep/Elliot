//setup the button click
const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const btnParse = document.getElementById("btn-parse");
btnParse.addEventListener("click", parseEntries2);

const regex = /^([A-Za-z]+ \d+[A-Za-z]*):\n- .+/gm;
let matches;
// let text = text;

function parseEntries() {
	//read the input text
	//parse it
	//output it
	matches = textInput.value.match(regex);
	console.log(matches);
	textOutput.innerHTML = matches;

	// for each match (date)
	// parse for each entry
	// isolate it as a single array entry
	// and display them under the date
	matches.forEach((date) => {
		entries = date.match(/^(:\n- .+)/gm);
		console.log(`entries ${entries}`);
	});
}

function parseEntries2() {
	const pattern = /^([^\n:]+):\n((?:- .+\n)*)/gm;

	const matches = [...textInput.value.matchAll(pattern)];

	for (const match of matches) {
		const heading = match[1];
		const listItems = match[2].trim().split("\n- ");
		console.log(`Heading: ${heading}`);
		for (const item of listItems) {
			console.log(`${item}`);
		}
	}
}
