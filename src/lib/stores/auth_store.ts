import { writable } from "svelte/store"

interface AuthenticationStore {
    isAuthenticated: boolean
}

const state: AuthenticationStore = {
    isAuthenticated: false
}

export const authStore = writable(state)