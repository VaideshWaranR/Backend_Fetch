require('dotenv').config()
const axios=require('axios')
async function fetchNews() {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'in',
        category: 'technology',
        apiKey:process.env.API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}
async function fetchAndReturnJson() {
  try {
    const newsData = await fetchNews();
    return JSON.stringify(newsData);
  } catch (error) {
    console.error('Error fetching and returning JSON:', error);
    return JSON.stringify({ error: 'Failed to fetch news' });
  }
}
fetchAndReturnJson().then(json => {
  console.log('Returned JSON:', json);
}).catch(error => {
  console.error('Error in example usage:', error);
});