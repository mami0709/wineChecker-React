import type { NextPage } from 'next'
import Head from 'next/head'
import {DefaultLayout} from "../layout/DefaultLayout";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography, Button} from "@mui/material";
import Link from "next/link";
import { relative } from 'path';
import { useAppDispatch } from '../redux/hook';
import { resetAnswers } from '../redux/reducer/question';
import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";



const Home: NextPage = () => {
  //resetの処理を宣言
	const dispatch = useAppDispatch();
  React.useEffect(() => {  //ページを開いた時にリセットする   
  dispatch(resetAnswers());
  }, []);

//レスポンシブ設定を定義
const matches = useMediaQuery("(min-width:767px)"); 


  return (
    
    <DefaultLayout>

    {matches ? (
      <>
        <Grid container spacing={2} sx={{}}>
        <div style={{position: "absolute" ,top: "50%", left: "50%", transform: "translate(-50%,-50%)",fontFamily: "Comic Sans MS", }}>
          <h1 style={{ 
            fontSize: "6rem", 
            textShadow: "0 0 0.1em rgba(255,255,255,0.05),0.01em 0.04em 0.03em rgba(255,255,255,0.4)", 
            color: "transparent",
            fontWeight: "bold",
            background : "rgba(0,0,0,1)",
            WebkitBackgroundClip : "text" }}>
              30秒でワイン診断！
          </h1>
          <p style={{ paddingBottom: "30px", fontSize: "2.5rem", fontFamily: "Hannotate SC", fontWeight: "bold", textShadow: "-1px -1px 0 white, -1px 0 0 white, -1px 1px 0 white,0 -1px 0 white,0 1px 0 red,1px -1px 0 white,  1px 0 0 white,  1px 1px 0 white" }}>
            会員登録不要！利用ももちろん無料！<br></br>
            ５つの質問に答えるだけで、あなたの<br></br>
            好みのワインをお探し致します！</p>
            <Link href={"/shindan"}>
            <Button 
              sx={{ 
                fontSize: "2.5rem", 
                fontFamily: "Hannotate SC",
                width: "350px",
                color: "#333",
                fontWeight: 700,
                backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)",
                borderRadius: "50vh",
                transition: "0.3s",
                ":hover":{opacity:0.8}
              }}>
              今すぐ診断
            </Button>
            </Link>
        </div>
        </Grid>
      </>
      ) : (
      <>

        <Grid container spacing={2} sx={{}}>
          <div style={{position: "absolute" ,top: "65%", left: "50%", transform: "translate(-50%,-50%)",fontFamily: "Comic Sans MS", }}>
            <h1 style={{ 
              fontSize: "3.5rem", 
              textShadow: "0 0 0.1em rgba(255,255,255,0.05),0.01em 0.04em 0.03em rgba(255,255,255,0.4)", 
              color: "transparent",
              fontWeight: "bold",
              background : "rgba(0,0,0,1)",
              WebkitBackgroundClip : "text" }}>
                30秒でワイン診断！
            </h1>
            <p style={{ paddingBottom: "30px", fontSize: "1.8rem", fontFamily: "Hannotate SC", fontWeight: "bold", textShadow: "-1px -1px 0 white, -1px 0 0 white, -1px 1px 0 white,0 -1px 0 white,0 1px 0 red,1px -1px 0 white,  1px 0 0 white,  1px 1px 0 white" }}>
              会員登録不要！<br></br>
              利用ももちろん無料！<br></br>
              ５つの質問に答える<br></br>
              だけであなたの好みの<br></br>
              ワインをお探し致します！</p>
              <Link href={"/shindan"}>
              <Button 
                sx={{ 
                  fontSize: "2rem", 
                  fontFamily: "Hannotate SC",
                  width: "300px",
                  color: "#333",
                  fontWeight: 700,
                  backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)",
                  borderRadius: "50vh",
                  transition: "0.3s",
                  marginBottom: "100px"
                }}>
                今すぐ診断
              </Button>
              </Link>
            </div>
          </Grid>
        </>
			)}
      
    </DefaultLayout>
  )
}


export default Home;