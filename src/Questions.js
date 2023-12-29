import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Questions() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [responses, setResponses] = useState({
    question1: null,
    question2: null,
  });

  const navigate = useNavigate();

  const handleTeamSelection = (team) => {
    setSelectedTeam(team);
  };

  const handleResponseChange = (question, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: value,
    }));
  };

  const handleSubmit = () => {
    const username = "id";
    const userId = "id";

    console.log("Responses:", responses);

    fetch(`http://localhost:8000/users/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        responses: {
          ...responses,
          team: selectedTeam,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response submitted successfully:", data);

        navigate("/");
      })
      .catch((error) => {
        console.error("Error submitting response:", error);
      });
  };

  return (
    <div style={{ backgroundColor: "rgb(79, 160, 149)", height: "100vh" }}>
      <div className="text-center">
        <h2>Questions</h2>

        <div>
          <button
            className="btn btn-secondary "
            onClick={() => handleTeamSelection("TeamA")}
          >
            Team A
          </button>{" "}
          |
          <button
            className="btn btn-secondary "
            onClick={() => handleTeamSelection("TeamB")}
          >
            Team B
          </button>
        </div>

        {selectedTeam && (
          <div>
            <h3>{`Questions for ${selectedTeam}`}</h3>
            {selectedTeam === "TeamA" && (
              <div>
                <p>
                  <input
                    type="radio"
                    name="question1"
                    value="Option1"
                    onChange={() =>
                      handleResponseChange("question1", "Option1")
                    }
                  />
                  Question 1: How are you?
                </p>
                <p>
                  <input
                    type="radio"
                    name="question1"
                    value="Option2"
                    onChange={() =>
                      handleResponseChange("question1", "Option2")
                    }
                  />
                  Question 2: What is your Name?
                </p>
              </div>
            )}
            {selectedTeam === "TeamB" && (
              <div>
                <p>
                  <input
                    type="radio"
                    name="question2"
                    value="Option1"
                    onChange={() =>
                      handleResponseChange("question2", "Option1")
                    }
                  />
                  Question 1: How many members are there in your team?
                </p>
                <p>
                  <input
                    type="radio"
                    name="question2"
                    value="Option2"
                    onChange={() =>
                      handleResponseChange("question2", "Option2")
                    }
                  />
                  Question 2: Who is the best athlete in your team?
                </p>
              </div>
            )}
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
