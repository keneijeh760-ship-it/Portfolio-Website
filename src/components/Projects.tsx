import { motion } from "motion/react";
import { staggerContainer } from "@/lib/animatio";
import { SectionHeader } from "@/components/SectionHeader";
import { projectsData } from "@/constants";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
      id="projects"
    >
      <SectionHeader title="Projects" subtitle="My Recent Projects" />

      <motion.div
        className="grid md:grid-cols-2 gap-10"
        variants={staggerContainer(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projectsData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
};
