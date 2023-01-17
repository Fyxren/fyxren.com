import Head from "next/head";
import Navbar from "../components/Navbar";
import ProjectList from "../assets/projects";
import Project from "../components/Project";
import Footer from "../components/Footer";

export default function Projects() {
    return (
        <div className="flex flex-col h-screen max-h-screen select-none">
            <Head>
                <title>Projects - Fyxren.com</title>
                <meta name="description" content="Fyxren's Projects - Professional idiot, coder, gamer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="p-5 lg:p-10">
                <h1 className="text-3xl font-bold lg:text-4xl lg:text-center">Projects</h1>
                <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2 lg:gap-10 lg:grid-cols-3">
                    {ProjectList.map(val => {
                        return <Project data={val} key={val.name} />;
                    })}
                </div>
            </main>

            <Footer />

        </div >
    );
}