declare module 'pdfjs-dist/es5/build/pdf.js' {
    export function getDocument(data: Uint8Array): { promise: Promise<any> };
  }