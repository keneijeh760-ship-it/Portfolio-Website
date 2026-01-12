import { motion } from "motion/react";
import type { ProjectType } from "@/types";
import { fadeUp } from "@/lib/animatio";

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border border-neutral-800
        bg-neutral-900
        hover:border-primary
        transition
      "
    >
      {/* IMAGE — ~75% */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.imgSrc}
          alt={project.title}
          onError={(e) => {
            e.currentTarget.src = "/images/project-placeholder.png";
          }}
          className="
            h-full w-full
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT — ~25% */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-neutral-700 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            View →
          </a>
        </div>
      </div>
    </motion.article>
  );
};
