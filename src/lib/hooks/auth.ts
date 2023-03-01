import type { SignUpModel } from "$lib/utils/interfaces/auth";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { writable } from "svelte/store";

export const store = writable(null)

export const refresh = async () => {
   try {

      return await axios.get(`${baseUrl}/auth/refresh`, {withCredentials: true})
   } catch (e: unknown) {
    return e as AxiosError
   }
}