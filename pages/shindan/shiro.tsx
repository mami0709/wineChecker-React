import React from "react";
import {NextPage} from "next";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Button, CircularProgress, Divider, Grid, Paper, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import {questionsDef, totalQuestionCount} from "../../definitions/consts";
import {answerQuestion} from "../../redux/reducer/question";
import {useRouter} from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";



export const Shiro: NextPage = () => {
	const router = useRouter();
	const questionNum = useAppSelector(state => state.question.questionNum);
	const dispatch = useAppDispatch();

	const matches = useMediaQuery("(min-width:767px)"); //レスポンシブ設定を定義

	  // 現在の質問(indexが配列長を超えた場合はundefined)
	const currentQuestion = questionsDef?.[questionNum];
	// 全ての質問を回答したかどうか
	const finished = questionNum >= questionsDef.length;


	//タイムアウト時の処理
	React.useEffect(() => {
		if (finished) {
			setTimeout(() => {
			router.push("/shindan/resultShiro");
			}, 2000);
		}
		}, [finished]);

	return (
		<DefaultLayout>
			{matches ? (
              <>
                {finished ? (
                    <>
                      <div style={{position: "absolute" ,top: "50%", left: "50%", transform: "translate(-50%,-50%)",fontFamily: "Comic Sans MS", }}>
                        <Typography variant={"h5"} style={{fontSize: "3rem"}}>
                          Done!
                        </Typography>
                        <CircularProgress sx={{mt: 3}} />
                      </div>
                    </>
                ) : (
                    <>
                      <div style={{
                        position: "absolute" ,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        fontFamily: "Comic Sans MS",
                      }}>
                        <Typography variant={"h5"} style={{fontSize: "3rem"}}>
                          質問({questionNum + 1}/{totalQuestionCount})  {/* 質問残数の表示 */}
                        </Typography>
                        <Divider sx={{mt: 2, mb: 4}} />
                        <Typography variant={"h5"} style={{fontSize: "5rem"}}>
                          {currentQuestion.q}  {/*  質問内容 */}
                        </Typography>
                        <Grid container sx={{mt: 5}} spacing={2} style={{marginLeft: "auto",marginRight: "auto"}}>
                          <Grid item xs={6}>
                            <Button
                                variant={"outlined"}
                                fullWidth
                                onClick={() => {
                                  dispatch(answerQuestion({value: 1}));
                                }}
                                style={{fontSize: "2rem"}}
                            >
                              {currentQuestion.a1}  {/* 回答１ */}
                            </Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => {
                                  dispatch(answerQuestion({value: 2}));
                                }}
                                style={{fontSize: "2rem"}}
                            >
                              {currentQuestion.a2}  {/* 回答２ */}
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </>
                )}
              </>
          ) : (
              <>
                {finished ? (
                    <>
                      <div style={{position: "absolute" ,top: "50%", left: "50%", transform: "translate(-50%,-50%)",fontFamily: "Comic Sans MS", }}>
                        <Typography variant={"h5"} style={{fontSize: "3rem"}}>
                          Done!
                        </Typography>
                        <CircularProgress sx={{mt: 3}} />
                      </div>
                    </>
                ) : (
                    <>
                      <div style={{position: "absolute" ,top: "55%", left: "50%", transform: "translate(-50%,-50%)",fontFamily: "Comic Sans MS", }}>
                        <Typography variant={"h5"} style={{fontSize: "2rem", paddingTop: "40px"}}>
                          質問({questionNum + 1}/{totalQuestionCount})  {/* 質問残数の表示 */}
                        </Typography>
                        <Divider sx={{mt: 2, mb: 4}} />
                        <Typography variant={"h5"} style={{fontSize: "2.5rem"}}>
                          {currentQuestion.q}  {/*  質問内容 */}
                        </Typography>
                        <Grid container sx={{mt: 5}} spacing={1} style={{marginLeft: "auto",marginRight: "auto"}}>
                          <Grid item xs={60}>
                            <Button
                                variant={"outlined"}
                                fullWidth
                                onClick={() => {
                                  dispatch(answerQuestion({value: 1}));
                                }}
                                style={{fontSize: "1.4rem"}}
                            >
                              {currentQuestion.a1}  {/* 回答１ */}
                            </Button>
                          </Grid>
                          <Grid item xs={60}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => {
                                  dispatch(answerQuestion({value: 2}));
                                }}
                                style={{fontSize: "1.4rem"}}
                            >
                              {currentQuestion.a2}  {/* 回答２ */}
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </>
                )}
              </>
          )}


		</DefaultLayout>
	)
}



export default Shiro;