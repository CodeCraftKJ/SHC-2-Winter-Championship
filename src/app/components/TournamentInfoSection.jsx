import React from "react";

const TournamentInfoSection = () => {
  return (
    <section className="text-white" id="tournament-info">
      <p className="py-6">&nbsp;</p>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="blue-gradient-text">
            Winter 2023 Crusader 2 Championship
          </h2>
          <p className="text-base lg:text-lg">
            The Crusader 2 Winter 2023 Championship, an exclusive event with
            only 32 slots, brings together the most skilled players in the
            community. This tournament stands out for its specially designed
            maps and rules, all created by the top players themselves.
          </p>
          <p className="text-base lg:text-lg mt-2">
            The competition is structured into four groups, rigorously set up to
            determine the top 8 players. These elite eight will then advance to
            the final stage, where the most intense and strategic games will be
            streamed, leading up to the crowning of the ultimate champion.
          </p>
          <p className="text-base lg:text-lg mt-2">
            This championship is not just a contest of skill but a showcase of
            strategic depth and adaptability. With its unique format and
            high-caliber participants, it promises to be a landmark event in
            Crusader 2 history.
          </p>
          <p className="text-base lg:text-lg mt-2">
            <a
              href="https://drive.google.com/file/d/15mKeRLjd2m88RlCTHSDKLMUUWgsbDWje/view"
              target="_blank"
            >
              By the way if you are still reading ... Seeking a comprehensive
              guide to Crusader 2 economy? Look no further! Crafted by one of
              the game s top gold-rushers Ahmed, this guide is tailored for
              newcomers, ensuring a solid start in mastering the economic (
              Click There )
            </a>
          </p>
        </div>
        <div className="video-container mt-4 md:mt-0 space-y-4">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/ZYkSP2e9a0Q"
            title="Tournament Game Live"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/sTelB76yJp0"
            title="Tournament Game Live 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TournamentInfoSection;
