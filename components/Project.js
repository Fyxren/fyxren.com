import Link from "next/link";

const Project = ({ data }) => {
    return (
        <div className="bg-base-200 shadow-md rounded-xl p-5 flex flex-col items-center justify-between h-96 border-4 border-base-300">
            <div className="text-center">
                <div className="space-x-2">
                    <span className="badge badge-md badge-info shadow-md">{data.category}</span>
                    <span className={`badge badge-md capitalize shadow-md ${data.status === 'active' ? 'badge-success' : data.status === 'deprecated' ? 'badge-error' : 'badge-neutral'}`}>{data.status}</span>
                </div>
                <h3 className="text-2xl font-bold mt-1">{data.name}</h3>
                <p className="mt-2">{data.desc}</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">Stack</h4>
                <div className="flex justify-center mt-2 items-center gap-2">
                    {data.stack.map(val => {
                        return <div key={val} className="badge badge-lg badge-accent px-5 text-primary-content shadow-md">{val}</div>;
                    })}
                </div>
                <h4 className="text-xl font-semibold mt-5">Links</h4>
                <div className="flex justify-center mt-2 items-center gap-2">
                    {data.links.map(val => {
                        return (
                            <Link
                                key={val.title}
                                className="btn btn-sm capitalize shadow-md"
                                href={val.link}
                            >{val.title} ↗️</Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Project;