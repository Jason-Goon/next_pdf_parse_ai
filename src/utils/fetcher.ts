// Define async function fetcher accepting URL
// Use fetch API to retrieve data
// Return JSON-parsed response
async function fetcher(url: string): Promise<any> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
