
import React from 'react';
import { Mentor } from './teamtypes.ts';

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <div className="group relative bg-white border border-slate-300 p-8 mentor-档案-hover transition-all duration-700 flex flex-col h-full rounded-[4px]">
      {/* 学术印记背景 */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
         <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
         </svg>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-amber-500"></div>
             <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.3em]">海外名校导师团队</span>
          </div>
          <div className="text-[10px] font-black italic text-slate-300">#MULTIPLAN_ACADEMY</div>
        </div>

        <h4 className="serif-title text-3xl text-slate-900 mb-8 font-bold leading-tight group-hover:text-amber-700 transition-colors">
          {mentor.name}
        </h4>

        {/* 教育履历时间轴 */}
        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100">
          {mentor.education.doctor && (
            <div className="relative pl-9">
              <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-white bg-slate-900 flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold text-amber-600 uppercase tracking-widest mb-1">Doctorate Degree / 博士</span>
                <span className="text-sm font-semibold text-slate-800 leading-snug">{mentor.education.doctor}</span>
              </div>
            </div>
          )}
          
          {mentor.education.master && (
            <div className="relative pl-9">
              <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-white bg-slate-200 flex items-center justify-center z-10 group-hover:bg-amber-600 transition-colors">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-amber-600 transition-colors">Master's Degree / 硕士</span>
                <span className="text-sm font-semibold text-slate-800 leading-snug">{mentor.education.master}</span>
              </div>
            </div>
          )}
          
          {mentor.education.bachelor && (
            <div className="relative pl-9">
              <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-white bg-slate-100 flex items-center justify-center z-10">
                 <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Undergraduate / 本科</span>
                <span className="text-sm font-medium text-slate-600 leading-snug">{mentor.education.bachelor}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto pt-10 flex items-center justify-between border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
        <button className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
          留学多元规划
          <span className="w-6 h-[1px] bg-slate-900 group-hover/btn:w-10 transition-all"></span>
        </button>
        <div className="text-[10px] font-black text-slate-300">@2026</div>
      </div>
    </div>
  );
};

export default MentorCard;
