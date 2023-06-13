import React, { useState, useEffect } from "react";
import axios from "axios";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import { Grid, Typography } from "@mui/material";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("ログインが必要です。");
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/getUser.php?token=${token}`
        );
        setUserInfo(response.data);
      } catch (error) {
        setError("ユーザー情報の取得に失敗しました。");
        console.error("Error:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <DefaultLayout>
      <Grid
        container
        direction="column"
        sx={{ alignItems: "center", width: "100%", paddingTop: "80px" }}
      >
        <Typography variant="h4">ユーザー情報</Typography>
        {error && <Typography color="error">{error}</Typography>}
        {userInfo && (
          <>
            <Typography variant="h6">
              メールアドレス: {userInfo.mail_address}
            </Typography>
            {/* 必要な他のユーザ情報を表示 */}
          </>
        )}
      </Grid>
    </DefaultLayout>
  );
};

export default UserInfo;
