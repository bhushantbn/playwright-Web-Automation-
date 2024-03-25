import dotenv from 'dotenv';

dotenv.config({
  path:'./.env'
});

export async function setup() {
  const baseURL = process.env.BASE_URL;
  const username = process.env.JIRA_USERNAME;
  const token = process.env.JIRA_API_KEY;

  // Return the environment variables or create a context object
  return { baseURL, username, token };
}