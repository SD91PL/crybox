import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
import diffFormSlice from './features/diffFormSlice'

export const store = configureStore({
	reducer: { theme: themeReducer, diffForm: diffFormSlice },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
