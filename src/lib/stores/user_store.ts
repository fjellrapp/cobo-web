import type { User } from "$lib/utils/interfaces/user"
import { writable } from "svelte/store"

interface UserStore {
    user: User | null
}
const state: UserStore = {
    user: null
} 
export const user = writable(state)