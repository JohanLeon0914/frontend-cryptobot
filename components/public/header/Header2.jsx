import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Cookies from 'universal-cookie'
const cookies = new Cookies()

function Navbar() {
    const logout = async () => {
        try {
            const response = await axios.post('/api/auth/logout')
            router.push('/login') //lo redirijo al login
        } catch (error) {
            router.push('/login') //lo redirijo al login
        }
    }
    const cookie = cookies.get('token')
    const [cookieState, setCookieState] = useState(false)

    useEffect(() => {
        if (cookie) {
            setCookieState(true)
        }
        else {
            setCookieState(false)
        }
    }, [cookie])

    const navRef = useRef();


    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

        return (
            <header>
                <h3>Cryptobot</h3>
                <nav ref={navRef}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Link href='/client/cryptos'>
                        <a>My cryptos</a>
                    </Link>
                    <Link href='/client/news'>
                        <a>News</a>
                    </Link>
                    <Link href='/client/profile'>
                        <a>Profile</a>
                    </Link>
                    <Link href='/client/qa'>
                        <a>Q&A</a>
                    </Link>
                    { !cookieState ? <Link href='/loginAdmin'>
                        <a>Admin login</a>
                    </Link> : <Link href='/Logout'>
                        <a>Logout</a>
                    </Link>
                    }
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        );
    

}

export default Navbar;