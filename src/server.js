import http from "node:http"

import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routesHandler } from "./middlewares/routesHandler.js"

async function listener( req, res ){
    await jsonHandler(req,res)
    routesHandler(req, res)
    res.end()
} 

http.createServer(listener).listen(3333)