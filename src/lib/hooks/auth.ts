import type { SignUpModel } from "$lib/utils/interfaces/auth";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { writable } from "svelte/store";

export const store = writable(null)

const API_ROOT = 'http://localhost:3000'
export const signIn = async (username: string, password: string) => {
    if (username && password) {
        const body = { username, password }
      try {
         const result = await axios.post(`${API_ROOT}/auth/login`, body, {withCredentials: true}) as AxiosResponse
         return result
        } catch (e: unknown) {
            return e as AxiosError
      } 
    }
}

export const signUp = async (model: SignUpModel) => {
  try {
  return await axios.post(`${API_ROOT}/auth/signup`, model)
  } catch (e: unknown) {
    return e as AxiosError
  }
}

export const refresh = async () => {
   try {
      return await axios.get(`${API_ROOT}/auth/refresh`, {withCredentials: true})
   } catch (e: unknown) {
    return e as AxiosError
   }
}