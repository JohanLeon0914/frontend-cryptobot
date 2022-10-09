import { verify } from "jsonwebtoken"
import {serialize} from 'cookie'

export default function logoutHandler(req, res) {
    const {myTokenName} = req.cookies

    if(!myTokenName) {
        return res.status(401).json({error: 'No token'})
    }

    try {
        verify(myTokenName, 'secret')
        const serialized = serialize('myTokenName', null, { //pongo en null el token
            httpOnly: true, // esto es para que el navegador no lo muestre
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0, // el tiempo de expiracion lo coloco en 0 para que expire
            path: '/'
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json('Logout succesfully')
    } catch (error) {
        return res.status(401).json('invalid token')
    }

}