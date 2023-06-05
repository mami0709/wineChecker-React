import React, { useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../layout/DefaultLayout";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // エラーメッセージのリセット
    setSuccess(null); // 完了メッセージのリセット

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
        // サーバーが200レンジ以外のステータスで応答した場合
        setError(error.response.data.message);
      } else {
        // サーバーが応答しなかった場合
        setError("サーバが応答しなかったので、後でもう一度試してください。");
      }
    }
  };

  return (
    <DefaultLayout>
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

      <Grid container direction="column">
        <h2>新規登録</h2>
        <Grid
          container
          direction="column"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid item>
            <TextField
              id="outlined-email"
              label="メールアドレス"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-password"
              label="パスワード"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Signup;
