import Head from "next/head";
import Link from "next/link";

export default function FourOhFour() {
    return (
        <div className="select-none flex flex-col h-screen justify-center items-center bg-[#2068b4] text-white p-5">
            <Head>
                <title>404 - Fyxren.com</title>
                <meta name="description" content="Not found on Fyxren - Professional idiot, coder, gamer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <div className="text-6xl font-medium md:text-8xl">( ._.)</div>
                <h1 className="mt-10 font-sans text-3xl md:text-5xl">
                    I don't know WHAT
                    <br />
                    the ***** is going on.
                </h1>
                <div className="mt-5 space-y-2 md:text-xl">
                    <p>But the page got lost.</p>
                    <p>Anyway , smash the weird code to <span className="line-through tooltip" data-tip="Get home of course, I'm not cruel...">get more information.</span></p>
                    <div className="text-xl font-semibold md:text-2xl">
                        <Link href="/">
                            Error: <span>404</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};