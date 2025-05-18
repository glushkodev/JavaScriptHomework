import { makeAutoObservable } from "mobx"
import usersService from "../services/usersService"

/**
 * @typedef {object} Company
 * @property {string} name
 * @property {string} catchPhrase
 * @property {string} bs
 */

/**
 * @typedef {object} Geo
 * @property {number} lat
 * @property {number} lng
 */

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} suite
 * @property {string} city
 * @property {string} zipcode
 * @property {Geo} geo
 */

/**
 * @typedef {object} User
 * @property {number} id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {Address} address
 * @property {string} phone
 * @property {string} website
 * @property {Company} company
 */

class UsersStore {
	/**
	 * @typedef {User[]}
	 */
	items = []

	constructor() {
		makeAutoObservable(this)
	}

	async findAll() {
		const resp = await usersService.findAll()
		const data = await resp.json()
		this.setAll(data)
	}

	setAll(items) {
		this.items = items
	}
}

const usersStore = new UsersStore()
export default usersStore