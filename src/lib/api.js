import axios from 'axios';

const BaseUrl = 'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet';

export async function getTweets() {
  const response = await axios.get(`${BaseUrl}`);
  return response.data.tweets;
}

export async function createTweet(item) {
  try {
    const response = await axios.post(`${BaseUrl}`, item);
    return response.data;
  } catch (error) {
    const errorMessage = `Oops! Something went wrong. ${JSON.stringify(error.response.text)}`;
    return String(errorMessage);
  }
}
