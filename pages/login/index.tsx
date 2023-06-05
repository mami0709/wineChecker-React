import React, { useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../layout/DefaultLayout";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid, Typography, Button } from "@mui/material";
import Link from "next/link";

const textFieldStyle = {
  width: "400px",
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#683212",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#bb947c",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#683212",
  },
};

const LoginForm = () => {
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
    <DefaultLayout>
      <Grid
        container
        direction="column"
        sx={{ alignItems: "center", width: "100%", paddingTop: "80px" }}
      >
        <Typography variant="h4">ログイン</Typography>
        <Grid item xs={12}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Grid
              item
              sx={{ alignItems: "center", width: "100%", paddingTop: "40px" }}
            >
              <TextField
                id="outlined-email"
                label="メールアドレス"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputLabelProps={{
                  style: { color: "#683212" },
                }}
                sx={textFieldStyle}
              />
            </Grid>
            <Grid
              item
              sx={{
                alignItems: "center",
                width: "100%",
                paddingTop: "20px",
                paddingBottom: "10px",
              }}
            >
              <TextField
                id="outlined-password"
                label="パスワード"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputLabelProps={{
                  style: { color: "#683212" },
                }}
                sx={textFieldStyle}
              />
            </Grid>
            <Grid sx={{ paddingTop: "10px" }}>
              <span style={{ textDecoration: "underline" }}>
                パスワードを忘れた場合
              </span>
            </Grid>
            {error && (
              <Grid sx={{ paddingTop: "20px" }}>
                <Typography color="error">{error}</Typography>
              </Grid>
            )}
            <Grid
              item
              sx={{ alignItems: "center", width: "100%", paddingTop: "30px" }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#f59e0b",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#f59f0bc5",
                  },
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                ログイン
              </Button>
            </Grid>
            <Grid sx={{ paddingTop: "20px" }}>
              <span>まだアカウントをお持ちでないですか？</span>
              <Link href={"/login/Signup"}>
                <span style={{ color: "#F59E0B", cursor: "pointer" }}>
                  新規登録
                </span>
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default LoginForm;
