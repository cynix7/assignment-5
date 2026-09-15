import { use } from 'react';
import type { TechType } from '../../Type/Type';
import TechCard from './TechCard';

const Technologies = ({ techPromise }: { techPromise:Promise<TechType[]> }) => {
     
    const technologies = use(techPromise);
    return (
        <div className="container mx-auto mt-4 flex flex-col gap-3">
            <h2 className='text-3xl font-bold'>Explore the <span className='bg-linear-to-r from-[#D81B7E] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h2>
            <p className='text-sm text-gray-600'>Pick one technology per category to build your ideal stack.</p>
            <div className='grid grid-cols-4 gap-4 mt-4'>
               <div className='col-span-3 grid grid-cols-3 gap-4'>
                 {technologies.map(tech => (
                <TechCard key={tech.id} tech={tech}></TechCard>
            ))}
               </div>
               <div>
                <h2>Your Stack</h2>
               </div>
            </div>
        </div>
    );
};

export default Technologies;