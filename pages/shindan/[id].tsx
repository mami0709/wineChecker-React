import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import { CardMedia, Typography, Container, Box, Grid } from "@mui/material";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BasicButton } from "../components/Button/BasicButton";
import { OutlineButton } from "../components/Button/outlineButton";

const WineDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const backendBaseUrl = "http://localhost:8080/recommend[id].php";
  //レスポンシブ設定を定義
  const matches = useMediaQuery("(min-width:767px)");

  //バックエンドとの繋ぎ込み処理
  const [loading, setLoading] = React.useState(false);
  const [wineData, setWineData] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      setLoading(true);
      axios.get(`${backendBaseUrl}?id=${id}`).then((res) => {
        const { result, data } = res.data;
        if (result === "SUCCESS") {
          setWineData(data[0]); // ここで data の最初の要素を取得します。
        }
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <>loading...</>;
  }

  return (
    <DefaultLayout>
      <Container
        style={{
          backgroundColor: "white",
          paddingBottom: "60px",
        }}
      >
        <Box
          style={{
            backgroundColor: "white",
            display: "flex",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              height: "80vh",
              padding: "50px 130px",
              margin: "10px",
            }}
          >
            <CardMedia
              component="img"
              image={wineData?.wine_image}
              sx={{
                height: "100%",
                width: "auto",
                margin: "10px",
              }}
            />
          </Grid>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              padding: "10px 40px 40px 20px",
            }}
          >
            <Grid
              style={{
                borderBottom: "1px solid #c5c5c5",
                paddingBottom: "10px",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  marginTop: 30,
                  marginBottom: 30,
                  fontWeight: "bold",
                }}
              >
                {wineData?.wine_name}
              </Typography>
              <Typography variant="h6">
                {wineData?.english_wine_name}
              </Typography>
              {wineData?.years && (
                <Typography variant="h6">{wineData?.years}年</Typography>
              )}
            </Grid>

            <Grid
              style={{
                borderBottom: "1px solid #c5c5c5",
                padding: "30px 0",
              }}
            >
              <Typography variant="h6">{wineData?.comment}</Typography>
            </Grid>

            <Grid
              style={{
                padding: "30px 0",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontWeight: "bold",
                }}
              >
                {wineData?.one_word}
              </Typography>
            </Grid>

            <Grid
              style={{
                padding: "20px 0",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                商品情報
              </Typography>
              <Typography variant="h6">
                タイプ
                <Box component="span" sx={{ paddingLeft: 3 }}>
                  {wineData?.wine_type}
                </Box>
              </Typography>
              <Typography variant="h6">
                生産者
                <Box component="span" sx={{ paddingLeft: 3 }}>
                  {wineData?.producer}
                </Box>
              </Typography>
              <Typography variant="h6">
                生産地
                <Box component="span" sx={{ paddingLeft: 3 }}>
                  {wineData?.wine_country}
                </Box>
              </Typography>
              <Typography variant="h6">
                ワイナリー
                <Box component="span" sx={{ paddingLeft: 3 }}>
                  {wineData?.winery}
                </Box>
              </Typography>
              <Typography variant="h6">
                品種
                <Box component="span" sx={{ paddingLeft: 3 }}>
                  {wineData?.breed}
                </Box>
              </Typography>
              <Typography variant="h6">
                容量
                <Box component="span" sx={{ paddingLeft: 3 }}>
                  {wineData?.capacity} ml
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          justifyContent="center"
          spacing={15}
          sx={{ paddingTop: "30px" }}
        >
          <Grid item>
            <OutlineButton
              href={"/shindan/recommend"}
              color="#F59E0B"
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
            >
              戻る
            </OutlineButton>
          </Grid>
          <Grid item>
            <BasicButton
              href={wineData?.wine_url || "#"} // エラー回避
              color="#F59E0B"
            >
              ショップで見てみる
            </BasicButton>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default WineDetail;
