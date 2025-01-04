export default function Home() {
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code&scope=identify`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Discord Status Manager</h1>
      <a
        href={discordAuthUrl}
        className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
      >
        Connect to Discord
      </a>
    </div>
  );
}

