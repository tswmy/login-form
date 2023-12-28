import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="header bg-info">
        <Link to={"/"}>Home</Link>
        <Link style={{ float: "right" }} to={"/login"}>
          Logout
        </Link>
      </div>
      <div className="container text-center mt-5">
        <Link to={"/questions"}>
          <button className="btn btn-secondary ">Pick your team</button>
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "rgb(21, 52, 98)",
          minHeight: "100vh",
          padding: "20px",
        }}
      ></div>
    </div>
  );
}

export default Home;
