import { useRouter } from "next/router";
import React from "react";
import { questionsDef } from "../../definitions/consts";
import { useAppSelector } from "../redux/hook";

// 質問に関する情報を管理し、全ての質問が終わったら結果のページに移動する
export const useQuestionData = () => {
  const router = useRouter();
  // 現在の質問番号（questionNum）を取得
  const questionNum = useAppSelector(
    (state: { question: { questionNum: number } }) => state.question.questionNum
  );

  // questionsDefという配列から現在の問題のデータを取得
  const currentQuestion = questionsDef?.[questionNum];
  // 全ての質問を回答したかどうか
  const finished = questionNum >= questionsDef.length;

  //タイムアウト時の処理と診断が終了した時の処理
  React.useEffect(() => {
    if (finished) {
      setTimeout(() => {
        const path = router.pathname;
        if(path.includes('aka')) {
            router.push("/shindan/resultAka");
        } else if(path.includes('shiro')) {
            router.push("/shindan/resultShiro");
        }
      }, 2000);
    }
}, [finished, router]);


  return { questionNum, currentQuestion, finished };
};
