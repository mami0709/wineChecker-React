import React, { useCallback, useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import { Grid, Typography, Box, Button, Container } from "@mui/material";
import CustomTextField from "../components/CustomTextField";
import { useRouter } from "next/router";

const initialWineInfo = {
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
};

const customLabels = {
  comment: "詳細コメント",
  wine_name: "ワイン名*",
  winery: "ワイナリー*",
  wine_type: "ワインの種類(赤ワイン、白ワインetc)*",
  wine_image: "ワイン画像のURL*",
  wine_country: "産地*",
  wine_url: "ワインのURL*",
  one_word: "おすすめワード",
  english_wine_name: "ワイン名(英名)",
  years: "生産年",
  producer: "製造者",
  breed: "ぶどうの種類*",
  capacity: "容量",
};

// 必須入力フィールドの名前を配列で定義
const notNullFields = [
  "wine_name",
  "winery",
  "wine_type",
  "wine_image",
  "wine_country",
  "wine_url",
  "breed",
];

const WineRegistration = () => {
  const [wineInfo, setWineInfo] = useState(initialWineInfo);
  const [errors, setErrors] = useState({});
  const router = useRouter();

	// 入力フィールドの状態を見る。変更されると`setWineInfo`が書き変わる。
  const handleChange = useCallback((name, value) => {
    setWineInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

	// バリデーションチェック
  const validate = useCallback(() => {
    let tempErrors = {};
    let formIsValid = true;

    notNullFields.forEach((field) => {
      if (!wineInfo[field]) {
        formIsValid = false;
        tempErrors[field] = "入力必須項目が未入力です。入力してください";
      }
    });

    if (wineInfo.capacity && !Number.isInteger(Number(wineInfo.capacity))) {
      formIsValid = false;
      tempErrors["capacity"] = "半角数字で入力して下さい";
    }

    setErrors(tempErrors);
    return formIsValid;
  }, [wineInfo]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();// フォームのデフォルトの送信動作を防ぐ

      if (validate()) {
        console.log(wineInfo);
				// バリデーションが成功した場合、非同期でサーバーにデータを送信
        axios
          .post("http://localhost:8080/recommend/newPost.php", wineInfo, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
						// サーバーからの応答にエラーが含まれていれば、そのエラーメッセージをアラートとして表示
            console.log(response.data);
            if (response.data.error) {
              alert(response.data.error);
            } else {
							// エラーがなければ成功メッセージをアラートとして表示し、ユーザーを「/newPost/PostComplete」ページにリダイレクト
              alert(response.data.message);
              router.push("/newPost/PostComplete");
            }
          })
          .catch((error) => {
            console.error(`Error: ${error}`);
          });
      }
    },
    [validate, wineInfo, router]
  );

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
                  error={!!errors[key]} // このキーにエラーがある場合、trueになる
                  helperText={errors[key]} // 画面にエラーメッセージの表示
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
