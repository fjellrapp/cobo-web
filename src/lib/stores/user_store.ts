import type { User } from "$lib/utils/interfaces/user"
import { writable } from "svelte/store"

interface UserStore {
    user: User | null,
    isAuthenticated: boolean
}
const state: UserStore = {
    user: null,
    isAuthenticated: false
} 
export const user = writable(state)