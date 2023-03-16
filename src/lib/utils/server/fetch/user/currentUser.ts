import type { User } from "$lib/utils/models/interfaces/user";

type FetchCurrentUserArgs = {
    /** Uses fetch from PageServerLod */
    fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response> 
}

export const fetchCurrentUser = async <T>({fetch}: FetchCurrentUserArgs): Response<T> => {
    try {
        const response: Response<T> = await fetch('api/user/current');
        const userResponse: User = await response.json()
        if (userResponse) {
            return userResponse
        }
        return null
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw e
            }
            throw new Error('Something happened during fetch of User in root', { cause: e})
        }
}