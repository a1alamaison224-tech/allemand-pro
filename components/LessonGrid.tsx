import React from 'react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface LessonGridProps {
  lessons: Lesson[];
  onSelectLesson: (id: string) => void;
}

const LessonCard: React.FC<{ lesson: Lesson; onSelect: (id: string) => void }> = ({ lesson, onSelect }) => {
  const lessonNumberMatch = lesson.title.match(/^Leçon\s(\d+)/);
  const lessonNumber = lessonNumberMatch ? lessonNumberMatch[1] : null;
  const cleanTitle = lesson.title.replace(/^Leçon\s\d+:\s/, '');

  return (
    <button
      onClick={() => onSelect(lesson.id)}
      className={`theme-${lesson.color} bg-white rounded-xl shadow-lg border border-slate-200 p-6 flex flex-col items-start text-left w-full h-full transform hover:-translate-y-2 transition-transform duration-300 group`}
      aria-label={`Commencer la leçon : ${cleanTitle}`}
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center bg-[var(--theme-color-light)] mb-4 transition-colors duration-300 group-hover:bg-[var(--theme-color)]">
        <i className={`${lesson.icon} text-2xl text-[var(--theme-color-dark)] transition-colors duration-300 group-hover:text-white`}></i>
      </div>
      <div className="flex-grow">
        {lessonNumber && (
          <p className="text-sm font-bold text-[var(--theme-color-dark)] uppercase tracking-wider">
            Leçon {lessonNumber}
          </p>
        )}
        <h3 className="text-xl font-bold text-slate-800 mt-1">{cleanTitle}</h3>
        <p className="text-slate-500 mt-2 text-sm">{lesson.description}</p>
      </div>
       <div className="mt-4 text-sm font-bold text-[var(--theme-color-dark)] transition-transform duration-300 group-hover:translate-x-1">
        Commencer la leçon →
      </div>
    </button>
  );
};

const LessonGrid: React.FC<LessonGridProps> = ({ lessons, onSelectLesson }) => {
  return (
    <div className="animate-fade-in">
        <div className="text-center mb-12">
             <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
                Toutes les leçons
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Commencez votre voyage pour maîtriser la prononciation allemande. Choisissez une leçon ci-dessous pour commencer.
            </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {lessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} onSelect={onSelectLesson} />
        ))}
      </div>
    </div>
  );
};

export default LessonGrid;
