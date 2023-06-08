import React from "react";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import { Container, Grid, Typography } from "@mui/material";
import { BasicButton } from "../components/Button/BasicButton";

const PostComplete = () => {
  return (
    <DefaultLayout>
      <Container sx={{ width: "60%", padding: "50px 0" }}>
        <Typography
          variant="h4"
          sx={{ paddingTop: "50px", paddingBottom: "70px", fontWeight: "bold" }}
        >
          投稿が完了しました
        </Typography>
        <Grid item>
          <BasicButton
            href={"/" || "#"} // エラー回避
            color="#F59E0B"
          >
            トップページへ戻る
          </BasicButton>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default PostComplete;
