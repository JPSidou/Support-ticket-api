import { parseRoutePath } from "../utils/parseRoutePath.js"
import { ticketRoutes } from "./ticketRoutes.js"

export const routes = [...ticketRoutes].map((route)=>({
    ...route,
    path: parseRoutePath(route.path)
}))