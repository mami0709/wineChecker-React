import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login.php", {
        email,
        password,
      });
      const token = response.data.token;

      // token を保存
      localStorage.setItem("token", token);

      // ログインに成功したら、ユーザーをホームページなどにリダイレクト
      window.location.replace("/");
    } catch (error) {
      setError("メールアドレスまたはパスワードが正しくありません。");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
