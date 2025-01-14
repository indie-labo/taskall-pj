import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterSlicer from "../feature/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlicer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;