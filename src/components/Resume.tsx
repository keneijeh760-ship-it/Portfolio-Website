import { ToolsCard } from "./ToolsCard";
import {motion} from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animatio"
import { tools } from "@/constants";

export const Resume = () => {
  return (
    <motion.section>
      <div className="my-16">
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-semibold mb-8 capitalize"
        >
          My Stack
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {tools.map((tool, i) => (
            <ToolsCard key={i} tool={tool} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
