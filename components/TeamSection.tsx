
import React, { useState } from 'react';
import { MENTOR_DATA } from './teamdata.ts';
import MentorCard from './MentorCard.tsx';

const TeamSection: React.FC = () => {
  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const activeMain = MENTOR_DATA[activeMainIndex];
  const activeSub = activeMain.subCategories[activeSubIndex] || activeMain.subCategories[0];

  const handleMainChange = (idx: number) => {
    setActiveMainIndex(idx);
    setActiveSubIndex(0);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="relative pt-40 pb-10 px-12 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 reveal-anim">
            <h1 className="serif-title text-xl md:text-3xl text-slate-900 tracking-tighter mb-16">
              海外名校导师团队：<br/>
              <span className="text-amber-600 italic">深度参与规划服务与文书交付</span> 
            </h1>
            <p className="max-w-2xl text-xl font-medium text-slate-500 leading-relaxed border-l-4 border-slate-200 pl-10 italic">
              导师均来自哈佛、斯坦福、牛津、剑桥、LSE、UCLA、NUS、HKU、多伦多大学等世界知名院校，覆盖英美港新加等主流留学国家。 结合自身申请经验，为学生提供选课、科研、竞赛、选校、选专业及文书指导，确保申请材料高度匹配名校要求，提升录取竞争力
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end items-end reveal-anim" style={{animationDelay: '0.2s'}}>
             <div className="text-right">
                <div className="text-6xl font-black text-slate-900 mb-2">500+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">全球名校导师</div>
             </div>
          </div>
        </div>
      </header>

      {/* 沉浸式筛选与展示区 */}
      <section className="bg-white border-t border-slate-50 pt-10 pb-20 px-12">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* 极简垂直导航 */}
            <aside className="lg:w-96 flex-shrink-0 bg-slate-50/50 border-r border-slate-100 -ml-12 px-12 py-10">
              <div className="sticky top-40">
                <div className="mb-16">
                  <h3 className="text-[13px] font-black text-slate-900 uppercase tracking-[0.4em] mb-12 border-b border-slate-900 pb-4 inline-block">
                    Disciplines / 专业方向
                  </h3>
                  <div className="space-y-4">
                    {MENTOR_DATA.map((main, idx) => (
                      <button
                        key={main.name}
                        onClick={() => handleMainChange(idx)}
                        className={`group relative w-full flex items-center gap-8 p-7 transition-all duration-300 overflow-hidden ${
                          activeMainIndex === idx
                          ? 'bg-[#0f172a] text-white shadow-2xl shadow-slate-200'
                          : 'bg-transparent text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {/* The Amber Bar from Reference Image */}
                        {activeMainIndex === idx && (
                          <div className="absolute left-0 top-0 bottom-0 w-[10px] bg-amber-600"></div>
                        )}
                        
                        <div className={`flex items-center gap-6 ${activeMainIndex === idx ? 'pl-2' : 'pl-0'} transition-all duration-300`}>
                          <span className={`text-[18px] font-black tracking-tighter italic ${activeMainIndex === idx ? 'text-amber-500' : 'text-slate-300 group-hover:text-slate-500'}`}>
                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>
                          <span className="text-[18px] font-bold tracking-tight uppercase">{main.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* 内容中心 */}
            <div className="flex-grow">
              {/* 二级联动分类 - 横向大气滚动，居中对齐 */}
              <div className="mb-24 flex items-center justify-center gap-12 border-b border-slate-100 pb-8 overflow-x-auto no-scrollbar custom-scrollbar">
                {activeMain.subCategories.map((sub, idx) => (
                  <button
                    key={sub.name}
                    onClick={() => setActiveSubIndex(idx)}
                    className={`flex-shrink-0 transition-all relative ${
                      activeSubIndex === idx
                      ? 'text-[18px] font-bold text-slate-900'
                      : 'text-[16px] font-medium text-slate-800/80 hover:text-slate-900'
                    }`}
                  >
                    {sub.name}
                    {activeSubIndex === idx && (
                      <span className="absolute -bottom-8 left-0 w-full h-1 bg-amber-500"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* 导师按地区分层展示 */}
              <div className="space-y-40">
                {activeSub.regions.map((region) => (
                  <div key={region.regionName} className="reveal-anim">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                           <span className="w-8 h-[1px] bg-slate-300"></span>
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Region Focus / {region.regionName}</span>
                        </div>
                        <h2 className="serif-title text-3xl text-slate-900 tracking-tight font-bold italic">{region.regionName}</h2>
                      </div>
                      <div className="flex items-center gap-10">
                         <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7" />
                            </svg>
                         </div>
                      </div>
                    </div>

                    {region.mentors.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5px bg-slate-100 border border-slate-100">
                        {region.mentors.map((mentor, mIdx) => (
                          <div key={`${region.regionName}-${mIdx}`} className="bg-white">
                            <MentorCard mentor={mentor} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-40 bg-slate-50/50 text-center flex flex-col items-center">
                        <div className="w-16 h-[1px] bg-slate-200 mb-8"></div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] animate-pulse">
                          Synchronizing Institutional Data...
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};


export default TeamSection;
