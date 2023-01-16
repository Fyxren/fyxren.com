import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Head>
        <title>Home - Fyxren.com</title>
        <meta name="description" content="The website of Fyxren - Professional idiot, coder, gamer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex justify-center h-full">
        <div className="hero-content flex-col lg:flex-row-reverse gap-40">
          <img src="/images/logo.png" className="w-64 rounded-lg shadow-2xl hover:-translate-y-10 hover:rotate-3 hover:scale-125 duration-300" />
          <div>
            <h1 className="text-6xl font-poly">Greetings, I'm <span className="font-bold">Fyxren</span>👋</h1>
            <p className="py-6 text-2xl">Professional idiot, coder, gamer.</p>
            <Link className="btn btn-primary" href="/about">About me</Link>
          </div>
        </div>
      </main>

    </div >
  );
}
