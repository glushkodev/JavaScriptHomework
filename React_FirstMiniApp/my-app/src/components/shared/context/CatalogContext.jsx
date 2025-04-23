import { createContext, useContext, useState } from "react";
import { getCatalogItems } from "../api/storeApi";


const CatalogContext = createContext()

export const ContextProvider = ({ children }) => {
	const [catalog, setCatalog] = useState([])

	const getProductById = async (id) => {
		if (!catalog.length) {
			const { data } = await getProductById(id)
			return data
		} else {
			return catalog.find(item => item.id === id)
		}
	}

	const findAll = async () => {
		if (!catalog.length) {
			const { data } = await getCatalogItems()
			setCatalog(data)
		}
	}

	return (
		<CatalogContext.Provider value={{ catalog, getProductById, findAll}}>
			{children}
		</CatalogContext.Provider>
	)
}


/**
 * @typedef {Object} catalogItem
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {{rate: number, count: number}} rating
 */

/**
 * 
 * @returns {{catalog: catalogItem[], getProductById: (id: number) => catalogItem, findAll: () => void}}
 */


export const useCatalog = () => {
	return useContext(CatalogContext)
}
