import Link from "next/link";

const Footer = () => {
    return (
        <footer className="sticky top-[100vh] py-5 text-center text-secondary">
            Made with ❤️ by <Link href="https://github.com/Fyxren" className="duration-300 border-b-2 border-b-transparent hover:text-secondary hover:border-b-accent">Fyxren</Link>
        </footer>
    );
};

export default Footer;