import { redirect, type Cookies } from "@sveltejs/kit"

export const validateCookie = (cookies: Cookies) => {
    const token = cookies.get('jwt')
    if (!token) {
        throw redirect(307, '/')
    }
}