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
      <div className="header bg-secondary">
        <Link to={"/"}>Home</Link>
        <Link style={{ float: "right" }} to={"/login"}>
          Logout
        </Link>
      </div>
      <div className="container text-center mt-5">
        <Link to={"/questions"}>
          <button className="btn btn-primary ">Choose your team</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
