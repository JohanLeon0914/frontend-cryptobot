import { verify } from "jsonwebtoken"

export default function profileHandler(req, res){
    
    const {myTokenName} = req.cookies
    if(!myTokenName) {
        return res.status(401).json({error: 'No token'})
    }
    try {
        const user = verify(myTokenName, 'secret') //es el secret que cree en el auth/login cuando genere el token
        console.log(user)
        return res.json({email: user.email, username: user.username})
    } catch (error) {
        return res.status(401).json({error: 'Invalid token'})
    }
    
}