
import jwt from 'jsonwebtoken'
import {serialize} from 'cookie'

export default function loginHandler(req, res) {

    const {email, password} = req.body

    if(email === 'admin@local.local' && password === 'admin') {
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // el tiempo de expiracion del token (30 dias)
            email: 'admin@local.local',
            username: 'johan'
        }, 'secret') //genero el jwt como me lo tienen que enviar desde backend
        const serialized = serialize('myTokenName', token, {
            httpOnly: true, // esto es para que el navegador no lo muestre
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30, // el tiempo de expiracion 30 dias
            path: '/'
        }) //serializo el token
        
        res.setHeader('Set-Cookie', serialized) //el header de la peticion
        return res.json('login succesfully')
    } // return res.json(token) es lo mas facil y probablemente lo que hagamos XD
    
    return res.status(401).json('login failed')
    
}