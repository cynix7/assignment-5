import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../assets/logo-text.png';
console.log(Logo);

const Nav = () => {
     
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between container mx-auto my-10 py-2.5">
                <h2 className="sm:hidden"><RxHamburgerMenu /></h2>
            <img src={Logo} alt="Logo" />
            <ul className="hidden sm:flex gap-4 items-center">
                <li className="text-pink-600"><a href="">Home</a></li>
                <li className="text-slate-600"><a href="">Technologies</a></li>
                <li className="text-slate-600"><a href="">Projects</a></li>
                <li className="text-slate-600"><a href="">About</a></li>
                <li className="text-slate-600 "><a href="">Contact</a></li>
            </ul>
            <div className="flex gap-4">
                <button className="cursor-pointer">Sign In</button>
                <button className="btn btn-active btn-secondary rounded-2xl">Sign Up</button>
            </div>
        </div>
        </nav>
    );
};

export default Nav;