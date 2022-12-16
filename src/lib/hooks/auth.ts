import type { SignUpModel } from "$lib/utils/interfaces/auth";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { writable } from "svelte/store";

export const store = writable(null)

export const signIn = async (username: string, password: string) => {
    if (username && password) {
        const body = { username, password }
      try {
         const result = await axios.post(`/auth/login`, body, {withCredentials: true}) as AxiosResponse
         return result
        } catch (e: unknown) {
            return e as AxiosError
      } 
    }
}

export const signUp = async (model: SignUpModel) => {
  try {
    delete model.passwordConfirm
    return await axios.post(`/auth/signup`, model)
  } catch (e: unknown) {
    return e as AxiosError
  }
}

export const refresh = async () => {
   try {
      return await axios.get(`/auth/refresh`, {withCredentials: true})
   } catch (e: unknown) {
    return e as AxiosError
   }
}