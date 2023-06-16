import React from "react";
import { NextPage } from "next";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import { useAppDispatch } from "../../src/redux/hook";
import { answerQuestion } from "../../src/redux/reducer/question";
import Image from "next/image";
import { useQuestionData } from "../../src/hooks/useQuestionData";
import { OutlineButton } from "../components/Button/outlineButton";

const styles = {
  wrapper: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
};

export const Aka: NextPage = () => {
  const dispatch = useAppDispatch();
  const { questionNum, currentQuestion, finished } = useQuestionData();

  const handleButtonClick = (value: number) => {
    dispatch(answerQuestion({ value }));
  };

  return (
    <DefaultLayout>
      <div style={styles.wrapper}>
        {finished ? (
          <>
            <Typography variant={"h5"} style={{ fontSize: "3rem" }}>
              Done!
            </Typography>
            <CircularProgress sx={{ mt: 3 }} />
          </>
        ) : (
          <>
            <Typography variant={"h4"}>
              Q{questionNum + 1}
              {"."}
              {currentQuestion?.q}
            </Typography>
            <Divider sx={{ mt: 2, mb: 4 }} />
            <Grid>
              <Image
                src={`/images/${String(questionNum + 1).padStart(2, "0")}.png`}
                alt="Top"
                layout="intrinsic"
                height="400px"
                width="400px"
              />
            </Grid>
            <Grid
              container
              sx={{ mt: 5 }}
              spacing={2}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <Grid item xs={6}>
                <OutlineButton
                  fullWidth={true}
                  href={"#"}
                  onClick={() => handleButtonClick(1)}
                  color="#CD1919"
                  style={{ fontSize: "1.5rem" }}
                >
                  {currentQuestion?.a1}
                </OutlineButton>
              </Grid>
              <Grid item xs={6}>
                <OutlineButton
                  fullWidth={true}
                  href={"#"}
                  onClick={() => handleButtonClick(2)}
                  color="#10B981"
                  style={{ fontSize: "1.5rem" }}
                >
                  {currentQuestion?.a2}
                </OutlineButton>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Aka;
