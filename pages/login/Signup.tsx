import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // reset error message
    setSuccess(null); // reset success message

    try {
      const response = await axios.post(
        "http://localhost:8080/userRegistration.php",
        {
          email,
          password,
        }
      );
      setSuccess(response.data.message);
    } catch (error) {
      if (error.response) {
        // server responded with a status other than 200 range
        setError(error.response.data.message);
      } else {
        // server didn't respond
        setError("Server did not respond, please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
