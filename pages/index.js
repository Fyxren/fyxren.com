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

      <main className="flex justify-center h-full p-5 -mt-20 text-center md:mt-auto lg:text-left lg:p-20">
        <div className="flex-col gap-20 hero-content lg:gap-40 lg:flex-row-reverse">
          <img src="/images/logo.png" className="w-40 duration-300 rounded-lg shadow-2xl md:w-52 lg:w-64 hover:-translate-y-10 hover:rotate-3 hover:scale-125" />
          <div>
            <h1 className="text-4xl lg:text-6xl font-poly flex-nowrap">Greetings, I'm <span className="font-bold">Fyxren</span>👋</h1>
            <p className="py-6 text-lg lg:text-2xl">Professional idiot, coder, gamer.</p>
            <Link className="btn btn-primary" href="/about">About me</Link>
          </div>
        </div>
      </main>

    </div >
  );
}
