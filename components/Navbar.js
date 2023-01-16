import { Menu, Palette } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Themes = ['light', 'corn'];
const NavItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Links',
        href: '/links'
    }
];

const Navbar = () => {

    useEffect(() => {
        themeChange(false);
    });

    return (
        <div className="navbar bg-base-200 shadow-md rounded-xl">
            <div className="navbar-start">
                {/* Mobile */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Menu className="h-5 w-5" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                        {NavItems.map(val => {
                            return (
                                <li>
                                    <Link href={val.href}>{val.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Mobile End */}
                <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold logo-gradient">Fyxren</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItems.map(val => {
                        return (
                            <li>
                                <Link href={val.href}>{val.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="btn gap-1 normal-case btn-ghost">
                        <Palette className="h-5 w-5" />
                        <span>Change Theme</span>
                    </div>
                    <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
                        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
                            {Themes.map(val => {
                                return (
                                    <div className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2" data-set-theme={val} data-act-class="outline">
                                        <div data-theme={val} className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                            <div className="grid grid-cols-5 grid-rows-3">
                                                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                    <div className="flex-grow text-sm font-bold">
                                                        {val}
                                                    </div>
                                                    <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                        <div className="bg-primary w-2 rounded-full" />
                                                        <div className="bg-secondary w-2 rounded-full" />
                                                        <div className="bg-accent w-2 rounded-full" />
                                                        <div className="bg-neutral w-2 rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;