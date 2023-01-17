import Link from "next/link";

const Project = ({ data }) => {
    return (
        <div className="flex flex-col items-center justify-between p-5 border-4 shadow-md bg-base-200 rounded-xl border-base-300">
            <div className="text-center">
                <div className="space-x-2">
                    <span className="shadow-md badge badge-md badge-info">{data.category}</span>
                    <span className={`badge badge-md capitalize shadow-md ${data.status === 'active' ? 'badge-success' : data.status === 'deprecated' ? 'badge-error' : 'badge-neutral'}`}>{data.status}</span>
                </div>
                <h3 className="mt-1 text-2xl font-bold">{data.name}</h3>
                <p className="mt-2">{data.desc}</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="pt-5 text-xl font-semibold md:mt-auto">Stack</h4>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                    {data.stack.map(val => {
                        return <div key={val} className="px-5 shadow-md badge badge-lg badge-accent text-primary-content">{val}</div>;
                    })}
                </div>
                <h4 className="mt-5 text-xl font-semibold">Links</h4>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                    {data.links.map(val => {
                        return (
                            <Link
                                key={val.title}
                                className="capitalize shadow-md btn btn-sm"
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