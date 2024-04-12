import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchGPT4Response } from '../../backend/services/openAIService'; 

export default async function submit(req: NextApiRequest, res: NextApiResponse) {
  const { question, extractedText } = req.body;

  try {
    const answer = await fetchGPT4Response(question, extractedText);
    res.status(200).json({ answer });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error processing request:', error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error('Error processing request:', error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
}