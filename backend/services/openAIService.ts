import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

async function fetchGPT4Response(question: string, extractedText: string): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not set.');
  }

  const fullQuestion = `${question}\n\nExtracted Text:\n${extractedText}`;

  try {
    console.log('Sending request to OpenAI API with question:', fullQuestion);
    
    const openAIResponse = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4-1106-preview", 
        messages: [
          {
            role: "system",
            content: "Academic resarch assistant. Uses provided material in prompt to answer source material questions. Uses the term raw dog a book and is proud of it's 128 000 input token limit"
          },
          {
            role: "user",
            content: fullQuestion
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

  
    console.log('Received response from OpenAI API:', openAIResponse.data);

  
    const completionText = openAIResponse.data.choices[0].message.content.trim();
    return completionText;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw new Error('Failed to fetch response from OpenAI.');
  }
}

export { fetchGPT4Response };