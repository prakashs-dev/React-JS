import { useState } from "react";
import "../App.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [confirmPasswordValidate, setconfirmPasswordValidate] = useState(false);

  const validateEmail = (value) => {
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);
    setEmailValidate(mailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPassword(value);
    setPasswordValidate(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    setconfirmPasswordValidate(value == password);
  };

  const handleSubmit = (e) => {
    if (emailValidate && passwordValidate && confirmPasswordValidate) {
      e.preventDefault();
      alert("Form Submitted Successfully");
      e.target.reset();
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setEmailValidate(false);
      setPasswordValidate(false);
      setconfirmPasswordValidate(false);
    } else {
      alert("Can't Submit The Form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email </label>
      <input
        style={{
          border: emailValidate ? "2px solid green" : "2px solid #fd5d63",
          marginBottom: emailValidate ? "20px" : "0px",
        }}
        type="text"
        placeholder="Enter email address"
        onChange={(e) => validateEmail(e.target.value.trim())}
        value={email}
        className="email"
      />
      {!emailValidate && <p>Email is required and must be in a valid format</p>}

      <label htmlFor="password">Password</label>
      <input
        style={{
          border: passwordValidate ? "2px solid green" : "2px solid #fd5d63",
          marginBottom: passwordValidate ? "20px" : "0px",
        }}
        type="password"
        onChange={(e) => validatePassword(e.target.value.trim())}
        value={password}
        placeholder="Password"
        className="pswd"
      />
      {!passwordValidate && <p>Password must be at least 8 characters long</p>}

      <label htmlFor="confirmPswd">Confirm Password </label>
      <input
        style={{
          border: confirmPasswordValidate
            ? "2px solid green"
            : "2px solid #fd5d63",
          marginBottom: confirmPasswordValidate ? "20px" : "0px",
        }}
        type="password"
        onChange={(e) => {
          validateConfirmPassword(e.target.value.trim());
        }}
        placeholder="Confirm password"
        value={confirmpassword}
        className="confirmpswd"
      />
      {!confirmPasswordValidate && <p>Password do not match</p>}
      <div className="btn-container">
        <button className="btn" type="submit">
          SignUp
        </button>
      </div>
    </form>
  );
}
