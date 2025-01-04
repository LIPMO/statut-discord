import { getDiscordToken, getUserDetails } from "../../utils/discord";

export default async function handler(req, res) {
  const { code } = req.query;

  try {
    const tokenData = await getDiscordToken(code);
    const userDetails = await getUserDetails(tokenData.access_token);

    res.status(200).json({
      tokenData,
      userDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Authentication failed" });
  }
}
