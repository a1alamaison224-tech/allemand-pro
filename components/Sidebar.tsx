import React from 'react';
import { lessons } from '../App'; // Assuming lessons are exported from App.tsx

interface Lesson {
  id: string;
  title: string;
  icon: string;
  color: string;
}

interface SidebarProps {
  lessons: Lesson[];
  activeLessonId: string | null;
  onSelectLesson: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ lessons, activeLessonId, onSelectLesson, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black/60 z-30 md:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      ></div>

      <aside className={`fixed top-0 left-0 h-full w-72 bg-slate-800 text-slate-200 flex flex-col z-40 transform transition-transform md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <header className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <i className="fa-solid fa-graduation-cap text-indigo-400"></i>
            <span>Prononciation DE</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">Pour les francophones</p>
        </header>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {lessons.map(lesson => {
            const isActive = lesson.id === activeLessonId;
            const title = lesson.title.startsWith("Leçon") ? lesson.title.split(/:\s(.+)/)[1] : lesson.title;
            const lessonNumber = lesson.title.match(/^Leçon\s(\d+)/);

            return (
              <button 
                key={lesson.id} 
                onClick={() => onSelectLesson(lesson.id)}
                className={`theme-${lesson.color} w-full text-left flex items-center gap-4 p-3 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? `bg-indigo-600 text-white font-semibold shadow-lg` 
                    : 'hover:bg-slate-700'
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${isActive ? 'bg-white/20' : 'bg-slate-700 group-hover:bg-slate-600'}`}>
                    <i className={`${lesson.icon} text-sm ${isActive ? 'text-white' : `text-[var(--theme-color)]`}`}></i>
                </div>
                <div className="flex-grow">
                    {lessonNumber && <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>Leçon {lessonNumber[1]}</span>}
                    <span className="block font-medium leading-tight">{title}</span>
                </div>
              </button>
            )
          })}
        </nav>
        
        <footer className="p-4 text-center text-xs text-slate-500 border-t border-slate-700">
            <p>&copy; {new Date().getFullYear()} - Apprentissage de l'allemand.</p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;