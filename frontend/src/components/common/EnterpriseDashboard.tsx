// components/EnterpriseDashboard.tsx
import React from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Cloud,
  Database,
  GitBranch,
  Globe,
  Layout,
  Lock,
  Server,
  ShieldCheck,
  Terminal,
  Users,
  Wrench,
} from "lucide-react";

/**
 * EnterpriseDashboard
 * - Repositions the hero visual from "learning/labs" to "enterprise IT operations"
 * - Adds IT solutions signals: Security, Cloud Ops, Service Desk, SLA, Compliance
 * - Keeps your existing theme (dark dashboard, subtle borders, same vibe)
 */
const EnterpriseDashboard = () => {
  return (
    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-[4/3] lg:aspect-square flex items-center justify-center banner_dashboard">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b96384]/5 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background z-0" />

      {/* Main Dashboard Container */}
      <div className="relative z-10 w-full h-auto bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5 mx-4 lg:mx-0 font-sans">
        {/* Header */}
        <div className="h-10 border-b border-white/10 bg-[#111] flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>

            <div className="h-4 w-[1px] bg-white/10 mx-2" />

            <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1">
              <Globe className="w-3 h-3" /> ap-south-1
            </span>

            <span className="ml-2 text-[10px] text-white/60 hidden sm:inline-flex items-center gap-1">
              <Layout className="w-3 h-3" /> Enterprise Ops Console
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-[10px] text-emerald-500 flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SLA Healthy
            </div>

            <div className="text-[10px] text-blue-400 flex items-center gap-1.5 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
              <ShieldCheck className="w-3 h-3" />
              Compliance
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 grid grid-cols-12 gap-4 bg-[#0a0a0a] min-h-[320px]">
          {/* Sidebar */}
          <div className="hidden sm:flex col-span-2 flex-col gap-4 border-r border-white/5 pr-4">
            <div className="w-8 h-8 rounded bg-[#b96384]/20 border border-[#b96384]/40 flex items-center justify-center">
              <Layout className="w-4 h-4 text-[#b96384]" />
            </div>

            <div className="space-y-3 mt-2">
              <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
                <Cloud className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
                <Server className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
                <Lock className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
                <Wrench className="w-3 h-3 text-muted-foreground" />
              </div>
            </div>

            <div className="mt-auto text-[10px] text-white/40 leading-snug">
              Monitoring • Security • Service Desk
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 sm:col-span-10 grid grid-cols-2 gap-4">
            {/* Top Stats */}
            <div className="col-span-2 grid grid-cols-3 gap-3">
              <StatCard
                label="Managed Clients"
                value="38"
                meterPct={72}
                meterClass="bg-[#b96384]"
                icon={<Users className="w-3.5 h-3.5 text-[#b96384]" />}
              />
              <StatCard
                label="Infra Health"
                value="99.2%"
                meterPct={92}
                meterClass="bg-emerald-500"
                icon={<Activity className="w-3.5 h-3.5 text-emerald-500" />}
              />
              <StatCard
                label="Security Alerts"
                value="3"
                meterPct={35}
                meterClass="bg-amber-500"
                icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
              />
            </div>

            {/* Cloud Ops */}
            <div className="col-span-2 sm:col-span-1 bg-[#111] border border-white/5 p-3 rounded-lg relative overflow-hidden group">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-medium text-white flex items-center gap-2">
                  <Cloud className="w-3 h-3 text-[#b96384]" /> Cloud Operations
                </span>
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              </div>

              <div className="space-y-2">
                <Row label="Kubernetes Clusters" value="4" tone="text-white" />
                <Row label="Active Services" value="26" tone="text-white" />
                <Row label="Uptime (30d)" value="99.95%" tone="text-emerald-500" />
              </div>

              <div className="absolute bottom-2 right-2 text-[10px] bg-[#b96384] text-white px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Manage enterprise workloads
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="col-span-2 sm:col-span-1 bg-[#111] border border-white/5 p-3 rounded-lg group relative">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-medium text-white flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3 text-blue-400" /> Security & Compliance
                </span>
                <Lock className="w-3 h-3 text-blue-400" />
              </div>

              <div className="space-y-2">
                <Row label="Threat Monitoring" value="Enabled" tone="text-emerald-500" />
                <Row label="Access Policies" value="RBAC" tone="text-white" />
                <Row label="Backups" value="Daily" tone="text-white" />
              </div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] bg-white text-black px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 whitespace-nowrap z-20">
                Secure, audit-ready operations
              </div>
            </div>

            {/* Service Desk / Consulting */}
            <div className="col-span-2 sm:col-span-1 bg-[#111] border border-white/5 p-3 rounded-lg relative overflow-hidden group">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-medium text-white flex items-center gap-2">
                  <Wrench className="w-3 h-3 text-[#b96384]" /> Managed Services
                </span>
                <Activity className="w-3 h-3 text-emerald-500" />
              </div>

              <div className="space-y-2">
                <Row label="Open Tickets" value="7" tone="text-white" />
                <Row label="Avg. Response" value="14m" tone="text-white" />
                <Row label="SLA Breaches" value="0" tone="text-emerald-500" />
              </div>

              <div className="absolute bottom-2 right-2 text-[10px] bg-[#b96384] text-white px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Support & consulting delivery
              </div>
            </div>

            {/* LMS (Integrated, small signal) */}
            <div className="col-span-2 sm:col-span-1 bg-[#111] border border-white/5 p-3 rounded-lg group relative">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-medium text-white flex items-center gap-2">
                  <Database className="w-3 h-3 text-purple-400" /> Training LMS
                </span>
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              </div>

              <div className="space-y-2">
                <Row label="Course Catalog" value="Available" tone="text-emerald-500" />
                <Row label="Progress Tracking" value="Enabled" tone="text-white" />
                <Row label="Certifications" value="Issued" tone="text-white" />
              </div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] bg-white text-black px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 whitespace-nowrap z-20">
                Training integrated into solutions
              </div>
            </div>

            {/* Terminal */}
            <div className="col-span-2 bg-[#000] border border-white/10 p-3 rounded-lg font-mono text-[10px] mt-1 relative group overflow-hidden">
              <div className="absolute top-2 right-2">
                <Terminal className="w-3 h-3 text-white/20" />
              </div>

              <div className="text-muted-foreground">
                <span className="text-[#b96384]">ops@nepasys</span>:~/enterprise# nepasys status --summary
              </div>

              <div className="mt-1 text-emerald-500/90">
                Cloud:&nbsp;&nbsp;Healthy&nbsp;&nbsp;|&nbsp;&nbsp;Security:&nbsp;&nbsp;Monitoring&nbsp;&nbsp;|&nbsp;&nbsp;Backups:&nbsp;&nbsp;OK
                <br />
                Services:&nbsp;26 running&nbsp;|&nbsp;Tickets:&nbsp;7 open&nbsp;|&nbsp;SLA:&nbsp;99.2%
              </div>

              <div className="absolute bottom-2 right-4 text-[10px] bg-[#b96384] text-white px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Enterprise readiness snapshot
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b96384] to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default EnterpriseDashboard;

/* ----------------------------- helpers ----------------------------- */

function StatCard(props: {
  label: string;
  value: string;
  meterPct: number;
  meterClass: string;
  icon: React.ReactNode;
}) {
  const { label, value, meterPct, meterClass, icon } = props;
  return (
    <div className="bg-[#111] border border-white/5 p-3 rounded-lg">
      <div className="flex items-center justify-between mb-1">
        <div className="text-[10px] text-muted-foreground">{label}</div>
        <div className="opacity-90">{icon}</div>
      </div>
      <div className="text-lg font-mono text-white">{value}</div>
      <div className="w-full bg-white/5 h-1 mt-2 rounded-full overflow-hidden">
        <div className={`h-full ${meterClass}`} style={{ width: `${meterPct}%` }} />
      </div>
    </div>
  );
}

function Row(props: { label: string; value: string; tone?: string }) {
  const { label, value, tone = "text-muted-foreground" } = props;
  return (
    <div className="flex items-center gap-2 text-[10px]">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
      <span className="text-muted-foreground">{label}</span>
      <span className={`ml-auto ${tone}`}>{value}</span>
    </div>
  );
}
