import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const navItems=<>
        <li><Link prefetch={false} href="/foods">Foods</Link></li>
        <li><Link prefetch={false} href="/reviews">Reviews</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    <Image
                        src="/logo.png"
                        alt="Feastify Logo"
                        width={80}
                        height={80}
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;