// since there's no dynamic data here, we can prerender
import  "$lib/utils/interceptors/axios"
import type { PageServerLoad } from "./$types"


// it so that it gets served as a static asset in production
export const load: PageServerLoad = ({params}: any) => {
    return {
        params
    }
}

