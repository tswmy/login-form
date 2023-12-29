import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [username, usernameUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // console.log("proceed");
      fetch("http://localhost:8000/users/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", username);
              usenavigate("/");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to:" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <div
      className="background-container-1  row justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "rgb(79, 160, 149)" }}
    >
      <div className="col-lg-6">
        <form onSubmit={proceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
              <div className="card-body">
                <div className="form-group">
                  <label>
                    User Name <span className="errmsg">*</span>
                  </label>
                  <input
                    value={username}
                    onChange={(e) => usernameUpdate(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Password <span className="errmsg">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => passwordUpdate(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>{" "}
                <span className="spacer"></span>{" "}
                <Link className="btn btn-success" to={"/register"}>
                  New User
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
