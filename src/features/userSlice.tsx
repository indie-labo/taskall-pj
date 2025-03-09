// 必要なコンポーネントをインポート
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'


// Stateの型を定義
export interface UserState {
  isLogin: boolean;
  role: string | null;
}

// Stateの初期値を定義
const initialState: UserState = {
    isLogin: false,
    role: null
}

// Sliceを定義
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLogin = true;
      state.role = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.role = null;
    }
  }
})

// actionsをエクスポート
export const { login, logout } = userSlice.actions;
// reducerをエクスポート
export default userSlice.reducer;
// selectorをエクスポート
export const selectUser = (state: RootState): UserState => state.user;