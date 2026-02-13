'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const projects = [
  {
    title: 'Memory Manager in C',
    description: 'C Memory Manager is a project I worked on to create my own memory manager written in C. This project helped me to better understand how memory is stored in the HEAP.',
    tags: ['C', 'Pointers', 'Strctures', 'Memory Manager'],
    gradient: 'from-indigo-500 to-purple-600',
    color: "bg-blue-600",
    preview: "https://github.com/Tylerw7/Memory_Manager_Project/tree/main",
    github: "https://github.com/Tylerw7/Memory_Manager_Project/tree/main",
    image: "/images/c_mm.jpg",
    language: "C"
  },
  {
    title: 'C# Web-Crawler | Lookup',
    description: 'Machine learning platform for predictive analytics and data visualization, processing millions of data points in real-time.',
    tags: ['C#', '.NET', 'Console App', 'MongoDB'],
    gradient: 'from-purple-500 to-pink-600',
    color: "bg-purple-700",
    preview: "https://github.com/Tylerw7/web_crawler",
    github: "https://github.com/Tylerw7/web_crawler",
    image: "/images/web-crawler.jpg",
    language: "C#"
  },
  {
    title: 'SAAS TTS Generator',
    description: 'Comprehensive social media management tool with scheduling, analytics, and multi-platform integration capabilities.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-pink-500 to-red-600',
    color: "bg-yellow-400",
    preview: "https://echo-textai.vercel.app/",
    github: "https://github.com/Tylerw7/BackEnd",
    image: "/images/echotext.jpg",
    language: "JS"
  },
  {
    title: 'CNN Flower Classifier',
    description: 'This project is a deep learning-based flower classification system built using PyTorch and Transfer Learning with a pretrained ResNet50 model.',
    tags: ['PyTorch', 'TorchVision', 'Python'],
    gradient: 'from-green-500 to-teal-600',
    color: "bg-red-500",
    preview: "https://github.com/Tylerw7/Pytorch-5-flower-classifier",
    github: "https://github.com/Tylerw7/Pytorch-5-flower-classifier",
    image: "/images/pytorch_cnn.jpg",
    language: "PyTorch"
  },
  {
    title: 'RAG Chatbot | Full Next.js Website',
    description: 'HIPAA-compliant patient management system with appointment scheduling, electronic health records, and telemedicine integration.',
    tags: ['FastAPI', 'LangGraph', 'OpenAI', 'RAG'],
    gradient: 'from-cyan-500 to-blue-600',
    color: "bg-green-500",
    preview: "https://www.cabinetrybywettach.com/",
    github: "https://github.com/Tylerw7/CBW_RAG_BACKEND/blob/main/app/routes/agent.py",
    image: "/images/rag_chatbot.jpg",
    language: "FastAPI"
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-blue-500 to-purple-600',
    color: "bg-yellow-400",
    preview: "https://precious-wettach-art.vercel.app/",
    github: "https://github.com/Tylerw7/PreciousArtBackEnd",
    image: "/images/pwa.jpg",
    language: "JS"
  },
  
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-fit p-4 h-12 rounded-xl ${project.color} ${project.gradient} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {/* <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg> */}
                    <span className='text-[1.5rem] font-bold'>{project.language}</span>
                  </div>

                  {project.image && (
                    <div className="w-full h-[150px] relative mb-[25px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-[rgb(var(--foreground))]/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                  <a href={project.preview}>
                    <button className="text-sm font-medium text-[rgb(var(--primary))] hover:text-[rgb(var(--secondary))] transition-colors flex items-center gap-1">
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    </a>
                    <a href={project.github}>
                    <button className="text-sm font-medium text-[rgb(var(--foreground))]/60 hover:text-[rgb(var(--foreground))] transition-colors flex items-center gap-1">
                      GitHub
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
