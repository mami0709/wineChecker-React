import React from "react";
import { NextPage } from "next";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../src/redux/hook";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import Image from "next/image";
import { resultMessageDef } from "../../definitions/consts";

export const ResultAka: NextPage = () => {
  const rank = useAppSelector((state) => state.question.rank);
  const matches = useMediaQuery("(min-width:767px)");

  const [wineList, setWineList] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/shindan/resultAka.php", {})
      .then((res) => {
        const { result, data } = res.data;
        if (result === "SUCCESS") {
          setWineList(data);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  const resultMessage = wineList?.[rank];
  const resultImage = wineList?.[rank];
  const Message = resultMessageDef?.[rank]; //rankに応じた結果の文言

  return (
    <DefaultLayout>
      <Paper style={{ padding: 5, paddingTop: "50px" }}>
        <Grid style={{ width: "80%", margin: "0 auto", maxWidth: "1200px" }}>
          <div style={{ borderBottom: "2px solid red", paddingBottom: "15px" }}>
            <Typography variant={"h4"} style={{ fontWeight: "bold" }}>
              診断結果
            </Typography>
            <Grid style={{ display: "flex" }}>
              <Image
                src="/images/budou.png"
                alt="icon"
                layout="intrinsic"
                height={50}
                width={50}
              />
              <Typography
                variant={"h4"}
                style={{ paddingTop: "20px", color: "red" }}
              >
                {resultMessage?.one_word}
              </Typography>
            </Grid>
          </div>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <Grid style={{ padding: "40px 80px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${resultImage?.wine_image}`}
                height="500px"
                width="auto"
                alt="result image"
              />
            </Grid>
            <Grid item container direction="column" justifyContent="center">
              <Typography variant={"h4"} style={{ fontWeight: "bold" }}>
                {resultMessage?.wine_name}
              </Typography>
              <Typography
                variant={"h5"}
                style={{ paddingTop: "20px", color: "red" }}
              >
                {Message}
              </Typography>
              <Typography variant={"h6"} style={{ paddingTop: "40px" }}>
                あなたにおすすめのワインは、
                {resultMessage?.comment}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={10}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "30px",
            }}
          >
            <Grid item>
              <Link href={"/"}>
                <Button
                  style={{
                    fontSize: "1.3rem",
                    color: "#fff",
                    backgroundColor: "#DDA0DD",
                    borderRadius: "5px",
                    padding: "10px 35px",
                  }}
                  sx={{ ":hover": { opacity: 0.8 } }}
                >
                  もう一度
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href={"/"}>
                <Button
                  style={{
                    fontSize: "1.3rem",
                    color: "#fff",
                    backgroundColor: "#9370DB",
                    borderRadius: "5px",
                    padding: "10px 30px",
                  }}
                  sx={{ ":hover": { opacity: 0.8 } }}
                >
                  ワインの詳細を見る
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </DefaultLayout>
  );
};
export default ResultAka;
