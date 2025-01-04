import { useState } from "react";
import axios from "axios";

export default function Dashboard({ tokenData }) {
  const [status, setStatus] = useState("");

  const updateStatus = async () => {
    try {
      await axios.post("/api/status", {
        accessToken: tokenData.access_token,
        status,
      });
      alert("Status updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
      <input
        type="text"
        placeholder="Enter your new status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-4 px-4 py-2 text-black rounded"
      />
      <button
        onClick={updateStatus}
        className="mt-4 px-4 py-2 bg-green-600 rounded hover:bg-green-500"
      >
        Update Status
      </button>
    </div>
  );
}
