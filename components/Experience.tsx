'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    role: 'Digital marketing specialist | Full Stack Developer',
    company: 'Home Care Marketing Pros',
    period: '2024 - Feb 2026',
    description: 'Leading development of scalable web applications using Next.js and Node.js. Architected microservices infrastructure handling 10M+ monthly users.',
    achievements: [
      'Custome LangGraph Agent for customer service call analysis and transcription.',
      'Managing website page builds and coridinating client growth plan.',
      'Full stack development of llm blog generator.',
      'Authentication and Database management with PostgreSQL',
      'Collaborated cross-departmentally to translate operational problems into technical solutions, integrating automation to streamline processes and enhance team efficiency.'
    ]
  },
  // {
  //   role: 'Software Developer',
  //   company: 'Freelance',
  //   period: '2023 - 2025',
  //   description: 'Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions.',
  //   achievements: [
  //     'Built real-time analytics dashboard processing 1M+ events daily',
  //     'Improved code coverage from 45% to 85%',
  //     'Led migration from monolith to microservices architecture'
  //   ]
  // },
  {
    role: 'Computer Numrical Control Machinist',
    company: 'B&M Precision',
    period: '2022 - 2024',
    description: 'CNC Mill operations for high percision surgical devices. Adjusting parameters and running of CNC mill. Measuring and quality control of parts',
    achievements: [
      'Troubleshot and resolved CNC equipment issues, minimizing downtime.',
      'Implemented continuous improvement strategies to increase efficiency.',
      'Adjusted machine controls including speed, feed rate, depth of cut, temperature, and coolant flow.',
      'Monitored machine operations, identifying and addressing defects in finished products.',
      'Maintained detailed logs of machine activity and output to track performance trends.'
    ]
  },
  {
    role: 'Carpinter | Cabinet Maker',
    company: 'Spring Bay Construction',
    period: '2011 - 2022',
    description: 'Custom cabinetry construction and installation. Also including custom build int closets, entertainment systems, and furniture.',
    achievements: [
      'Built and installed custom cabinets, shelves, and bookcases using professional tools.',
      'Provided technical guidance on installation methods, enhancing quality and precision.',
      'Coordinated delivery schedules to ensure on-time completion of projects.',
      'Managed inventory levels, ensuring timely availability of production materials.'
    ]
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))]" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--accent))]" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -ml-2 bg-[rgb(var(--primary))] rounded-full border-4 border-[rgb(var(--background))] z-10" />

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}>
                  <div className="glass rounded-2xl p-8 ml-8 md:ml-0 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="font-display text-2xl font-semibold mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-[rgb(var(--primary))] font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-[rgb(var(--foreground))]/60">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-[rgb(var(--foreground))]/80 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[rgb(var(--foreground))]/90 mb-3">
                        Key Achievements:
                      </p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-[rgb(var(--foreground))]/70 flex items-start gap-2"
                          >
                            <span className="text-[rgb(var(--accent))] mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
