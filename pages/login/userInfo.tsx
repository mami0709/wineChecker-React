import React, { useState, useEffect } from "react";
import axios from "axios";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";


const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const [userName, setUserName] = useState("");
  const [userNameHiragana, setUserNameHiragana] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    // あり得ないが念の為
    if (!token) {
      setError("ログインが必要です。");
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/userInfo/getUser.php?token=${token}`
        );
        setUserInfo(response.data);
        setUserName(response.data.user_name);
        setUserNameHiragana(response.data.user_name_hiragana);
        setNickname(response.data.nickname);
        setEmail(response.data.mail_address);
        setTelephoneNumber(response.data.telephone_number);
        setPassword(response.data.user_password);
      } catch (error) {
        setError("ユーザー情報の取得に失敗しました。");
        console.error("Error:", error);
      }
    };
    fetchUserInfo();
  }, []);

  const handleEdit = async () => {
    const params = new URLSearchParams();
    params.append("id", userInfo.id);
    params.append("user_name", userName);
    params.append("user_name_hiragana", userNameHiragana);
    params.append("nickname", nickname);
    params.append("mail_address", email);
    params.append("telephone_number", telephoneNumber);
    params.append("user_password", password);

    console.log(params);

    try {
      await axios.post(
        `http://localhost:8080/userInfo/updateUser.php`,
        JSON.stringify({
          id: userInfo.id,
          user_name: userName,
          user_name_hiragana: userNameHiragana,
          nickname: nickname,
          mail_address: email,
          telephone_number: telephoneNumber,
          user_password: password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("ユーザー情報が更新されました！");
    } catch (error) {
      console.error("Error:", error);
      alert("ユーザー情報の更新に失敗しました。");
    }
  };

  return (
    <DefaultLayout>
      <Container maxWidth="md" sx={{ width: "50%", padding: "50px 0" }}>
        <Typography
          variant="h4"
          sx={{ paddingBottom: "50px", fontWeight: "bold" }}
        >
          ユーザー情報
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {error && <Typography color="error">{error}</Typography>}
              {userInfo && (
                <>
                  <TextField
                    label="お名前"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    label="ひらがな"
                    value={userNameHiragana}
                    onChange={(e) => setUserNameHiragana(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    label="ニックネーム"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    label="メールアドレス"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    label="電話番号"
                    value={telephoneNumber}
                    onChange={(e) => setTelephoneNumber(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    type="password"
                    label="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                  />
                </>
              )}
              <Grid sx={{ padding: "50px 0" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleEdit}
                  sx={{
                    backgroundColor: "#f59e0b",
                    "&:hover": {
                      backgroundColor: "#f59f0bc5",
                    },
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  更新する
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default UserInfo;
