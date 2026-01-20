import { Shield, Globe,Cloud, Wrench,Briefcase,GraduationCap, Activity, Monitor, Users, Network, Headphones, Linkedin, Twitter, Github, Server, Terminal, ShieldCheck, RefreshCw } from 'lucide-react'


export const featuresOverview = [
    {
        icon: Globe,
        title: "Multi-Region Cloud Architecture",
        shortDesc: "Reliable infrastructure across regions",
        fullDesc:
        "Design and operate cloud environments across multiple regions for availability, performance, and disaster recovery—built for enterprise reliability and business continuity.",
        image: "./Global Edge.jpg",
    },
    {
        icon: Shield,
        title: "Secure Cloud Compute",
        shortDesc: "Enterprise-grade security controls",
        fullDesc:
        "Run workloads with strong security foundations—identity and access management, network segmentation, encryption, and continuous monitoring to protect critical systems and data.",
        image: "./zero trust.jpg",
    },
];

export const ITSolutionsList = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Management",
    subTitle: "Scalability",
    description:
      "Design, deploy, and manage secure, scalable cloud environments tailored to enterprise workloads and business continuity."
  },
  {
    icon: Server,
    title: "Enterprise IT & Hardware Solutions",
    subTitle: "Reliability",
    description:
      "Comprehensive IT infrastructure, hardware procurement, networking, and system integration services for organizations."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    subTitle: "Protection",
    description:
      "Enterprise-grade security, monitoring, access control, and compliance practices to protect critical systems and data."
  },
  {
    icon: Wrench,
    title: "IT Consulting & Architecture",
    subTitle: "Strategy",
    description:
      "Professional IT consulting to align cloud, infrastructure, and technology decisions with long-term business goals."
  },
  {
    icon: Monitor,
    title: "Professional Training & LMS",
    subTitle: "Upskilling",
    description:
      "Structured enterprise training programs with LMS, progress tracking, and certifications to upskill teams effectively."
  },
  {
    icon: Activity,
    title: "Managed IT Services & Support",
    subTitle: "Continuity",
    description:
      "Ongoing monitoring, maintenance, and support services to ensure system stability, uptime, and operational efficiency."
  }
]

export const steps = [
  { id: 1, icon: Users, title: "Discover", description: "Understand business goals, systems, and requirements through a structured assessment." },
  { id: 2, icon: Network, title: "Architect", description: "Design secure cloud and infrastructure architecture aligned with scale and reliability." },
  { id: 3, icon: ShieldCheck, title: "Secure", description: "Implement access control, network policies, and best-practice security baselines." },
  { id: 4, icon: Wrench, title: "Implement", description: "Deploy infrastructure, integrate services, and configure environments with minimal disruption." },
  { id: 5, icon: Activity, title: "Monitor", description: "Set up observability—health, logs, metrics, and alerting for continuous visibility." },
  { id: 6, icon: Headphones, title: "Support", description: "Provide ongoing maintenance, optimization, and SLA-driven managed IT support." },
];


import { Course } from '@/types';

export const courses: Course[] = [
  {
    id: "1",
    title: "Cisco Certified Network Associate (CCNA)",
    level: "Beginner",
    status: "Live",
    description:
      "Certification-focused training covering IP addressing, subnetting, VLANs, routing fundamentals, and network security—ideal for individuals and team upskilling."
  },
  {
    id: "2",
    title: "Cisco Certified Network Professional (CCNP)",
    level: "Intermediate",
    status: "Live",
    description:
      "Advanced enterprise networking program covering OSPF, EIGRP, BGP, scalable switching, VPNs, automation, and security architecture."
  },
  {
    id: "3",
    title: "AWS Cloud Engineering",
    level: "Intermediate",
    status: "Coming Soon",
    description:
      "Role-based cloud engineering pathway: architecture, VPC, IAM, EC2, S3, automation, and DevOps practices—built for enterprise workloads."
  },
  {
    id: "4",
    title: "Microsoft Azure Cloud Engineering",
    level: "Intermediate",
    status: "Coming Soon",
    description:
      "Enterprise Azure foundation covering secure cloud design, identity, networking, compute, and governance—aligned with real business environments."
  }
];


export   const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]
export const operationsHighlights = [
  {
    icon: Activity,
    title: "Monitoring & Alerting",
    description: "Real-time metrics, logs, and alerts to detect issues early and maintain uptime."
  },
  {
    icon: ShieldCheck,
    title: "Security Baselines",
    description: "Access control, network policies, encryption, and best practices built into every environment."
  },
  {
    icon: Wrench,
    title: "Incident Response & Fixes",
    description: "Fast troubleshooting and resolution workflows to reduce downtime and risk."
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    description: "Performance tuning and cost optimization based on usage patterns and growth needs."
  }
];


export const reasons = [
    {
    icon: Briefcase,
    title: "Consulting-Led Approach",
    description:
      "We start with your requirements and constraints, then deliver a practical roadmap with measurable outcomes."
  },  
  {
    icon: Network,
    title: "Scalable Cloud & Infrastructure",
    description:
      "Architecture designed for growth—multi-environment deployments, performance optimization, and high availability."
  },
  {
    icon: ShieldCheck,
    title: "Security-First Delivery",
    description:
      "We implement strong identity, access control, network security, and best-practice protections across every solution."
  },
  {
    icon: Activity,
    title: "Reliability & Observability",
    description:
      "Monitoring, logging, and alerting are built-in—ensuring uptime, performance visibility, and faster incident response."
  },
  
  {
    icon: Wrench,
    title: "Managed Services & Support",
    description:
      "Ongoing maintenance, optimization, and SLA-focused support to keep systems stable and business-ready."
  },
  {
    icon: GraduationCap,
    title: "Training Integrated with LMS",
    description:
      "Upskill teams using structured programs with progress tracking, assessments, and certifications."
  }
]

