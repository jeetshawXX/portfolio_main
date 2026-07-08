import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
  id: "semantic-filtering-system",
  title: "AI-Powered Semantic Content Filtering System for Social Media",
  period: { start: "05.2026" },
  link: "https://github.com/jeetshawXX/semantic-filter",
  skills: [
    "Python",
    "Transformers",
    "NLP",
    "Browser Extensions",
    "FastAPI",
    "Machine Learning"
  ],

  description: `Building an AI-powered semantic filtering system for social media platforms.

- Analyzes titles, transcripts, comments, and metadata
- Uses transformer-based NLP models for semantic classification
- Detects toxicity, politics, ragebait, and contextual intent
- Designed browser extension integration pipeline
- Focused on semantic understanding beyond keyword matching`,
      
  logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Semantic+Filtering",
},
  {
  id: "distributed-kv-store",
  title: "Failure-Aware Distributed Key-Value Store",
  period: { start: "05.2026" },
  link: "https://github.com/jeetshawXX/kv-store",
  skills: [
    "C++",
    "Distributed Systems",
    "Replication",
    "Failure Detection",
    "Sockets",
    "Concurrency"
  ],
  isExpanded: true,

  description: `Built a distributed key-value store to explore distributed systems reliability and fault tolerance concepts.

- Implemented heartbeat-based node failure detection
- Designed quorum-inspired replication concepts
- Added concurrent request handling and persistence mechanisms
- Explored consistency and availability tradeoffs
- Simulated node crashes and recovery scenarios`,
      
  logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Distributed+KV+Store",
},

{
  id: "gate-exam-interface",
  title: "GATE Exam Interface Simulator",
  period: { start: "02.2026" },
  link: "https://github.com/jeetshawXX/Gate-pyq-exam-interface",
  skills: [
    "React",
    "JavaScript",
    "State Management",
    "UI Simulation",
    "Exam Systems"
  ],

  description: `Built a realistic GATE-style examination interface to simulate competitive exam environments.

- Implemented question navigation and palette tracking
- Added timer management and exam state persistence
- Designed real exam workflow interactions
- Supports PYQ-based practice sessions
- Focused on responsive and distraction-free UI`,
      
  logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Gate+Exam+Interface",
},

{
  id: "3d-developer-portfolio",
  title: "Interactive 3D Developer Portfolio",
  period: { start: "01.2026" },
  link: "https://github.com/jeetshawXX/portfolio3D",
  skills: [
    "Three.js",
    "React Three Fiber",
    "React",
    "Tailwind CSS",
    "Framer Motion"
  ],

  description: `Built an interactive 3D developer portfolio with immersive animations and real-time rendering.

- Integrated Three.js scenes with React Three Fiber
- Added animated transitions and interactive UI elements
- Optimized rendering performance for browsers
- Designed responsive modern portfolio experience
- Explored 3D web graphics and frontend rendering pipelines`,
      
  logo: "https://api.dicebear.com/7.x/shapes/svg?seed=3D+Portfolio",
},

{
  id: "neural-network-from-scratch",
  title: "Neural Network From Scratch + Gradient Debugger",
  period: { start: "04.2026" },
  link: "https://github.com/jeetshawXX/nn_from_scratch",
  skills: [
    "Python",
    "NumPy",
    "Machine Learning",
    "Backpropagation",
    "Gradient Descent",
    "Data Visualization"
  ],

  description: `Implemented a neural network framework from scratch using NumPy to deeply understand machine learning internals.

- Built manual forward and backward propagation
- Implemented activation functions and optimizers
- Added numerical gradient checking debugger
- Visualized training dynamics and gradients
- Compared analytical vs numerical gradients`,
      
  logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Neural+Network",
},
{
  id: "lsm-visualizer",
  title: "LSM Tree Performance & Incident Explainer",
  period: { start: "03.2026" },
  link: "https://github.com/jeetshawXX",
  skills: [
    "Storage Engines",
    "LSM Trees",
    "Systems Design",
    "Visualization",
    "Performance Analysis"
  ],

  description: `Built an educational systems visualization tool to explain LSM-tree internals and storage engine behavior.

- Visualized compaction and SSTable organization
- Demonstrated write amplification effects
- Simulated storage-engine performance tradeoffs
- Explained database internals interactively
- Designed for systems learning and debugging`,
      
  logo: "https://api.dicebear.com/7.x/shapes/svg?seed=LSM+Tree",
},
];
