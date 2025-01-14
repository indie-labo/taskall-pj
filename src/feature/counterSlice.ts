// 必要なコンポーネントをインポート
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'


// Stateの型を定義
export interface CounterState {
  count: number;
}

// Stateの初期値を定義
const initialState: CounterState = { count: 0 }

// Sliceを定義
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 },
    addMount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    }
  }
})

// actionsをエクスポート
export const { increment, decrement, addMount } = counterSlice.actions;
// reducerをエクスポート
export default counterSlice.reducer;
// selectorをエクスポート
export const selectCount = (state: RootState) => state.counter.count;