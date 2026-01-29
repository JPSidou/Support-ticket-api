export function update({req, res, database}){
    const {id} = req.params
    const { user_name, description } = req.body
    database.update("tickets", id, { 
        user_name, 
        description,
        updated_at: new Date() 
    })
    return res.end()
}