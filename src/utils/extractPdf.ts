import fs from 'fs';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf';

async function extractTextFromPDF(filePath: string): Promise<string> {
  const dataBuffer = new Uint8Array(fs.readFileSync(filePath));

  const pdfDoc = await getDocument(dataBuffer).promise;
  let textContent = '';

  for (let i = 1; i <= pdfDoc.numPages; i++) {
    const page = await pdfDoc.getPage(i);
    const text = await page.getTextContent();
    // Use type assertion to handle expected item structure
    textContent += text.items
      .map((item: any) => 'str' in item ? item.str : '')
      .join(' ');
  }

  return textContent;
}

export default extractTextFromPDF;
