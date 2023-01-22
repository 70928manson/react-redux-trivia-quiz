import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './slices/quizSlice';

const store = configureStore({
  reducer: {
    quizReducer
  }
})

export default store