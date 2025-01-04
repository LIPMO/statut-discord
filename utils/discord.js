import axios from "axios";

const DISCORD_API = "https://discord.com/api";

export async function getDiscordToken(code) {
  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.REDIRECT_URI,
  });

  const response = await axios.post(`${DISCORD_API}/oauth2/token`, params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  return response.data;
}

export async function getUserDetails(accessToken) {
  const response = await axios.get(`${DISCORD_API}/users/@me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

export async function updateStatus(accessToken, status) {
  const response = await axios.patch(
    `${DISCORD_API}/users/@me/settings`,
    { custom_status: { text: status } },
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return response.data;
}
