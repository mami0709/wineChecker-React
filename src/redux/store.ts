import {configureStore} from "@reduxjs/toolkit";
import question from "./reducer/question";
import { createStore, combineReducers } from "redux";

	export const store = configureStore({
		reducer: {
			question,
		}
	})

	

	// import totalPoint from "./reducer/question";
	// // import b from "./reducers/b";

	// const appReducer = combineReducers({
	// 	totalPoint,
	// 	// b
	// });

	// export const RootReducer = (state: any,totalPoint: AnyAction) => {
	// 	if (state.totalPoint === "CLEAR_STATE") {
	// 		state = undefined;
	// 	}
	// 	return question(state, totalPoint);
	// };

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;