import React, { useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../layout/DefaultLayout";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid, Typography, Button } from "@mui/material";
import Link from "next/link";

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
      <Grid
        container
        direction="column"
        sx={{ alignItems: "center", width: "100%", paddingTop: "80px" }}
      >
        <Typography variant="h4">新規会員登録</Typography>
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
                sx={{
                  width: "400px",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#683212",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#bb947c",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#683212",
                    },
                }}
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
                sx={{
                  width: "400px",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#683212",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#bb947c",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#683212",
                    },
                }}
              />
            </Grid>
            <span style={{ color: "gray" }}>
              半角英数・記号の8文字以上で入力してください。
            </span>
            <Grid sx={{ paddingTop: "20px" }}>
              {error && <Typography color="error">{error}</Typography>}
              {success && <Typography color="primary">{success}</Typography>}
            </Grid>
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
                アカウントを作成する
              </Button>
            </Grid>
            <Grid sx={{ paddingTop: "20px" }}>
              <span>すでにアカウントをお持ちですか？</span>
              <Link href={"/login"}>
                <span style={{ color: "#F59E0B", cursor: "pointer" }}>
                  ログイン
                </span>
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Signup;
