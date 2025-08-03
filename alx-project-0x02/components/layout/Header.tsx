
import Link from "next/link";


const Header = () => {
    return (
        <header className="bg-white flex justify-between items-center">
            <h1 className="text-xl font-bold">Header</h1>
            <nav className="space-x-4">
                <Link href={'/'} className="text-blue-600 hover:underline">Home</Link>
                <Link href='/home' className="text-blue-600 hover:underline">Page Home</Link>
                <Link href='/about' className="text-blue-600 hover:underline">About</Link>
                <Link href='/posts' className="text-blue-600 hover:underline">Posts</Link>
            </nav>
        </header>
    )
}

export default Header;