import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a style={{color: router.pathname === "/" ? "red" : "blue"}}>Home</a>
            </Link><br/>
            <Link href="/about-us">
                <a style={{color: router.pathname === "/about-us" ? "red" : "blue"}}>About-us</a>
            </Link><br/>
        </nav>
    )
}