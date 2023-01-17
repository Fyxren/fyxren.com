import Head from "next/head";
import Navbar from "../components/Navbar";
import ProjectList from "../assets/projects";
import Project from "../components/Project";

export default function Projects() {
    return (
        <div className="flex flex-col h-screen max-h-screen">
            <Head>
                <title>Projects - Fyxren.com</title>
                <meta name="description" content="Fyxren's Projects - Professional idiot, coder, gamer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="p-10">
                <h1 className="font-bold text-4xl text-center">Projects</h1>
                <div className="grid grid-cols-3 py-5 gap-10">
                    {ProjectList.map(val => {
                        return <Project data={val} key={val.name} />;
                    })}
                </div>


            </main>

        </div >
    );
}