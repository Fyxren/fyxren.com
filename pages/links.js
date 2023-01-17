import Head from "next/head";
import Navbar from "../components/Navbar";
import LinkList from "../assets/links";
import Link from "../components/Link";
import { data } from "autoprefixer";

export default function Links() {
    return (
        <div className="flex flex-col h-screen max-h-screen">
            <Head>
                <title>Links - Fyxren.com</title>
                <meta name="description" content="Fyxren's Socials - Professional idiot, coder, gamer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="p-10">
                <h1 className="text-4xl font-bold text-center">Socials & Links</h1>
                <div className="grid grid-cols-3 gap-10 py-5">
                    {LinkList.map(val => {
                        return <Link data={val} key={val.name} />;
                    })}
                </div>


            </main>

        </div >
    );
}