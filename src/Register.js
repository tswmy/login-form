import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [password, passwordChange] = useState("");
  const [email, emailChange] = useState("");
  const [mobile, mobileChange] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter value in ";
    if (id === null || id === "") {
      isProceed = false;
      errorMessage += " Username";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMessage += " Password";
    }
    if (name === null || name === "") {
      isProceed = false;
      errorMessage += " Name";
    }
    if (email === null || email === "") {
      isProceed = false;
      errorMessage += " Email";
    }
    if (mobile === null || mobile === "") {
      isProceed = false;
      errorMessage += " Mobile Number";
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      } else {
        isProceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, mobile };
    if (isValidate()) {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered Successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Register</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordChange(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => nameChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Mobile Number <span className="errmsg">*</span>
                    </label>
                    <input
                      value={mobile}
                      onChange={(e) => mobileChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
