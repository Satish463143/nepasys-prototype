// LMSCapabilities.tsx
import React from "react";
import {
  BarChart3,
  CheckCircle2,
  GraduationCap,
  Users,
  ClipboardCheck,
  Layers,
} from "lucide-react";

type Capability = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Track learner progress by course, module, and lab completion.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessments",
    description: "Validate skills with quizzes, lab checks, and structured rubrics.",
  },
  {
    icon: GraduationCap,
    title: "Certifications",
    description: "Issue completion certificates aligned with learning outcomes.",
  },
  {
    icon: Users,
    title: "Team Dashboards",
    description: "Monitor cohorts and teams with role-based reporting insights.",
  },
  {
    icon: Layers,
    title: "Learning Paths",
    description: "Role-based paths (Cloud, DevOps, Network) for clear progression.",
  },
  {
    icon: CheckCircle2,
    title: "Structured Catalog",
    description: "Organized course catalog with levels, outcomes, and prerequisites.",
  },
];

const LMSCapabilities = () => {
  return (
    <div className="relative">
      {/* Small heading line */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            LMS Capabilities
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            A structured platform—not just course cards.
          </p>
        </div>

        {/* subtle separator */}
        <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
      </div>

      {/* Capabilities grid */}
      <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-slate-50/70 dark:bg-[#0a0a0a]/70 backdrop-blur-sm p-6 md:p-8 shadow-xl dark:shadow-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b96384]/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-[#b96384] transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#b96384]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* tiny note */}
        <p className="mt-6 text-xs text-muted-foreground/70 italic">
          Detailed LMS views (dashboard, course detail, certificate pages) are
          implemented as dedicated screens—this section highlights the platform
          scope on the landing page.
        </p>
      </div>
    </div>
  );
};

export default LMSCapabilities;
