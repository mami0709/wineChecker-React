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

export const questionSlice = createSlice({   //createSlice=変数、初期値や値を更新する関数
	name: "question",
	initialState,
	reducers: {
	// 回答した時の処理
	answerQuestion: (state, action: PayloadAction<{  //PayloadAction = 起こったイベント
		value: number;
	}>) => {
		// 配列に回答を追加
		state.answers = [...state.answers, action.payload.value];  //action.payload = アクションに必要なデータ
		// 質問番号をインクリメント
		state.questionNum += 1;  //1を加算して代入
		state.totalPoint += action.payload.value;  //action.payloadの値を加算して代入

		state.rank = state.totalPoint < 5  //トータルポイントが5以上の時rank0の処理へ
			? 0
			: state.totalPoint < 7  //rankが1の処理へ
				? 1
				: state.totalPoint < 9
					? 2
						: 3;
	},

	// resetの処理を定義
    resetAnswers: (state) => {  //stateにinitialState(stateの初期値)を代入
		return initialState;
	},
	}
})

export const {answerQuestion, resetAnswers} = questionSlice.actions;
export default questionSlice.reducer;