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
                    <div className="card-body">
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



            </main>

        </div >
    );
}