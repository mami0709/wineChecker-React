import type { NextPage } from "next";
import { DefaultLayout } from "../src/layout/DefaultLayout";
import { Grid, Typography, Button } from "@mui/material";

import { useAppDispatch } from "../src/redux/hook";
import { resetAnswers } from "../src/redux/reducer/question";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { OutlineButton } from "./components/Button/outlineButton";

const HomePageText = ({ children }) => (
  <Typography variant="h6">{children}</Typography>
);

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(resetAnswers());
  }, [dispatch]);

  const matches = useMediaQuery("(min-width:767px)");

  return (
    <DefaultLayout>
      <>
        <Grid>
          <Image
            src="/images/top.png"
            alt="Top"
            layout="intrinsic"
            height="400px"
            width="400px"
          />
          <Grid>
            <HomePageText>
              ワインって種類が多すぎて何が自分に合うワインなのかわからない…
            </HomePageText>
            <HomePageText>そう思った経験はありませんか？</HomePageText>
            <HomePageText>
              このサイトは10個の質問に答えるだけで、あなたにぴったりのワインを診断いたします！
            </HomePageText>
            <HomePageText>
              あなたにぴったりのワインを選んで、ワインライフをもっと楽しんでみませんか？
            </HomePageText>
          </Grid>
          <Grid sx={{ paddingTop: "30px" }}>
            <Typography variant="h4" color="#CD1919">
              \ 好みのワインを簡単に診断！ /
            </Typography>
          </Grid>
          <Grid sx={{ paddingTop: "30px" }}>
            <Typography variant="h2" color="#CD1919" fontWeight="bold">
              ワイン診断
            </Typography>
          </Grid>
          <Grid sx={{ paddingTop: "30px" }}>
            <OutlineButton href={"/shindan/aka"} color="#CD1919">
              赤ワインで診断
            </OutlineButton>
            <OutlineButton
              href={"/shindan/shiro"}
              color="#10B981"
              style={{ marginLeft: "20px" }}
            >
              白ワインで診断
            </OutlineButton>
          </Grid>
        </Grid>
      </>
    </DefaultLayout>
  );
};

export default Home;
