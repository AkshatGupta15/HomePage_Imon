import { motion } from "framer-motion";
import data from "../data/Research.json";
import { SEO } from "@/components/custom/seo_helmet";


export function ResearchPage() {
  return (
    <div className="max-w-5xl container mx-auto px-4 py-10 md:w-[80%] w-full ">
      <SEO
  title="Research | Imon Mondal"
  description="Explore Prof. Mondal's research in analog and RFIC design."
  path="/research"
/>
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-gray-700 mb-6 lora-bold-700 uppercase">Research Interests</h1>

        <p className=" justify-evenly break-words lora-regular-400"> I work in the domain of analog circuit design for integrated circuits, primarilly aimed at signal processing. This involves
          conceptualization of the problem statement, designing an analog circuit solution, sending out the chip for fabrication (typically called tape-out), designing
          the PCB for testing the chip, and finally validating the simulation results through measurement results of the chip.
          My research work till date has concentrated on design of high frequency analog filters for various applications like
          design of true-time-delay elements for wideband beamformers on integrated circuits, and  expansion and
          compression of wideband analog pulses.
        </p>
        <br />
        <p className="justify-evenly break-words lora-regular-400 "> If you are intersted in working with me, do apply for research positions through the
          <a href="https://www.iitk.ac.in/doaa/" className="text-blue-600 underline hover:text-blue-800"> IITK portal</a>, and send me your C.V. There are open research positions
          both for M.S. and Ph.D. candidates. You can learn more about the programs
          <a href="ProspectiveStudents.html" className="text-blue-600 underline hover:text-blue-800" > here. </a> </p>
      </motion.div>
      <h2 className="text-xl font-bold  text-gray-500 mb-12  lora-bold-700 uppercase">Research Projects</h2>

      <div className="space-y-16">
        {data.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-8 bg-white rounded-lg shadow-lg p-6`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 rounded-lg object-cover shadow-md"
            />
            <div className="md:w-2/3">
              <h3 className="text-xl lora-bold-500 text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm lora-regular-400">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
