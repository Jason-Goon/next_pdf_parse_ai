import React, { useState, ChangeEvent, FormEvent } from 'react';

const AIForm: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [extractedText, setExtractedText] = useState<string>(''); // State for storing extracted text
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log('File selected:', e.target.files[0].name);
      setFile(e.target.files[0]);
    } else {
      console.log('No file selected.');
      setFile(null);
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      console.log('Upload attempted without a file.');
      setUploadStatus('No file selected to upload.');
      return;
    }
    console.log('Uploading file:', file.name);
    const formData = new FormData();
    formData.append('file', file, file.name);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        // Handle bad response
        const errorData = await response.json();
        console.error('Upload failed:', errorData.error);
        setUploadStatus(`Upload Error: ${errorData.error}`);
        return;
      }
      // Handle successful upload
      const data = await response.json();
      console.log('Upload successful:', data);
      setUploadStatus('File uploaded successfully.');
      setExtractedText(data.text); 
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('There was an error uploading the file. Please try again.');
    }
  };

  // Handle question submission
  const handleQuestionSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting question:', question);
    setAnswer("Processing your question...");

    const body = JSON.stringify({ question, extractedText }); 

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Question submission failed:', errorData.error);
        setAnswer(`Error: ${errorData.error}`);
        return;
      }
      const data = await response.json();
      console.log('Question submitted successfully:', data.answer);
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error submitting question:', error);
      setAnswer('There was an error processing your question. Please try again.');
    }
  };

  return (
    <div className="flex h-full mb-8">
      <form onSubmit={handleQuestionSubmit} className="p-4 space-y-4 border border-black rounded-lg bg-white text-black overflow-y-auto mb-4 flex-grow">
        <div className="flex flex-col mb-4">
          <label htmlFor="question" className="mb-2 font-bold text-lg text-black">Question:</label>
          <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} className="border border-black rounded-lg py-2 px-3 text-black h-32" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="file" className="mb-2 font-bold text-lg text-black">File:</label>
          <input id="file" type="file" onChange={handleFileChange} className="border border-black rounded-lg py-2 px-3 text-black" />
          <button type="button" onClick={handleFileUpload} className="mt-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Upload File</button>
          {uploadStatus && <p className="text-sm mt-2">{uploadStatus}</p>}
        </div>
        <button type="submit" className="bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Submit Question</button>
      </form>
      {}
      <div className="p-4 bg-white rounded-lg border border-black text-black overflow-y-auto max-w-[700px] min-w-[700px] ml-4 max-h-[500px]">
        <h3 className="font-bold text-lg mb-4">Answer:</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
  
};

export default AIForm;