import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = (params: any) => {
    return {
        route: params.route
    }
}