const startButton = document.getElementById('startRecording');
const stopButton = document.getElementById('stopRecording');
const outputElement = document.getElementById('output');
const {run}=require("./chatgemini")
let recognition;
var res;

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;

    recognition.onstart = () => {
        outputElement.textContent = 'Recording...';
        startButton.disabled = true;
        stopButton.disabled = false;
    };

    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        // text=await run(transcript);
``

        outputElement.textContent = transcript;
        res+=transcript;

    };

    recognition.onerror = (event) => {
        outputElement.textContent = 'Error occurred: ' + event.error;
        stopRecording();
    };

    recognition.onend = () => {
        outputElement.textContent = 'Recording stopped.';
        startButton.disabled = false;
        stopButton.disabled = true;
    };

    startButton.addEventListener('click', startRecording);
    stopButton.addEventListener('click', stopRecording);
} else {
    outputElement.textContent = 'Speech recognition not supported on this browser.';
}

function startRecording() {
    recognition.start();
    console.log("starting to record");

}

function stopRecording() {
    recognition.stop();
    console.log(res);
}
