import type { User } from "$lib/utils/interfaces/user"
import { writable } from "svelte/store"

interface UserStore {
    user?: User | null,
    loading?: boolean
}
const state: UserStore = {
    user: null,
    loading: true
} 
export const userStore = writable(state)