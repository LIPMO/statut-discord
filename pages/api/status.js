import { updateStatus } from "../../utils/discord";

export default async function handler(req, res) {
  const { accessToken, status } = req.body;

  try {
    const result = await updateStatus(accessToken, status);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update status" });
  }
}
