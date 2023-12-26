import React from "react";
import MapCard from "./MapCard";
import CM from "./CM";

const NewsSection = () => {
  return (
    <section
      id="TournamentNews"
      className="text-white container mx-auto px-12 py-12"
    >
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* Tournament Starts */}
      <h2 className="blue-gradient-text text-4xl font-bold mb-8 text-center">
        Tournament News
      </h2>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>

      <div className="text-center mt-12">
        <p className="cool-gradient-text text-md font-bold">
          Comprehensive Match Results
        </p>

        {/* Matches from previous discussions */}
        <p className="mt-4">
          <strong>Hakerxus vs Rudra:</strong> 2-0 - <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Stalin vs Vsratii Baron:</strong> 2-0 -{" "}
          <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Jedi vs Alexander Nevsky:</strong> 2-1 -{" "}
          <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Nil vs Professor:</strong> 2-0 - <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Hawt vs FAORS:</strong> 2-0 - <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Thunder vs Spartacus:</strong> 2-0 -{" "}
          <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>CasusObliquus vs Apithos:</strong> 2-0 -{" "}
          <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Illyrian vs Godofstrategy:</strong> 2-0 -{" "}
          <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Albercikk vs Falcon:</strong> 2-0 -{" "}
          <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Chezzi vs Dodorus:</strong> 2-0 - <a href="">Match Replay</a>
        </p>

        {/* Matches from the provided group */}
        <p className="mt-4">
          <strong>Letonetma vs RockLee:</strong> 2-0 -{" "}
          <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>AB vs Superfly:</strong> 2-0 - <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Ahmed vs Yoda:</strong> 2-0 - <a href="">Match Replay</a>
        </p>
        <p className="mt-4">
          <strong>Asluk vs 惬意的紫色奶茶:</strong> 2-1 -{" "}
          <a href="">Match Replay</a>
        </p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
      </div>

      <div className="text-center mt-12">
        <p className="cool-gradient-text text-xl font-bold">
          12.12.2023: Championship Games Start
        </p>
        <p className="mt-4">
          <strong>Participants in Each Group:</strong>
          <br />
          <strong>Group A:</strong> Hawt, Thunder, CasusObliquus, Illyrian,
          FAORS, Spartacus, Apithos, Godofstrategy
          <br />
          <strong>Group B:</strong> Hakerxus, Stalin, Jedi, Nil, Rudra, Vsratii
          Baron, Alexander Nevsky, Professor
          <br />
          <strong>Group C:</strong> Letonetma, AB, Ahmed, Asluk, RockLee,
          Superfly, Yoda, 惬意的紫色奶茶
          <br />
          <strong>Group D:</strong> Albercikk, Chezzi, Itachi Ucheha, Lawrence,
          Xeon, Falcon, Dodorus, (Empty Spot)
        </p>

        <p className="mt-4">
          <strong>Game Format:</strong> Best-of-3 in group stages. Players
          select maps from our website for the first two games, each player
          select 1 map. Ties are decided by a random map generator.
        </p>
        <p className="mt-4">
          <strong>Finalist bracket </strong>( also the finals in group stage )
          games will feature all random maps, adding an element of surprise.
        </p>
        <p className="mt-4">
          <strong>Streaming Team:</strong> Albercikk, Vladimir, SD7804, Vsratii
          Baron, Murmelus. We may have additional streamers joining, so stay
          tuned! Team of recorders and helpers: Godofstrategy, Letonetma If you
          want to play your game, contact them and ask when can it be
          streamed/recorded
        </p>
        <p className="py-6">&nbsp;</p>
        <strong>Check out Leaderboards!</strong>
        <p>If you still want to join, 1 free place left!</p>
        <CM></CM>
      </div>

      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* Registration News */}
      <div className="text-center">
        <p className="cool-gradient-text text-xl font-bold">
          24.11.2023: Registration Opens
        </p>
        <p className="text-lg mt-4 mb-6">
          Registration for the tournament begins. Get ready to compete!
        </p>
        <a
          href="https://forms.gle/YZExVu4MqEm6nNEC9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg inline-block"
        >
          Register Now
        </a>
      </div>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* New Challenge Announcement */}
      <div className="text-center mt-12">
        <p className="cool-gradient-text text-xl font-bold">
          23.11.2023: New Challenge for Registered Players
        </p>
        <p className="text-lg mt-4 mb-6">
          A new challenge awaits! Players already registered and anyone wanting
          to train on a hard map can try Castle defence map. Check it out!
        </p>
        <MapCard
          imgUrl="images/TheCastle.jpg"
          mapName="Castle Challenge"
          rules="A challenging map for skilled players. No specific rules, just survival."
          steamUrl="https://steamcommunity.com/sharedfiles/filedetails/?id=3090952671"
        />
      </div>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      {/* Web Starts*/}
      <div className="space-y-12">
        <div className="text-center">
          <p className="cool-gradient-text text-xl font-bold">
            20.11.2023 The Website has been launched!
          </p>
          <p className="text-lg mt-4 mb-6">
            The official website for the Crusader 2 Winter Championship has been
            launched. Website made by Letonetma, The Creator of Maps and Rules:
            Hawt Helpers/Streamers in tournament: Albercikk, Stalin, Vladimir If
            you want to stream games or help in any other ways, contact us on
            steam
          </p>
        </div>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
        <p className="py-6">&nbsp;</p>
      </div>

      {/* Other News */}
      {/* ... */}
    </section>
  );
};

export default NewsSection;
