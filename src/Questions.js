import React, { useState } from "react";

function Questions() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamSelection = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className=" text-center ">
      <h2>Questions</h2>

      <button
        className="btn btn-primary "
        onClick={() => handleTeamSelection("TeamA")}
      >
        Select Team A
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleTeamSelection("TeamB")}
      >
        Select Team B
      </button>

      {selectedTeam && (
        <div>
          <h3>{`Questions for ${selectedTeam}`}</h3>
          {selectedTeam === "TeamA" && (
            <div>
              <p>Question 1: How are you?</p>
              <p>Question 2: What is your Name?</p>
            </div>
          )}
          {selectedTeam === "TeamB" && (
            <div>
              <p>Question 1: How many members are there in your team?</p>
              <p>Question 2: Who is the best athlete in your team?</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Questions;
