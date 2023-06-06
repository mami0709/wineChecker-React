import React from "react";
import { NextPage } from "next";
import { DefaultLayout } from "../../src/layout/DefaultLayout";
import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../../src/redux/hook";
import { answerQuestion } from "../../src/redux/reducer/question";
import Image from "next/image";
import { useQuestionData } from "../../src/hooks/useQuestionData";

const styles = {
  wrapper: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontFamily: "HiraMinProN-W3",
  },
  button: (color: string) => ({
    fontSize: "1.5rem",
    borderColor: color,
    backgroundColor: "#white",
    color: color,
    fontFamily: "HiraMinProN-W3",
    "&:hover": {
      borderColor: color,
      backgroundColor: color,
      color: "white",
    },
  }),
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
            <Typography
              variant={"h5"}
              style={{ fontSize: "3rem", fontFamily: "HiraMinProN-W3" }}
            >
              Done!
            </Typography>
            <CircularProgress sx={{ mt: 3 }} />
          </>
        ) : (
          <>
            <Typography variant={"h4"} style={{ fontFamily: "HiraMinProN-W3" }}>
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
                <Button
                  variant={"outlined"}
                  fullWidth
                  onClick={() => handleButtonClick(1)}
                  style={styles.button("#CD1919")}
                >
                  {currentQuestion?.a1}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleButtonClick(2)}
                  style={styles.button("#10B981")}
                >
                  {currentQuestion?.a2}
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Aka;
