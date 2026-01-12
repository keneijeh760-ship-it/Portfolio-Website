import {motion}  from "motion/react"
import { fadeUp, staggerContainer } from "@/lib/animatio";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./ui/button";


export const About = () => {
    return <motion.section initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} className="mt-30 scroll-mt-10" id='about'>
        <SectionHeader title='About Me' subtitle='About Me'/>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10">
            <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
                I'm a passionate and ambitous software developer with a unique 
                background that has prepared me to be a team player who communicates effectively, 
                faces problems analytically and has the technical skills to tackle any challenge.
            </motion.p>

            <motion.div>
                <Button className="mt-5">Contact Me</Button>
            </motion.div>
            
        </motion.div>
    </motion.section>
};