import React from 'react';

interface SkillProgressProps {
  skill: string;
  percentage: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ skill, percentage }) => {

    
  return (
    <div>
     
      <div className="w-full bg-gray-100 mt-1 rounded-md">
        <div
          className="bg-primary h-6"
          style={{width: `${percentage}%` }}
        ><p className='text-white px-2'>{skill}</p></div>
      </div>
    </div>
  );
}

export default SkillProgress;
