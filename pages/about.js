import { Cake, Heart, MapPin } from "lucide-react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="flex flex-col h-screen max-h-screen">
            <Head>
                <title>About - Fyxren.com</title>
                <meta name="description" content="About Fyxren - Professional idiot, coder, gamer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="p-10">
                <h1 className="text-4xl font-bold text-center">About</h1>

                <div className="grid grid-cols-3 gap-10 py-5">
                    <div className="col-span-1 shadow-md rounded-xl bg-base-200">
                        <img src="/images/banner.png" alt="Fyxren Banner" className="rounded-t-xl" />
                        <span className="flex items-center gap-2 px-5 py-2 bg-neutral text-neutral-content">
                            <Heart />
                            Love ya
                        </span>
                        <div className="px-5 py-5">
                            <h2 className="card-title">Ben // Fyxren (18)</h2>
                            <p>Professional idiot, coder, gamer.</p>
                            <div className="flex flex-col gap-2 mt-3">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    The Netherlands
                                </div>
                                <div className="flex items-center gap-2">
                                    <Cake className="w-5 h-5" />
                                    March 25th, 2004
                                </div>
                            </div>
                            {/* Discord Activity */}
                            <div className="mt-5">
                                <h3 className="text-lg font-semibold">Discord Activity</h3>
                                <p className="text-sm font-medium">Soon I guess.. ¯\_(ツ)_/¯</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 p-5 space-y-5 shadow-md rounded-xl bg-base-200">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold font-poly">Greetings 👋</h2>
                            <ul className="list-disc list-inside">
                                <li>My name is <span className="font-semibold">Ben // Fyxren</span></li>
                                <li><span className="font-semibold">100% male</span> & toaster, <span className="font-semibold">18</span> years old, and still attending <span className="font-semibold">highschool</span></li>
                                <li>Writes some <span className="font-semibold">code</span>, plays some <span className="font-semibold">games</span></li>
                                <li>Hobbying with the <span className="font-semibold">piano</span></li>
                                <li>Watches <span className="font-semibold">anime</span> and reads <span className="font-semibold">manga</span></li>
                            </ul>
                            <p className="">
                                I start whatever I want and rarely finish something basically.
                                Currently mostly in buggy websites, like this one and Discord bots, like McData.
                            </p>
                            <p className="italic">
                                That's about it, my life isn't too interesting to be honest.
                                Besides, if I've forgotten it, it wasn't too important..., right?
                            </p>

                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold font-poly">Stack 💻</h2>
                            <p>But.., what <span className="italic">stuff</span> do I use??</p>
                            <p className="text-sm font-medium">Wish I'd knew tbh.. ¯\_(ツ)_/¯</p>
                        </div>
                    </div>
                </div>

            </main>

        </div >
    );
}