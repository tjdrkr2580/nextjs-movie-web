import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter();
    return (
        <div>
        <nav>
            <Link href="/">
                <a className={`${router.pathname === "/" ? "active" : ""}`}>Home</a>
            </Link><br/>
            <Link href="/about-us">
                <a className={`${router.pathname === "/about-us" ? "active" : ""}`}>About-us</a>
            </Link><br/>
            <hr/>
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                h1 {
                    color: blue;
                }
                .active {
                    color: white;
                }
            `}</style>
        </nav>
        </div>
    )
}