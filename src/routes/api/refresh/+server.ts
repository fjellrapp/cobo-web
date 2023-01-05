import { refresh } from "$lib/hooks/auth"
import { json } from "@sveltejs/kit"
import type { RequestHandler } from "../login/$types"


export const GET = (async () => {
     const refreshed = await refresh()
     return json(refreshed)

}) satisfies RequestHandler