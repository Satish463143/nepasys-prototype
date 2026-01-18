import {Shield, Globe, FileJson, Box, Activity, Zap, Lock, Monitor} from 'lucide-react'
import globalEdge from '../../public/Global Edge.jpg'
import zeroTrust from '../../public/Zero Trust.jpg'

export const featuresOverview = [
    {
        icon: Globe,
        title: "Global Infrastructure",
        shortDesc: "Multi-region cloud environments",
        fullDesc: "Provision and operate cloud environments across multiple simulated global regions. Deploy workloads, test latency, and understand real-world regional behavior using production-style infrastructure.",
        image: globalEdge
    },
    {
        icon: Shield,
        title: "Secure Compute Platform",
        shortDesc: "Isolated, production-grade compute",
        fullDesc: "Run workloads on isolated compute environments with built-in security controls. Experience modern cloud security concepts including identity-based access, network isolation, and encrypted communication.",
        image: zeroTrust
    }
]
export const featuresList = [
    {
        icon: FileJson,
        title: "Infrastructure as Code",
        description: "Define and deploy cloud environments using configuration files and declarative workflows."
    },
    {
        icon: Box,
        title: "Isolated Lab Environments",
        description: "Each user operates in a secure, isolated cloud workspace designed for safe experimentation."
    },
    {
        icon: Activity,
        title: "Observability & Metrics",
        description: "Monitor system health, resource usage, logs, and performance in real time."
    },
    {
        icon: Zap,
        title: "Automated Provisioning",
        description: "Spin up full cloud environments in seconds with automated orchestration."
    },
    {
        icon: Lock,
        title: "Role-Based Access Control",
        description: "Manage permissions and access levels across users and environments."
    },
    {
        icon: Monitor,
        title: "Observability & Metrics",
        description: "Monitor system health, resource usage, logs, and performance in real time."
    }
]