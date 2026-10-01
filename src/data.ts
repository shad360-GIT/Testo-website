import { Service, Project, Testimonial, Benefit, ProcessStep } from './types';
import technamicsShowcase from './assets/images/technamics_showcase.svg';
import shorphicShowcase from './assets/images/shorphic_ecommerce_showcase_1790824893314.jpg';
import vortexApparelShowcase from './assets/images/vortex_apparel_showcase.svg';

export const HERO_ASSET = '/src/assets/images/hero_abstract_glass_1783974567137.jpg';
export const WORKSPACE_ASSET = '/src/assets/images/agency_creative_space_1783974579948.jpg';

export const SERVICES: Service[] = [
  {
    id: 'ux-ui',
    title: 'UX/UI Design',
    description: 'We craft digital interfaces that are intuitive, immersive, and visually stunning. Focused on user-centric layouts and high conversion.',
    icon: 'Figma',
    link: '#contact',
    features: ['User Research & Journey Mapping', 'High-Fidelity Wireframes', 'Interactive Micro-interactions', 'Design Systems (Figma)']
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'From concept to MVP. We shape products that align user desires with core business goals, ensuring deep market product fit.',
    icon: 'Layers',
    link: '#contact',
    features: ['MVP Architecture', 'Prototyping & Validation', 'Feature Prioritization', 'Usability Testing']
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'We carve distinct, memorable brand identities that stand out in crowded digital markets, establishing an emotional bond.',
    icon: 'Sparkles',
    link: '#contact',
    features: ['Logo & Visual Styleguide', 'Brand Strategy & Positioning', 'Typography & Palette Design', 'Marketing Assets']
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Ultra-fast, responsive web experiences powered by modern technology stacks. Clean code meets creative front-end art.',
    icon: 'Code2',
    link: '#contact',
    features: ['React & Next.js Ecosystems', 'Custom WebGL & Interactive Graphics', 'Tailwind & Performance Optimization', 'Robust headless CMS integrations']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Supercharge your systems with modern LLMs and custom machine learning pipelines. We craft smart features that feel magic.',
    icon: 'Cpu',
    link: '#contact',
    features: ['LLM & Prompt Engineering', 'Semantic Search & Vector DBs', 'Custom Automated Agent Workflows', 'Smart Predictive Analytics']
  },
  {
    id: 'motion-design',
    title: 'Motion Design',
    description: 'Breathing life into visual elements. Smooth keyframes, cinematic transitions, and custom explainer animations.',
    icon: 'Play',
    link: '#contact',
    features: ['3D Abstract Renderings', 'Interface Interactions (Lottie)', 'Creative Directing', 'Explainer Videos & Video Editing']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nebula',
    title: 'Technamics',
    category: 'Web Design',
    imageUrl: technamicsShowcase,
    description: 'A revolutionary Web3 non-custodial decentralized trading platform leveraging low-latency order routing and premium glassmorphic UI analytics.',
    client: 'Technamics',
    date: 'March 2026',
    services: ['UX/UI Design', 'Brand Identity', 'Frontend Engineering'],
    results: ['+240% Active User Growth', '$1.2B Total Volume Transacted', 'Featured on TechCrunch'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Ethers.js'],
    challenge: 'DeFi applications suffer from poor usability, confusing visual charts, and complex onboarding. The objective was to design a platform so intuitive that Web2 retail users could trade Web3 assets seamlessly.',
    solution: 'We engineered an immersive workspace using dark glass panels that isolate data streams. We integrated high-speed reactive charts and automated onboarding, reducing average transaction setup time from 4 minutes to 15 seconds.'
  },
  {
    id: 'aether',
    title: 'Aether AI Workspace',
    category: 'AI Integration',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    description: 'Next-generation AI co-working canvas that structures chaotic workspace documentation using context-aware LLM mapping and real-time multiplayer node graphs.',
    client: 'Aether Systems',
    date: 'May 2026',
    services: ['AI Integration', 'Product Design', 'Motion Design'],
    results: ['98.4% User Retention Rate', '45 Mins Saved Per User/Day', 'Webby Awards Nominee'],
    techStack: ['React', 'Node.js', 'Gemini Pro API', 'Framer Motion', 'WebSockets'],
    challenge: 'Teams suffer from infinite digital workspaces, resulting in fragmented information and search exhaustion. The core goal was to create a unified mind-map interface that organizes itself using AI.',
    solution: 'By implementing standard node layout physics combined with recursive semantic embeddings, we created an active canvas where documents dynamically group together based on AI context. Smooth transition layouts and responsive glass panels deliver absolute flow.'
  },
  {
    id: 'vortex',
    title: 'Vortex Digital Apparel',
    category: 'Creative Campaign',
    imageUrl: vortexApparelShowcase,
    description: 'A high-concept immersive digital fashion launch featuring gorgeous interactive 3D apparel customization and premium motion narratives.',
    client: 'Vortex Studio',
    date: 'January 2026',
    services: ['Motion Design', 'Brand Identity', 'UX/UI Design'],
    results: ['10M+ Campaign Impressions', '150k Virtual Apparel Minted', 'Best Mobile Experience CSSDA'],
    techStack: ['Three.js', 'WebGL', 'React', 'Tailwind CSS', 'Blender'],
    challenge: 'Digital apparel drops lack the tactile premium emotion of physical high-fashion runways, often feeling clinical and flat inside static grid browsers.',
    solution: 'We built a custom WebGL staging engine allowing users to manipulate light reflections on fabrics in real-time. Paired with cinematic slow-motion video backdrops and clean minimalist typography, the site captures haute couture prestige.'
  },
  {
    id: 'synthetix',
    title: 'Synthetix Logistics',
    category: 'Enterprise Tech',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    description: 'An autonomous enterprise logistics command center dashboard rendering real-time global freight routing, weather disruptions, and robotic facility metrics.',
    client: 'Synthetix Global',
    date: 'February 2026',
    services: ['UX/UI Design', 'Product Design'],
    results: ['-18% Shipping Delays', '4.8M Metric Tons Tracked', 'Red Dot Design Award'],
    techStack: ['React', 'Mapbox GL', 'Tailwind CSS', 'Recharts', 'RxJS'],
    challenge: 'Logistics dispatchers operate under extreme cognitive load, navigating multiple legacy command lines and slow mapping tools simultaneously.',
    solution: 'We simplified complex operations into a high-end glassmorphic bento-grid dashboard. Vital alerts use subtle neon glow indicators while background maps stay desaturated, prioritizing visual attention where it is needed most.'
  },
  {
    id: 'chronos',
    title: 'Chronos WebGL Living',
    category: 'Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description: 'A luxurious architectural exploration. Tour futuristic sustainable apartments and manipulate daylighting cycles dynamically in-browser.',
    client: 'Chronos Group',
    date: 'June 2026',
    services: ['Web Development', 'Motion Design'],
    results: ['45% Pre-Sale Conversion Rate', '8.2 Mins Avg Session Duration', 'FWA of the Day'],
    techStack: ['React Three Fiber', 'Three.js', 'GSAP', 'Vite', 'Tailwind CSS'],
    challenge: 'Luxurious real estate developments struggle to sell high-end units off-plan, as traditional blueprints fail to convey spatial volume, mood, and natural lighting.',
    solution: 'We engineered a highly optimized browser WebGL experience rendering architectural designs in photorealistic quality. Users can swipe a slider to transition the entire scene from crisp sunrise to golden hour, capturing the exact emotion of living.'
  },
  {
    id: 'lumina',
    title: 'Lumina AR Commerce',
    category: 'E-Commerce',
    imageUrl: shorphicShowcase,
    description: 'A luxury e-commerce landing page featuring instant camera-based augmented reality face-mapping to try on bespoke designer sunglasses and jewelry.',
    client: 'Lumina Atelier',
    date: 'April 2026',
    services: ['UX/UI Design', 'Brand Identity', 'Web Development'],
    results: ['+67% Purchase Conversion', '-32% Return Rates', 'Awwwards Site of the Month'],
    techStack: ['React', 'Webcam API', 'MediaPipe FaceMesh', 'Tailwind CSS'],
    challenge: 'Online optical retail has high return rates because customers cannot verify the sizing and exact facial fit of luxurious frames.',
    solution: 'We engineered a seamless, lightweight face-mapping module that runs inside standard mobile browsers. Accompanying it is an editorial interface styled with glass side-drawers and thin-border minimalist details.'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'years',
    label: 'Years of Digital Artistry',
    value: '10+',
    description: 'Pioneering custom interactive web designs, immersive interfaces, and award-winning experiences.'
  },
  {
    id: 'projects',
    label: 'Projects Completed',
    value: '300+',
    description: 'Delivering hyper-optimized, beautiful products across fintech, tech, and luxury brands.'
  },
  {
    id: 'satisfaction',
    label: 'Client Satisfaction',
    value: '98%',
    description: 'Building deep long-term partnerships through robust communication and absolute design quality.'
  },
  {
    id: 'awards',
    label: 'Industry Awards',
    value: '24',
    description: 'Honored by Awwwards, FWA, and CSSDA for excellence in front-end design & visual innovation.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Nebula Labs',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    quote: 'Orphik Creative Studio redesigned our entire crypto exchange and achieved what we thought was impossible—intuitive Web3 trading. Their aesthetic sense combined with their developer expertise is elite.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'CEO & Co-Founder',
    company: 'Aether Systems',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: 'Working with them felt like looking into the future. They didn’t just skin our app; they reinvented the core UX flow, integrating our custom AI systems into an interface that feels pure magic.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Lumina Eyewear',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    quote: 'Our brand represents extreme luxury. We had grave doubts about webcam-based virtual fitting looking cheap. Orphik proved us entirely wrong—their Three.js face-tryon feels premium and boosts our sales.',
    rating: 5
  },
  {
    id: 't4',
    name: 'David Kim',
    role: 'Head of Growth',
    company: 'Synthetix Global',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    quote: 'The bento dashboard design changed how our freight dispatchers operate. Logistics are usually dry and ugly, but Orphik built a beautiful glass dashboard that literally dropped training time by 40%.',
    rating: 5
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Discovery & Audit',
    description: 'We analyze your current product, brand strategy, audience desires, and tech dependencies to set absolute benchmarks.',
    duration: 'Week 1',
    deliverables: ['Competitive Landscape Report', 'Design Direction Board', 'Tech Feasibility Audit']
  },
  {
    id: 'p2',
    number: '02',
    title: 'UX Strategy & Architecture',
    description: 'We wireframe the core mechanics, mapping user journeys and structures to remove all visual and cognitive friction.',
    duration: 'Weeks 2-3',
    deliverables: ['Interactive Lo-Fi Prototypes', 'User Journey Maps', 'Information Architecture Schema']
  },
  {
    id: 'p3',
    number: '03',
    title: 'High-End Art Direction',
    description: 'We carve the visual language, embedding glassmorphism layouts, typography, premium colors, and 3D visual assets.',
    duration: 'Weeks 4-5',
    deliverables: ['Fully Interactive Hi-Fi Designs', 'Custom Design System', 'Motion Style Definition']
  },
  {
    id: 'p4',
    number: '04',
    title: 'Interactive Prototyping',
    description: 'We code micro-interactions, responsive fluid grids, and early canvas prototypes to validate speed and aesthetic pacing.',
    duration: 'Week 6',
    deliverables: ['Vite Prototype Build', 'Interaction Pacing Document', 'WebGL Proof of Concepts']
  },
  {
    id: 'p5',
    number: '05',
    title: 'Creative Engineering',
    description: 'Our senior developers code the robust React / TypeScript front-end, applying high-performance animations and seamless backend pipes.',
    duration: 'Weeks 7-9',
    deliverables: ['Production-Ready Front-End', 'Fully Responsive Web App', 'Vetted API Integrations']
  },
  {
    id: 'p6',
    number: '06',
    title: 'Optimization & Launch',
    description: 'We run rigorous tests, maximizing performance, responsive scalability, and WCAG accessibility standards to launch in glory.',
    duration: 'Week 10',
    deliverables: ['95+ Lighthouse Score Verification', 'Cross-Browser Launch Sign-off', 'Handover Docs & Code Repository']
  }
];
