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

            <main className="p-10 grid grid-cols-4 gap-10">

                <div className="rounded-xl bg-base-200 shadow-md col-span-1">
                    <img src="/images/banner.png" alt="Fyxren Banner" className="rounded-t-xl" />
                    <span className="bg-neutral text-neutral-content flex items-center py-2 px-5 gap-2">
                        <Heart />
                        Love ya
                    </span>
                    <div className="py-5 px-5">
                        <h2 className="card-title">Ben // Fyxren (18)</h2>
                        <p>Professional idiot, coder, gamer.</p>
                        <div className="flex flex-col gap-2 mt-5">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                The Netherlands
                            </div>
                            <div className="flex items-center gap-2">
                                <Cake className="h-5 w-5" />
                                March 25th, 2004
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl col-span-3 bg-base-200 shadow-md p-5 space-y-5">
                    <div className="space-y-2">
                        <h2 className="font-semibold text-2xl font-poly">Greetings 👋</h2>
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
                        <h2 className="font-semibold text-2xl font-poly">Stack 💻</h2>
                        <p>But.., what <span className="italic">stuff</span> do I use??</p>
                        <p className="font-medium text-sm">Wish I'd knew tbh.. ¯\_(ツ)_/¯</p>
                    </div>
                </div>

            </main>

        </div >
    );
}