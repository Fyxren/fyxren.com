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
        <div className="shadow-md navbar bg-base-200 rounded-xl">
            <div className="navbar-start">
                {/* Mobile */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Menu className="w-5 h-5" />
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52">
                        {NavItems.map(val => {
                            return (
                                <li key={val.name}>
                                    <Link href={val.href}>{val.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Mobile End */}
                <Link href="/" className="-ml-5 text-2xl font-bold normal-case lg:ml-0 btn btn-ghost logo-gradient font-poly">Fyxren</Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {NavItems.map(val => {
                        return (
                            <li key={val.name}>
                                <Link href={val.href}>{val.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="gap-1 normal-case btn btn-ghost">
                        <Palette className="w-5 h-5" />
                        <span className="hidden md:block">Change Theme</span>
                    </div>
                    <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
                        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
                            {Themes.map(val => {
                                return (
                                    <div key={val} className="overflow-hidden rounded-lg outline-base-content outline outline-2 outline-offset-2" data-set-theme={val} data-act-class="outline">
                                        <div data-theme={val} className="w-full font-sans cursor-pointer bg-base-100 text-base-content">
                                            <div className="grid grid-cols-5 grid-rows-3">
                                                <div className="flex col-span-5 row-span-3 row-start-1 gap-1 px-4 py-3">
                                                    <div className="flex-grow text-sm font-bold capitalize">
                                                        {val}
                                                    </div>
                                                    <div className="flex flex-wrap flex-shrink-0 gap-1">
                                                        <div className="w-2 rounded-full bg-primary" />
                                                        <div className="w-2 rounded-full bg-secondary" />
                                                        <div className="w-2 rounded-full bg-accent" />
                                                        <div className="w-2 rounded-full bg-neutral" />
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