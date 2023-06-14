import type { NextPage } from "next";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import axios from "axios";

// Styles
const cardStyle = { textAlign: "left", height: 450 };
const gridStyle = {
  height: "100",
  width: "200",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const mediaStyle = { height: "100", width: "auto" };

// wineTypeに応じて背景色を変更
const WineType: React.FC<{ wineType: string }> = ({ wineType }) => {
  const backgroundColor =
    wineType === "赤ワイン"
      ? "red"
      : wineType === "白ワイン"
      ? "#10B981"
      : "grey";
  return (
    <span style={{ backgroundColor, color: "white", padding: "3px 10px" }}>
      {wineType}
    </span>
  );
};

const WineCard: React.FC<{ data }> = ({ data }) => {
  return (
    <Link href={`/shindan/${data.id}`}>
      <Card sx={cardStyle}>
        <CardActionArea>
          <Grid sx={gridStyle}>
            <CardMedia
              component="img"
              height="200"
              image={`${data.wine_image}`}
              sx={mediaStyle}
            />
          </Grid>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {data.wine_name}
            </Typography>
            <Typography sx={{ paddingTop: "5px" }}>
              <WineType wineType={data.wine_type} />
            </Typography>
            <Typography sx={{ paddingTop: "5px" }}>
              {data.wine_country} {data.winery}
            </Typography>
            <Typography variant="body2" sx={{ paddingTop: "5px" }}>
              {data.one_word}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const Recommend: NextPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [wineList, setWineList] = React.useState(undefined);

  // マウント時にワインリストを取得する
  React.useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/recommend/recommend.php", {})
      .then((res) => {
        const { result, data } = res.data;
        if (result === "SUCCESS") {
          setWineList(data);
        }
        setLoading(false);
      });
  }, []);

  const gridContainerStyle = {
    width: "80%",
    margin: "0px auto",
    marginTop: 50,
    marginBottom: 70,
  };

  return (
    <DefaultLayout>
      <div style={{ width: "100%" }}>
        <Grid container spacing={2} style={gridContainerStyle}>
          {loading ? (
            <>Loading中</>
          ) : (
            wineList?.map((wine) => (
              <Grid item xs={3} key={wine.id}>
                <WineCard data={wine} />
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </DefaultLayout>
  );
};

export default Recommend;
