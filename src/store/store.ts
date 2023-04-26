import {configureStore} from '@reduxjs/toolkit'
import CartSlice from '../reducers/cartSlice'



const store = configureStore({
   reducer:{
      Cart:CartSlice
   }
})

export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store