import type { Dispatch } from "react"
import { UserActionTypes, type User, type UserActions } from "../reducers/userReducer"

export const getUsers = () => {
	return async (dispath: Dispatch<UserActions>) => {
		dispath({type: UserActionTypes.USER_FETCHING})
		try {
			const resp = await fetch('https://jsonplaceholder.typicode.com/users')
			const users: User[] = await resp.json()
			// throw new Error('Ошибка')
			dispath({type: UserActionTypes.USER_SUCCESS, payload: users})
		} catch (error) {
			if (error instanceof Error) {
				dispath({type: UserActionTypes.USER_ERROR, payload: error.message})
			}
		}
	}
}