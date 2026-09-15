import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div>
            <hr className='text-[#E5E7EB]' />
        <div className='grid grid-cols-5 gap-4 p-4 border-b border-[#E5E7EB] mt-4 container mx-auto'>
            <div className='col-span-2'>
                <img className='mb-3 pb-1' src={Logo} alt="Logo" />
                <p className='text-xs text-[#64748B] mb-4'>Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <ul className='flex gap-4 mt-2 text-sm font-semibold'>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
            <div>
                <h2 className='font-bold text-sm mb-2'>PRODUCT</h2>
                <ul className='text-xs text-[#64748B] gap-2 flex flex-col'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
            <div>
                <h2 className='font-bold text-sm mb-2'>COMPANY</h2>
                <ul className='text-xs text-[#64748B] gap-2 flex flex-col'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div>
                <h2 className='font-bold text-sm mb-2'>LEGAL</h2>
                <ul className='text-xs text-[#64748B] gap-2 flex flex-col'>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        
        <div className='flex items-center justify-between p-4 container mx-auto'>
            <p className='text-[10px] text-[#94A3B8] mb-10'>© 2026 Dev Stack. All rights reserved.</p>
            <ul className='flex gap-4 text-[10px] text-[#94A3B8] mb-10'>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
            </ul>
        </div>
        </div>
    );
};

export default Footer;