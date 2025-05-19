import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../fb/initial'

/**
 * @typedef {object} UserReducer
 * @property {import('firebase/auth').User|null} user
 * @property {boolean} loading
 * @property {null|string} error
 */

/**
 * @type {UserReducer}
 */
const initialState = {
	user: null,
	loading: false,
	error: null
}

export const googleAuth = createAsyncThunk(
	'user/googleAuth',
	async () => {
		const provider = new GoogleAuthProvider()
		const { user } = await signInWithPopup(auth, provider)
		return user
	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearUser (state) {
			state.user = null
		}
	},
	extraReducers: (builder) =>
		builder
			.addCase(googleAuth.pending, (state) => {
				state.loading = true
			})
			.addCase(googleAuth.fulfilled, (state, action) => {
				state.loading = false
				state.user = action.payload			
			})
			.addCase(googleAuth.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
				state.user = null
			})
})

const userReducer = userSlice.reducer
export default userReducer