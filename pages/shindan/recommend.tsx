//@ts-nocheck
import type { NextPage } from "next";
import Head from "next/head";
import { DefaultLayout } from "../../layout/DefaultLayout";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import axios from "axios";

const backendBaseUrl = "http://localhost:8080";

//ワインの品種等掲載
const WineCard: React.FC<{
  data: any;
}> = ({ data }) => {
  // PCならtrue, mobileならfalse
  const matches = useMediaQuery("(min-width:767px)");
  console.log(`${backendBaseUrl}${data.wine_image}`);

  return (
    <Link href={`/shindan/${data.id}`}>
      <Card sx={{ textAlign: "left", height: 385 }}>
        <CardActionArea>
          <Grid sx={{ height: "100", width: "200" }}>
            <CardMedia
              component="img"
              height="200"
              image={`${backendBaseUrl}/${data.wine_image}`}
              sx={{ height: "100", width: "auto", marginLeft: 16 }}
            />
          </Grid>
          <CardContent>
            <Typography variant="h6">{data.wine_name}</Typography>
            <Typography gutterBottom>{data.winery}</Typography>
            <Typography>{data.wine_type}</Typography>
            <Typography>{data.wine_country}</Typography>
            <Typography>{data.capacity}ml</Typography>
            <Typography variant="body2">{/* {data.description} */}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const Recommend: NextPage = () => {
  // PCならtrue, mobileならfalse
  const matches = useMediaQuery("(min-width:767px)");

  //バックエンドとの繋ぎ込み処理
  const [loading, setLoading] = React.useState(false);
  const [wineList, setWineList] = React.useState(undefined);
  console.log(wineList);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/recommend.php", {
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded",
        //   "Access-Control-Allow-Origin": "*",
        // },
      })
      .then((res) => {
        const { result, data } = res.data;
        if (result === "SUCCESS") {
          setWineList(data);
        }
        setLoading(false);
      });
  }, []);

  return (
    <DefaultLayout>
      {matches ? (
        <>
          <div style={{ width: "100%" }}>
            <Grid
              container
              spacing={2}
              style={{
                width: "80%",
                margin: "0px auto",
                marginTop: 50,
                marginBottom: 70,
              }}
            >
              {loading ? (
                <>Loading中</>
              ) : (
                <>
                  {wineList?.map((wine) => (
                    <Grid item xs={3} key={wine.id}>
                      <WineCard data={wine} />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </div>
        </>
      ) : (
        <>
          <div style={{ width: "100%", height: "100%" }}>
            <Grid
              container
              spacing={2}
              style={{
                width: "80%",
                margin: "0px auto",
                marginTop: 10,
                marginBottom: 70,
              }}
            >
              {loading ? (
                <>Loading中</>
              ) : (
                <>
                  {wineList?.map((wine) => (
                    <Grid item xs={12} key={wine.id}>
                      <WineCard data={wine} />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </div>
        </>
      )}
    </DefaultLayout>
  );
};

export default Recommend;
