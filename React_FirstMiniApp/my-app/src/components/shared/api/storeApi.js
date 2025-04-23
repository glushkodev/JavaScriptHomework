import axiosInstance from "./axiosinstance"


// Этот способ через фетч, ниже через аксис
// export const getCatalogItems = async () => {
// 	const response = await fetch('https://fakestoreapi.com/products')
// 	return await response.json()
// }

// export const getProductById = async (id) => {
// 	const response = await fetch (`https://fakestoreapi.com/products/${id}`)
// 	return await response.json()
// }


export const getCatalogItems = async () => {
	return await axiosInstance.get('/products')
}

export const getProductById = async (id) => {
	return await axiosInstance.get(`products/${id}`)
}