window.onload = function() {
	document.getElementById("biggerBtn").onclick = makeBigger;
	document.getElementById("fancyRadio").onchange = makeFancy;
	document.getElementById("boringRadio").onchange = makeBoring;
	document.getElementById("mooBtn").onclick = moo;
};

function makeBigger() {
	let textArea = document.getElementById("userText");
	textArea.style.fontSize = "24pt";
}

function makeFancy() {
	let textArea = document.getElementById("userText");
	if (document.getElementById("fancyRadio").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
        textArea.style.fontStyle = "italic";
	}
}

function makeBoring() {
	let textArea = document.getElementById("userText");
	if (document.getElementById("boringRadio").checked) {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function moo() {
	let textArea = document.getElementById("userText");
	let sentences = textArea.value.split(".");
	for (let i = 0; i < sentences.length; i++) {
		sentences[i] = sentences[i].trim() + "-Moo";
	}
	textArea.value = sentences.join(". ").toUpperCase();
}
