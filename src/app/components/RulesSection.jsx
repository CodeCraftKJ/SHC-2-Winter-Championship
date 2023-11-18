"use client";
const RulesSection = () => {
  return (
    <section id="rules" className="text-white container mx-auto px-12 py-4">
      <p className="py-6">&nbsp;</p>
      <p className="py-6">&nbsp;</p>
      <h2 className="blue-gradient-text text-4xl font-bold mb-4">
        Tournament Rules
      </h2>

      <p className="text-lg mb-4">
        Welcome to the Crusader 2 Championship, curated by Hawt. Here are the
        key rules and guidelines for participants:
      </p>

      <h3 className="cool-gradient-text text-xl font-bold">
        Tournament Structure:
      </h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          The tournament begins with four separate double elimination brackets,
          each starting with eight players.
        </li>
        <li>
          The finals of each bracket form the first set of games in the final
          bracket, which also features eight players.
        </li>
        <li>
          In case a player is unable to participate, their spot can be taken by
          others who still wish to compete, including those who have already
          been eliminated from the tournament. However, this rule does not apply
          in the final bracket.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">Game Settings:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>All On means all settings in the game are allowed.</li>
        <li>All Off means all settings in the game are turned off.</li>
        <li>
          If a map has its own specific rules, these override the general rules.
          (Map rules have bigger prior then General Rules)
        </li>
        <li>
          The nobuynosell rule indicates that buying and selling are not
          allowed.
        </li>
        <li>
          Catapults against troops are not allowed unless explicitly permitted
          in the rules.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">General Rules:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          All tricks and bugs that are not explicitly banned are allowed. Feel
          free to be creative; what is not banned is legal.
        </li>
        <li>
          Participants are expected to maintain fair play and sportsmanship
          throughout the tournament.
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">
        Banned Bugs and Limitations:
      </h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>No Tower Bug.</li>
        <li>No Long Shooters (long fire bombers).</li>
        <li>
          Limiting the amount of barricades is recommended but not enforced.
        </li>
        <li>No free stone walls.</li>
        <li>
          <em>
            Disclaimer: If you re not familiar with a specific bug, feel free to
            inquire. However, if you don t know about it, you likely don t use
            it in your gameplay.
          </em>
        </li>
      </ul>

      <h3 className="cool-gradient-text text-xl font-bold">Match Oversight:</h3>
      <ul className="text-lg list-disc list-inside mb-4">
        <li>
          For top games that are streamed, a watcher will be required to ensure
          fair play.
        </li>
        <li>
          In the initial phases of the tournament, a screenshot of your victory
          is sufficient for validation. Alternatively, you can appoint a watcher
          to verify your win.
        </li>
      </ul>

      <p className="text-lg">
        We encourage all participants to familiarize themselves with these rules
        to ensure a smooth and enjoyable tournament experience. Good luck to all
        competitors!
      </p>
    </section>
  );
};

export default RulesSection;
