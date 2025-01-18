import { test, expect, request } from "@playwright/test";
import { setup } from "./test.setup.js";

test.skip(process.env.CI === 'true', 'Skipped in CI environment');

test.describe("JIRA API Testing", () => {
  const jiraToken = process.env.JIRA_API_KEY;
  const userName = process.env.JIRA_USERNAME;
  const baseURL = process.env.BASE_URL;
  test.skip("Verify announcementBanner API Response Status", async ({ request }) => {
    // Use the token in your API request headers
    const response = await request.get(
      `${baseURL}rest/api/3/announcementBanner`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${userName}:${jiraToken}`
          ).toString("base64")}`,
          Accept: "application/json",
        },
      }
    );
    console.log(await response.json());
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
  });
  test.skip("Verify announcementBanner API Response data", async ({ request }) => {
    // Use the token in your API request headers
    const response = await request.get(
      `${baseURL}rest/api/3/announcementBanner`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${userName}:${jiraToken}`
          ).toString("base64")}`,
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    expect(await data.message).toContain(
      "This is a public, enabled, non-dismissible banner, set using the API"
    );
  });
  test.skip("Verify response data format for announcementBanner",async({request})=>{
    const response = await request.get(
      `${baseURL}rest/api/3/announcementBanner`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${userName}:${jiraToken}`
          ).toString("base64")}`,
          Accept: "application/json",
        },
      })
    expect(response.headers()['content-type']).toContain("application/json")
  })
  test.skip("Verify visibility data",async({request})=>{
    const response = await request.get(
      `${baseURL}rest/api/3/announcementBanner`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${userName}:${jiraToken}`
          ).toString("base64")}`,
          Accept: "application/json",
        },
      })
      const data=await response.json();
      expect(await data.visibility).toContain("private")
    })
});
