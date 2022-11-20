import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Menu, X } from 'lucide-react';
import NavItems from '../assets/NavItems';
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="px-10 pt-5 pb-5 shadow-lg bg-th-background-light rounded-b-3xl">
            <div className="relative flex items-end justify-between">
                <div className="flex items-end ">
                    <Link href="/" className="text-3xl font-bold font-poly logo-gradient">Fyxren</Link>
                    <ul className="items-center hidden ml-10 space-x-8 text-lg lg:flex">
                        {NavItems.map((item, index) => {
                            return (
                                <li
                                    className={`text-lg font-semibold tracking-wide transition-colors ${router.asPath === item.path
                                        ? "text-th-accent"
                                        : "hover:text-th-accent-dark text-th-primary duration-300"
                                        }`}
                                    key={index}
                                >
                                    <Link href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <ThemeChanger />
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Mobile Navigation"
                        className="p-2 rounded"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 border-th-accent-light border-2 rounded shadow-xl bg-th-background-light">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-3xl font-semibold font-poly logo-gradient">Fyxren</span>
                                    </div>
                                    <div className="flex justify-center items-center align-middle">
                                        <ThemeChanger />
                                        <button
                                            aria-label="Close Mobile Menu"
                                            title="Close Mobile Menu"
                                            className="p-2 -mr-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        {NavItems.map((item, index) => {
                                            return (
                                                <li
                                                    className={`tracking-wide transition-colors duration-300 ${router.asPath === item.path
                                                        ? "text-th-accent"
                                                        : "hover:text-th-accent-dark text-th-primary"
                                                        }`}
                                                    key={index}
                                                >
                                                    <Link href={item.path}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;