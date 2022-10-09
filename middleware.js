import { NextResponse } from "next/server";
import {jwtVerify} from 'jose' //importo este modulo porque aqui no sirve jwt

export async function middleware(request) { //antes de pintar los componentes se ejecuta esta funcion
    
    const jwt = request.cookies.get('myTokenName')
   
        if(!jwt){ // tambien puede usar jwt === undefiened
            return NextResponse.redirect(new URL('/login', request.url))//si no existe el jwt lo redirijo al login
        }

        try { // si el token existe, tengo que comprobar que sea valido
            const { payload } = await jwtVerify(
                jwt,
                new TextEncoder().encode("secret")) //codifico en secre del token para verificar si el jwt es valido
                return NextResponse.next() // si el token es valido dejo que continue a la pagina que estaba visitando
        } catch (error) {
            console.log(error)
            return NextResponse.redirect(new URL('/login', request.url))//si entra en este error, el token es invalido, y lo redirigo al login
        }
}

export const config = { // en config voy a colocar todas las rutas que quiero proteger
    matcher: [ // es un arreglo de strings que contiene las rutas protegidas
        '/dashboard',
        '/profile',
        '/admin/:path*' //con /:path* protego a todas las rutas de admin, por ejemplo admin/profile, admin/createQA
    ]
}