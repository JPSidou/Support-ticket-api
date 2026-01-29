import {randomUUID} from "node:crypto"

export function create({ req, res, database }){
    const { level, user_name, description } = req.body

    const ticket ={
        id: randomUUID(),
        level,
        user_name,
        description,
        status: "open",
        created_at: new Date(),
        updated_at: new Date()
    }
    database.insert("tickets", ticket)
    return res.writeHead("201").end(JSON.stringify(ticket))
}