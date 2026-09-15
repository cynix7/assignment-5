import type { TechType } from '../../Type/Type';
import { RxCross2 } from 'react-icons/rx';

const SelectedTech = ({ tech }: { tech: TechType }) => {
    return (
        <div className='flex items-center justify-between border border-[#E5E7EB] rounded-2xl p-2 m-2'>
            <div className='flex items-center gap-2'>
                <img src={tech.icon} alt={tech.name} className='w-12 h-12' />
                <div><h2 className='text-xs font-bold'>{tech.name}</h2>
                    <p className='text-[8px] text-gray-600'>{tech.category}</p></div>
            </div>
            <span><RxCross2 /></span>
        </div>
    );
};

export default SelectedTech;