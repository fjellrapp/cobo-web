import type { User } from "$lib/utils/interfaces/user"
import axios from "axios"

export const getUser = async (phone: string): Promise<User | Error | undefined> => {
   try {
    const result = await axios.get(`/users/getByPhone/${phone}`)
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