import axios from "axios";
import { writable } from "svelte/store";

export const store = writable(null)

const API_ROOT = 'http://localhost:3000'
export const signIn = async (username: string, password: string) => {
    if (username && password) {
        const body = { username, password }
      try {
         const result = await axios.post(`${API_ROOT}/auth/login`, body)
        console.log(result)
        } catch (e) {
        console.log("e", e)
      } 
    }
}