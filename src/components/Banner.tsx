import Logo from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="flex justify-between items-center container mx-auto">
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-extrabold">
                    Build Your Ideal
                    <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text"> Development Stack</span>
                </h1>
                <p className="text-[#475569]">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                    Explore Technologies
                    Learn More</p>
                <div>
                    <button className="bg-linear-to-r from-[#FF5722] to-[#D81B7E] text-white px-4 py-2 rounded-md mt-10 mr-3">Explore Technologies</button>
                    <button className="border border-[#E5E7EB] text-[#475569] px-12 py-2 rounded-md">Learn More</button>
                </div>
            </div>
            <img src={Logo} alt="Banner" />
        </div>
    );
};

export default Banner;