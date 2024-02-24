// app.js

const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv/config');


const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

async function run(question) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
        history: [],
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    const result = await chat.sendMessage(question);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;


    // Display the response in the chat-container
    // const chatContainer = document.getElementById('chat-container');
    // const responseDiv = document.createElement('div');
    // responseDiv.textContent = `User: ${question}\nChatbot: ${text}`;
    // chatContainer.appendChild(responseDiv);
}

function askQuestion() {
    const questionInput = document.getElementById('question');
    const question = questionInput.value.trim();

    if (question !== '') {
        run(question);
        questionInput.value = ''; // Clear the input field
    }
}
run("what is capital of india")