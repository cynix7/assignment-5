import { use, useState } from 'react';
import type { TechType } from '../../Type/Type';
import TechCard from './TechCard';
import SelectedTech from './SelectedTech';
import { toast } from 'react-toastify';

const Technologies = ({ techPromise }: { techPromise:Promise<TechType[]> }) => {
     
    const technologies = use(techPromise);
    const [selectedTech, setSelectedTech] = useState<TechType[]>([]);
    const handleRemoveAll = () => {
        setSelectedTech([]);
        toast.error(`Stack cleared!`, {
            position: "bottom-right",
            autoClose: 5000
        });
    }

    return (
        <div className="container mx-auto mt-4 flex flex-col gap-3">
            <h2 className='text-3xl font-bold'>Explore the <span className='bg-linear-to-r from-[#D81B7E] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h2>
            <p className='text-sm text-gray-600'>Pick one technology per category to build your ideal stack.</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
               <div className='sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 pb-4'>
                 {technologies.map(tech => (
                <TechCard key={tech.id} tech={tech} 
                selectedTech={selectedTech} setSelectedTech={setSelectedTech} ></TechCard>
            ))}
               </div>
               <div>
                <div className='border border-[#E5E7EB] rounded-2xl w-full'>
                <h2 className='font-bold mt-3 mx-4'>Your Stack</h2>
                <p className='mx-4 text-[#94A3B8] text-xs'>{selectedTech.length===0 ? 'No technology selected yet' : `${selectedTech.length} technology selected`}</p>
                <div>
                    {selectedTech.length === 0 ? (
                        <p className='text-[#94A3B8] text-xs mx-4 my-2 border-dashed border border-[#94A3B8] py-4 rounded-2xl text-center'>Your stack is empty</p>
                    ) : (
                        selectedTech.map((tech) => (
                            <SelectedTech key={tech.id} tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></SelectedTech>
                        ))
                    )}
                </div>
                {
                    selectedTech.length ===0 ?"":<div className='flex items-center justify-center p-2'>
                <button className="btn btn-outline btn-error w-full rounded-xl mx-2.5" onClick={handleRemoveAll}>Remove All</button>
            </div>
                }

               </div>
               </div>
            </div>
        </div>
    );
};

export default Technologies;