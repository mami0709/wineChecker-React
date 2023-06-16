import type {TypedUseSelectorHook} from "react-redux";
import type {AppDispatch, RootState} from "./store";
import {useDispatch, useSelector} from "react-redux";

// 型を付与したカスタムフックを定義。
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
