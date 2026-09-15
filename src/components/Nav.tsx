import Logo from '../assets/logo-text.png';
console.log(Logo);

const Nav = () => {
     
    return (
        <div className="flex justify-between container mx-auto my-10">
            <img src={Logo} alt="Logo" />
            <ul className="flex gap-4 items-center">
                <li className="text-pink-600">Home</li>
                <li className="text-slate-600">Technologies</li>
                <li className="text-slate-600">Projects</li>
                <li className="text-slate-600">About</li>
                <li className="text-slate-600 ">Contact</li>
            </ul>
            <div className="flex gap-4">
                <button>Sign In</button>
                <button className="btn btn-active btn-secondary rounded-2xl">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;