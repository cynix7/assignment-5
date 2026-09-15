import { useState } from 'react';
import type { TechType } from '../../Type/Type';
import { CiStar } from 'react-icons/ci';
interface TechProf {
    tech: TechType;
    selectedTech: TechType[];
    setSelectedTech: React.Dispatch<React.SetStateAction<TechType[]>>;
}

const TechCard = ({ tech, selectedTech, setSelectedTech}: TechProf) => {

    
const isSelected = selectedTech.some((selected) => selected.id === tech.id);

    const handleAddToStack = (tec: TechType) => {
        selectedTech=[...selectedTech, tec];
        setSelectedTech(() => selectedTech);
    
    };

    return (
        <div className='border border-[#E5E7EB] rounded-2xl'>
            <div className='flex items-center justify-between m-3 p-3'>
                <img src={tech.icon} alt={tech.name} className='w-12 h-12' />
                <h2 className='badge badge-soft badge-info rounded-4xl'>{tech.badge}</h2>
            </div>
            <div className='flex flex-col gap-2 p-2 mx-1.5'>
                <h2 className='text-lg font-bold'>{tech.name}</h2>
                <p className='text-xs text-gray-600'>{tech.description}</p>
            </div>
            <div className='flex items-center justify-between p-2 mx-1.5 mt-2'>
                <h2 className='text-[#475569] bg-[#F1F5F9] text-xs font-semibold border border-white rounded-md py-1 px-2'>{tech.category}</h2>
                <h2 className='text-[#64748B] text-xs font-medium'>{tech.difficulty}</h2>
                <h2 className='flex items-center'><CiStar/>{tech.rating}</h2>
            </div>
            <div className='flex items-center justify-center p-2'>
                <button className="text-xs bg-black text-white py-2 w-full mx-3 rounded-xl my-3" 
                onClick={() => handleAddToStack(tech)} 
                disabled={isSelected}>
                {isSelected ? "Added" : "Add to Stack"}
            </button>
            </div>
        </div>
    );
};

export default TechCard;