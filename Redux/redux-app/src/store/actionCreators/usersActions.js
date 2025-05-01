import { usersActionTypes } from "../reducers/usersReducer";

export const fetchUser = () => {
	return async (dispatch) => {
		try {
			dispatch({type: usersActionTypes.usersFetching })
			const resp = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await resp.json()
			dispatch({ type: usersActionTypes.usersSuccess, payload: data })
		} catch (error) {
			dispatch({type: usersActionTypes.userError,payload: error.message })
		}
	}
}