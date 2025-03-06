import React from "react";

const NewsSection = () => {
  const recentGames = [
    {
      player1: "Lightning",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Mountain Range 2024",
      date: "06.03.2025",
    },
    {
      player1: "Lightning",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Mars 2 villages remake with walls",
      date: "06.03.2025",
    },
    {
      player1: "Lightning",
      player2: "PegaSuS22",
      winner: "PegaSuS22",
      map: "Hakerxus-Archer Map",
      date: "06.03.2025",
    },
    {
      player1: "Lightning",
      player2: "PegaSuS22",
      winner: "PegaSuS22",
      map: "Mars 2 villages remake Mountain Pass",
      date: "06.03.2025",
    },
    {
      player1: "Lightning",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Mars 2 Village with walls",
      date: "03.03.2025",
    },
    {
      player1: "Lightning",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Hakerxus-Archer Map",
      date: "03.03.2025",
    },
    {
      player1: "AB",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Mars 2 Village with walls",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Land Of Chivalry",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Hakerxus-Archer Map",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Hakerxus",
      winner: "Hakerxus",
      map: "Large Clover remake Medium 4 Player Balanced",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Mars 2 Village with walls",
      date: "02.03.2025",
    },
    {
      player1: "AB",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Hakerxus-Archer Map",
      date: "02.03.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Hakerxus-Archer Map",
      date: "02.03.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "Chezzi",
      winner: "Chezzi",
      map: "Cauldon 2024",
      date: "02.03.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Large Clover remake Medium 4 Player Balanced",
      date: "23.02.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "Letonetma",
      winner: "Letonetma",
      map: "Hakerxus-Archer Map",
      date: "23.02.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "STALIN",
      winner: "ILLYRIAN",
      map: "Hakerxus-Archer Map",
      date: "22.02.2025",
    },
    {
      player1: "ILLYRIAN",
      player2: "STALIN",
      winner: "ILLYRIAN",
      map: "Mars 2 Village with walls",
      date: "22.02.2025",
    },
  ];

  return (
    <section id="news" className="text-white container mx-auto px-12 py-12">
      <p className="py-6">&nbsp;</p>
      <h2 className="blue-gradient-text text-4xl font-bold mb-8 text-center">
        Tournament News
      </h2>
      <p className="py-6">&nbsp;</p>

      <h3 className="text-2xl font-bold text-center mb-4">
        Website Launch & Recruitment Open!
      </h3>
      <p className="text-lg mb-2">
        The website launches on <strong>February 19, 2025</strong>, and
        recruitment begins!
      </p>
      <p className="text-lg mb-2">
        Recruitment will stay open throughout the tournament until the
        semifinals. The format will be a<strong> double round-robin</strong>,
        where everyone plays against each other twice, and points are counted.
      </p>
      <p className="text-lg mb-2">
        To sign up, send a private message or join here and post your nickname:
        <a
          href="https://steamcommunity.com/chat/invite/d8meFu7z"
          target="_blank"
          className="text-blue-400 underline"
        >
          Link
        </a>
      </p>
      <p className="text-lg mb-2">
        Reminder: This time, games <strong>can but don’t have to</strong> be
        streamed. You can also play with an unofficial watcher.
      </p>
      <p className="text-lg mb-2">
        Matches are expected to start on <strong>February 22, 2025</strong>.
      </p>
      <p className="text-lg">
        Anyone can stream the games and be a watcher, but the official streamers
        for now are <strong>Letonetma</strong> and <strong>Chezzi</strong>,
        helpers: <strong>PegaSuS22</strong>, <strong>CasusObliquus</strong>
      </p>

      <p className="py-6">&nbsp;</p>

      {/* Recent Games Section */}
      <h3 className="text-2xl font-bold text-center mb-4">Recent Games</h3>
      <table className="w-full border border-white text-lg text-center">
        <thead>
          <tr>
            <th className="border border-white px-4 py-2">Player 1</th>
            <th className="border border-white px-4 py-2">Player 2</th>
            <th className="border border-white px-4 py-2">Winner</th>
            <th className="border border-white px-4 py-2">Map</th>
            <th className="border border-white px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {recentGames.map((game, index) => (
            <tr key={index}>
              <td className="border border-white px-4 py-2">{game.player1}</td>
              <td className="border border-white px-4 py-2">{game.player2}</td>
              <td className="border border-white px-4 py-2">{game.winner}</td>
              <td className="border border-white px-4 py-2">{game.map}</td>
              <td className="border border-white px-4 py-2">{game.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="py-6">&nbsp;</p>
    </section>
  );
};

export default NewsSection;
