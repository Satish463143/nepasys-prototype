// CourseCard.tsx (your same card, unchanged — just pasted cleanly)
import { ArrowRight, Timer } from "lucide-react";
import { Course } from "@/types";

const CourseCard = ({ course }: { course: Course }) => {
  const isLive = course.status === "Live";

  return (
    <div className="group relative p-8 bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-2xl hover:border-[#b96384]/30 dark:hover:border-[#b96384]/30 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div
          className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
            course.level === "Beginner"
              ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
              : "bg-purple-500/10 text-purple-500 border border-purple-500/20"
          }`}
        >
          {course.level}
        </div>

        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
            isLive
              ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
              : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
          }`}
        >
          {isLive ? (
            <>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {course.status}
            </>
          ) : (
            <>
              <Timer className="w-3 h-3" />
              {course.status}
            </>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 font-[Space_Grotesk] leading-tight group-hover:text-[#b96384] transition-colors">
        {course.title}
      </h3>

      {course.description && (
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          {course.description}
        </p>
      )}

      <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary/70 group-hover:text-[#b96384] transition-colors">
        {isLive ? "View details" : "Get Notified"}
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#b96384]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default CourseCard;
