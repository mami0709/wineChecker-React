import React, { useCallback, useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import { Grid, Typography, Box, Button, Container } from "@mui/material";
import CustomTextField from "../components/CustomTextField";

const WineRegistration = () => {
  const [wineInfo, setWineInfo] = useState({
    wine_name: "",
    english_wine_name: "",
    winery: "",
    wine_country: "",
    wine_type: "",
    wine_image: "",
    years: "",
    producer: "",
    wine_url: "",
    one_word: "",
    breed: "",
    capacity: "",
    comment: "",
  });

  const customLabels = {
    comment: "詳細コメント",
    wine_name: "ワイン名",
    winery: "ワイナリー",
    wine_type: "ワインの種類(赤ワイン、白ワインetc)",
    wine_image: "ワイン画像のURL",
    wine_country: "産地",
    wine_url: "ワインのURL",
    one_word: "おすすめワード",
    english_wine_name: "ワイン名(英名)",
    years: "生産年",
    producer: "製造者",
    breed: "ぶどうの種類",
    capacity: "容量",
  };

  const handleChange = useCallback((name, value) => {
    setWineInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    console.log("handleSubmit function is triggered");
    e.preventDefault();
    console.log(wineInfo);
    axios
      .post("http://localhost:8080/newPost.php", wineInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  return (
    <DefaultLayout>
      <Container sx={{ width: "60%", padding: "50px 0" }}>
        <Typography
          variant="h4"
          sx={{ paddingBottom: "30px", fontWeight: "bold" }}
        >
          おすすめのワインを投稿
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={3}>
            {Object.keys(wineInfo).map((key) => (
              <Grid item xs={12} key={key}>
                <CustomTextField
                  name={key}
                  label={customLabels[key]}
                  value={wineInfo[key]}
                  handleChange={handleChange}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#f59e0b",
                  "&:hover": {
                    backgroundColor: "#f59f0bc5",
                  },
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                投稿する
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default WineRegistration;
