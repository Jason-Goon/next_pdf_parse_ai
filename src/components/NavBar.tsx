import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-700 text-black">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="https://twitter.com" className="text-black flex items-center">
                    <span className="ml-2">Ai chat + pdf parse</span>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;