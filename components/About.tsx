'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Python', 'PostgreSQL', 'MongoDB', 'Docker',
  'AWS', 'C', "C#", "C++", ".NET", 'Tailwind CSS', 'Git', 'CI/DI', 'FastAPI'
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[rgb(var(--foreground))]/80 leading-relaxed">
              I&apos;m a passionate software developer who loves computers, solving problems and building software. 
              More than 2 1/2 years ago I discovered my passion for programing and computer science, 
              I have some background in computers as I went to collage for computer networking after highschool.
              However, it was not the field in tech that I was passionate about.
            </p>
            <p className="text-lg text-[rgb(var(--foreground))]/80 leading-relaxed">
              As I love building things and solving problems I realized 
              the drive and curiosity I had for programming and that really excited me. Since then I never stop learning new frameworks 
              and languages. I have used my skills at a digital marketing company to solve company problems, such as a full stack 
              web app with React, FastApi, OpenAI and Langchain/LangGraph to build Agents that transcripbe and rate customer service
              calls. And a business solution where I build I custom blog generator to make content specific to the companies needs.
            </p>
            <p className="text-lg text-[rgb(var(--foreground))]/80 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I code everyday, and would like to work for a company
              where I can use my skills to help the company, learn more and share what I know with the team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-white/10 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="mt-12 space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Frontend Development</span>
                  <span className="text-sm text-[rgb(var(--foreground))]/60">95%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '95%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))]"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Backend Development</span>
                  <span className="text-sm text-[rgb(var(--foreground))]/60">90%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '90%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="h-full bg-gradient-to-r from-[rgb(var(--secondary))] to-[rgb(var(--accent))]"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">DevOps & Cloud</span>
                  <span className="text-sm text-[rgb(var(--foreground))]/60">85%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '85%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--primary))]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
