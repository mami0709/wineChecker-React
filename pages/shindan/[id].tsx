import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Container,
  Box,
  Link,
} from "@mui/material";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";

const WineDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const backendBaseUrl = "http://localhost:8080/recommend.php";
  //レスポンシブ設定を定義
  const matches = useMediaQuery("(min-width:767px)");

  //バックエンドとの繋ぎ込み処理
  const [loading] = React.useState(false);
  const [wineList, setWineList] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      // setLoading(true);
      axios.get(`http://localhost:8080/recommend.php/${id}`).then((res) => {
        const { result, data } = res.data;
        if (result === "SUCCESS") {
          setWineList(data);
        }
        if (loading) {
          return <>loading...</>;
        }
      });
    }
  }, [id]);

  return (
    <DefaultLayout>
      <Container fixed style={{ position: "relative" }}>
        <Box
          style={{
            position: "absolute",
            display: "flex",
            left: "5%",
            width: "100%",
          }}
        >
          <Card sx={{ height: "100vh", width: "50vh", margin: "10px" }}>
            <CardMedia
              component="img"
              image={`${wineList?.wine_image}`}
              sx={{
                height: "100%",
                width: "auto",
                margin: "10px",
                marginLeft: "120px",
              }}
            />
          </Card>
          <Card
            sx={{
              bgcolor: "#E6E6FA",
              height: "100vh",
              top: "25px",
              width: "60vh",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              textAlign: "left",
              paddingLeft: "20px",
              paddingRight: "15px",
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
              {wineList?.wine_name}
            </Typography>
            <Box sx={{ borderBottom: 5, marginBottom: 5, color: "white" }} />
            <Typography variant="h5">
              【種類】
              {wineList?.wine_type}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "10px" }}>
              【おすすめ一言】{wineList?.one_word}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "10px" }}>
              【原産国名】{wineList?.wine_country}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "10px" }}>
              【産地】{wineList?.winery}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "10px" }}>
              【ぶどう品種】{wineList?.breed}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              【詳細】{wineList?.comment}
            </Typography>
            <Link
              target="_blank"
              href={wineList?.link}
              sx={{
                marginTop: "30px",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  marginTop: "10px",
                  background: " rgb(243,208,120)",
                  boxShadow: "0 1px 0 rgba(255,255,255,.4) inset",
                  borderRadius: "3px",
                  borderColor: "#a88734 #9c7e31 #846a29",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  width: "300px",
                  height: "80px",
                  color: "#111",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  ":hover": {
                    background: "#eeb933",
                    color: "#222222",
                  },
                }}
              >
                amazonで見てみる
              </Button>
            </Link>
          </Card>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default WineDetail;
