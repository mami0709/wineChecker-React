import type { NextPage } from "next";
import Head from "next/head";
import { DefaultLayout } from "../layout/DefaultLayout";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import { relative } from "path";
import { useAppDispatch } from "../redux/hook";
import { resetAnswers } from "../redux/reducer/question";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

const Home: NextPage = () => {
  //resetの処理を宣言
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    //ページを開いた時にリセットする
    dispatch(resetAnswers());
  }, [dispatch]);

  //レスポンシブ設定を定義
  const matches = useMediaQuery("(min-width:767px)");

  return (
    <DefaultLayout>
      {matches ? (
        <>
          {/* PC表示 */}
          <Grid>
            <Image
              src="/images/top.png"
              alt="Top"
              layout="intrinsic"
              height="400px"
              width="400px"
            />
            <Grid>
              <Typography variant="h6" sx={{ fontFamily: "HiraMinProN-W3" }}>
                ワインって種類が多すぎて何が自分に合うワインなのかわからない…
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "HiraMinProN-W3" }}>
                そう思った経験はありませんか？
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "HiraMinProN-W3" }}>
                このサイトは10個の質問に答えるだけで、あなたにぴったりのワインを診断いたします！
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "HiraMinProN-W3" }}>
                あなたにぴったりのワインを選んで、ワインライフをもっと楽しんでみませんか？
              </Typography>
            </Grid>
            <Grid sx={{ paddingTop: "30px" }}>
              <Typography
                variant="h4"
                color="#CD1919"
                sx={{ fontFamily: "HiraMinProN-W3" }}
              >
                \ 好みのワインを簡単に診断！ /
              </Typography>
            </Grid>
            <Grid sx={{ paddingTop: "30px" }}>
              <Typography
                variant="h2"
                color="#CD1919"
                fontWeight="bold"
                sx={{ fontFamily: "HiraMinProN-W3" }}
              >
                ワイン診断
              </Typography>
            </Grid>
            <Grid sx={{ paddingTop: "30px" }}>
              <Link href={"/shindan/aka"}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#CD1919",
                    color: "#CD1919",
                    "&:hover": {
                      backgroundColor: "#CD1919",
                      color: "white",
                      borderColor: "#CD1919",
                    },
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "HiraMinProN-W3",
                    marginRight: "20px",
                  }}
                >
                  赤ワインで診断
                </Button>
              </Link>
              <Link href={"/shindan/shiro"}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#10B981",
                    color: "#10B981",
                    "&:hover": {
                      backgroundColor: "#10B981",
                      color: "white",
                      borderColor: "#10B981",
                    },
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "HiraMinProN-W3",
                    marginLeft: "20px",
                  }}
                >
                  白ワインで診断
                </Button>
              </Link>
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </DefaultLayout>
  );
};

export default Home;
