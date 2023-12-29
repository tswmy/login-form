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
        <Link to={"/"}>
          <button className="btn btn-primary">Home</button>
        </Link>
        <Link style={{ float: "right" }} to={"/login"}>
          <button className="btn btn-primary"> Logout</button>
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "rgb(15, 33, 103)",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div className="container text-center mt-5">
          <Link to={"/questions"}>
            <button className="btn btn-secondary">Choose your team</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
