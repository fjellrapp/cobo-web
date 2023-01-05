import type { User } from "$lib/utils/interfaces/user"
import axios from "axios"

const baseUrl = 'http://localhost:3000'
export const getUserByPhone = async (phone: string): Promise<User | Error | undefined> => {
   try {
    const result = await axios.get(`${baseUrl}/users/getByPhone/${phone}`)
    if (result.status === 200) {
        return result.data
    }
   } catch (e: unknown) {
        if (e instanceof Error) {
            return e
        }
        throw new Error(`Not an error, but was thrown: ${e}`)
   } 
}

export const getAuthenticatedUser = async (token: string): Promise<User | Error | undefined> => {
    try {
        console.log("the token", token)
        const result = await axios.get(`${baseUrl}/users/getCurrentUser`, {headers: { 'Authorization': `Bearer ${token}`}});
        if (result.status === 200) {
            return result.data
        }
    } catch (e: unknown) {
        if (e instanceof Error) {
            return e
        }
        throw new Error(`Not an error, but was thrown: ${e}`)
    }
}