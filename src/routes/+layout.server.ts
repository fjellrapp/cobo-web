import type { LayoutServerLoad } from './$types'
import type { User } from '$lib/utils/models/interfaces/user'
import { validateCookie } from '$lib/utils/guard/auth_guard'
import { fetchCurrentUser } from '$lib/utils/server/fetch/user/currentUser'
export const load: LayoutServerLoad = async ({route, params, fetch, cookies}) => {
    let user: User | null = null
    validateCookie(cookies, route.id)
    try {
        user = await fetchCurrentUser({fetch})
    } catch (e: unknown) {
        if (e instanceof Error) {
            throw e;
        }
        throw new Error(`${e}`)
    }

    return { route, params, user }
}