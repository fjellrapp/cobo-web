import { redirect, type Cookies } from "@sveltejs/kit"

const whitelist = ['/', '/register']
const isWhitelisted = (route: string) => {
    return whitelist.findIndex((r) => r === route) !== -1
}
export const validateCookie = (cookies: Cookies, route: string) => {
    if (isWhitelisted(route)) return
    const token = cookies.get('jwt')
    if (!token) {
        throw redirect(307, '/')
    }
}