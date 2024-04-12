import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path'; // For safely handling file paths
import formidable, { File } from 'formidable';
import extractTextFromPDF from '../../src/utils/extractPdf';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  (form as any).uploadDir = path.join(process.cwd(), 'tmp');
  (form as any).keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({ error: 'Error parsing the file.' });
    }

    const file = files.file as formidable.File;

    if (!file) {
      return res.status(400).json({ error: 'No file found in the upload request.' });
    }

    console.log(file);
    console.log(`File uploaded at: ${(file as any)._writeStream.path}`);

    const textContent = await extractTextFromPDF((file as any)._writeStream.path);

    // Optionally delete file after processing
    fs.unlinkSync((file as any)._writeStream.path);

    res.status(200).json({ text: textContent });
  });
}