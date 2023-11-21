const { OpenAI } = require("openai");
const { generatePrompt } = require("./generatePrompt");

const askGPT = async() => {
	const OPENAI_API_KEY = "<OPEN APIのAPIkey>"
	
	const message = generatePrompt();

	const openai = new OpenAI({
		apiKey: OPENAI_API_KEY
	})

	const completion = await openai.chat.completions.create({
			model: "gpt-4",
			messages: [{ "role": "user", "content": message }],
		});
	console.log(completion.choices[0].message.content);
	return completion.choices[0].message.content
}

// askGPT();

module.exports = {askGPT}