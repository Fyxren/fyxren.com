import Link from "next/link";

const LinkCard = ({ data }) => {
    return (
        <Link
            href={data.link}
            style={{
                backgroundColor: data.color.background === null ? '' : data.color.background,
                color: data.color.text === null ? '' : data.color.text
            }}
            className="flex flex-col items-center gap-2 p-5 duration-300 border-4 shadow-md xl:flex-row bg-base-200 rounded-xl border-base-300 hover:bg-base-300"
        >
            <h2 className="text-xl font-semibold"><span>{data.category}</span> {data.name}</h2>
            <p className="flex text-center"><span className="hidden mr-2 xl:block">• </span>{data.desc}</p>
        </Link>
    );
};

export default LinkCard;