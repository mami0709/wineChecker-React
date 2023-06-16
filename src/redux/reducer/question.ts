import {createSlice, PayloadAction} from "@reduxjs/toolkit";

//型定義
interface QuestionState {
	totalPoint: number;
	questionNum: number;
	answers: number[];
	rank: number;
}

//初期値の代入
const initialState: QuestionState = {
	totalPoint: 0,
	questionNum: 0,
	answers: [],
	rank: 0,
};

export const questionSlice = createSlice({ 
	// createSlice関数を呼び出して、名前、初期状態、およびreducersを定義
	name: "question",
	initialState,
	reducers: {
	// 質問に答えたときのロジックを定義
	answerQuestion: (state, action: PayloadAction<{ 
		value: number;
	}>) => {
		// 配列に回答を追加
		state.answers = [...state.answers, action.payload.value]; // valueをanswers配列に追加
		// questionNumとtotalPointを更新
		state.questionNum += 1;
		state.totalPoint += action.payload.value;

		// totalPointに基づいてrankを設定
		state.rank = state.totalPoint < 5  //totalPointが5以上の時rank0の処理へ
			? 0
			: state.totalPoint < 7  //rankが1の処理へ
				? 1
				: state.totalPoint < 9
					? 2
						: 3;
	},

	// resetの処理を定義
    resetAnswers: (state) => { 
		return initialState; //直接initialState（初期状態）を返す処理
	},
	}
})

export const {answerQuestion, resetAnswers} = questionSlice.actions;
export default questionSlice.reducer;
