import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nevigate = useNavigate();

  const Login = () => {
    if (email.length == 0) {
      toast.warning("enter email");
    } else if (password.length == 0) {
      toast.warning("enter password");
    } else {
      const body = {
        email,
        password,
      };
      console.log(body);
      const url = `${URL}/user/login`;

      axios.post(url, body).then((Response) => {
        const result = Response.data;

        if (result["status"] == "success") {
          toast.success("User Login Successfull");

          const { id, firstName, lastName } = result["data"];

          sessionStorage["id"] = id;
          sessionStorage["firstName"] = firstName;
          sessionStorage["lastName"] = lastName;
          sessionStorage["loginStatus"] = 1;
          nevigate("/home");
        } else {
          toast.error("Invalid username or password");
        }
      });
    }
  };

  return (
    <div>
      <h1> Login </h1>
      <form>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="mb-3">
              <label className="form-lable">Email addess</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                type="email"
                placeholder="abc@test.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-lable">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                type="password"
                placeholder="*****"
              />
            </div>
            <div>
              No account yet? <Link to="/Login">Login here</Link>
            </div>
            <div>
              <button
                onClick={Login}
                className="btn btn-primary"
                type="button"
              >
                Signin
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </form>
    </div>
  );
};

export default Login;
 //yml file deleted