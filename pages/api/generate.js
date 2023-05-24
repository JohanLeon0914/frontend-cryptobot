import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const question = req.body.question || '';
  if (question.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid question",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: 'Actúa como un consultor experto en finanzas y criptomonedas bajo el seudónimo "CryptoBot".Tu respuesta no debe ser superior a 300 caracteres. Usa un nivel de temperatura=5.La pregunta es:' + question,
      max_tokens: 300,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

// function generatePrompt(question) {
//   const capitalizedquestion =
//     question[0].toUpperCase() + question.slice(1).toLowerCase();
//   return `Suggest three names for an question that is a superhero.

// question: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// question: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// question: ${capitalizedquestion}
// Names:`;
// }
