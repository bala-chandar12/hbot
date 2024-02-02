// Code from the second JavaScript file

function textToSpeech() {
    console.log("textToSpeech function called."); // Log to check if the function is being called.

    // Get the text from the textarea
   // const textInput = document.getElementById('textInput');
    const text ="hi i am bala";

    console.log("Text to be spoken:", text); // Log the text to be spoken.

    // Create a new SpeechSynthesisUtterance object with the provided text
    const utterance = new SpeechSynthesisUtterance(text);

    // Use the speech synthesis API to speak the text
    speechSynthesis.speak(utterance);

    utterance.onend = function() {
        console.log("Speech playback completed."); // Log when speech playback is completed.
    };

    utterance.onerror = function(event) {
        console.error("Speech synthesis error:", event.error); // Log any errors during speech synthesis.
    };
}
