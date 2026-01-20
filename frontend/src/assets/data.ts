import { Shield, Globe, FileJson, Box, Activity, Zap, Lock, Monitor, BookOpenCheck, FlaskConical, Network, Rocket, Eye, Linkedin, Twitter, Github, Server, Terminal, ShieldCheck, RefreshCw } from 'lucide-react'


export const featuresOverview = [
    {
        icon: Globe,
        title: "Global Infrastructure",
        shortDesc: "Multi-region cloud environments",
        fullDesc: "Provision and operate cloud environments across multiple simulated global regions. Deploy workloads, test latency, and understand real-world regional behavior using production-style infrastructure.",
        image: './Global Edge.jpg'
    },
    {
        icon: Shield,
        title: "Secure Compute Platform",
        shortDesc: "Isolated, production-grade compute",
        fullDesc: "Run workloads on isolated compute environments with built-in security controls. Experience modern cloud security concepts including identity-based access, network isolation, and encrypted communication.",
        image:'./zero trust.jpg'
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
export const steps = [
    { id: 1, icon: BookOpenCheck, title: "Learn", description: "Understand cloud concepts with real infrastructure examples." },
    { id: 2, icon: FlaskConical, title: "Practice", description: "Interact with isolated labs to apply your knowledge." },
    { id: 3, icon: Network, title: "Architect", description: "Plan deployments and design cloud systems." },
    { id: 4, icon: Activity, title: "Simulate", description: "Test workloads in real-world conditions safely." },
    { id: 5, icon: Rocket, title: "Deploy", description: "Launch applications to cloud-like environments." },
    { id: 6, icon: Eye, title: "Observe", description: "Monitor system behavior and metrics in real time." },
];

import { Course } from '@/types';

export const courses: Course[] = [
    {
        id: '1',
        title: 'Cisco Certified Network Associate',
        level: 'Beginner',
        status: 'Live',
        description: 'Build a strong foundation in networking. Learn IP addressing, subnetting, VLANs, routing protocols (OSPF, RIP), network security, and VPN basics.'
    },
    {
        id: '2',
        title: 'Cisco Certified Network Professional',
        level: 'Intermediate',
        status: 'Live',
        description: 'Advance your skills to the enterprise level. Master complex routing (OSPF, EIGRP, BGP), scalable switching, VPNs, network automation, and security architecture.'
    },
    {
        id: '3',
        title: 'AWS Cloud Engineering',
        level: 'Intermediate',
        status: 'Coming Soon',
        description: 'Learn to architect, deploy, and manage scalable cloud solutions on Amazon Web Services. Master EC2, S3, IAM, VPC, Lambda, CloudFormation, and DevOps workflows.'
    },
    {
        id: '4',
        title: 'Microsoft Azure Cloud Engineering',
        level: 'Intermediate',
        status: 'Coming Soon',
        description: 'Build secure, enterprise-grade cloud infrastructure with Microsoft Azure.'
    }
];

export   const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]
export const labs = [
        {
            icon: Server,
            title: "Real Cloud Environments",
            description: "Live VMs, containers, and Kubernetes clusters provisioned on-demand."
        },
        {
            icon: Terminal,
            title: "CLI & Architecture Focus",
            description: "Master SSH, Docker, and networking tools in production-style setups."
        },
        {
            icon: ShieldCheck,
            title: "Guided Real-World Tasks",
            description: "Solve complex problems by breaking and fixing real systems."
        },
        {
            icon: RefreshCw,
            title: "Safe & Isolated Labs",
            description: "Personal sandbox environments with automated state reset."
        }
    ]
