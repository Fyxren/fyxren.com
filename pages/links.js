import Head from "next/head";
import Navbar from "../components/Navbar";
import LinkList from "../assets/links";
import Link from "../components/Link";
import Footer from "../components/Footer";

export default function Links() {
    return (
        <div className="flex flex-col h-screen max-h-screen select-none">
            <Head>
                <title>Links - Fyxren.com</title>
                <meta name="description" content="Fyxren's Socials - Professional idiot, coder, gamer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="p-5 md:p-10">
                <h1 className="text-3xl font-bold lg:text-4xl lg:text-center">Socials & Links</h1>
                <div className="grid grid-cols-1 gap-5 py-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {LinkList.map(val => {
                        return <Link data={val} key={val.name} />;
                    })}
                </div>
            </main>

            <Footer />

        </div >
    );
}