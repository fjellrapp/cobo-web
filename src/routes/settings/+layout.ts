import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = (params) => {
    return {
        route: params.route
    }
    console.log("route", params.route)
}