import { AnimatedGridPatternDemo } from "@/components/custom/background";
import { motion } from "framer-motion";
import data from "@/data/news.json";

export function HomePage() {
  return (
    <div className="w-full">
      <div className="mb-10">
        <AnimatedGridPatternDemo />
      </div>
      <div className="md:px-0 px-6">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6 text-justify break-words" 
      >
        <p className="text-lg leading-relaxed lora-regular-400">
          I am an assistant professor in the Microelectronics and VLSI group of the
          department of Electrical Engineering in the Indian Institute of
          Technology Kanpur and a member of the{' '}
          <a
            href="https://iitk.ac.in/sscd"
            className="text-blue-600 underline hover:text-blue-800"
          >
            solid-state circuit design lab
          </a>.
          I work in the area of analog integrated circuit design primarily aimed at signal
          processing. Due to my interest in teaching analog circuits, and to
          ensure its reach beyond classrooms, I record my lectures for public viewing.
          You can access them{' '}
          <a
            href="https://iitk.ac.in/sscd/Teaching.html"
            className="text-blue-600 underline hover:text-blue-800"
          >
            here
          </a>.
        </p>

        <p className="text-lg leading-relaxed lora-regular-400">
          I obtained my Ph.D. from IIT Madras under Prof. Nagendra Krishnapura,
          working on tunable true-time-delay elements in ICs. I received my M.Tech from IIT Kanpur (2007)
          and B.Tech from Kalyani Govt. Engineering College (2005). I have worked at
          Cypress Semiconductor on power management circuits for non-volatile SRAMs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto mt-12  p-6  space-y-4"
      >
        <h2 className="text-xl lora-bold-500 ">News & Updates</h2>
        {/* <AutoScrollingNews/> */}
        <div className="space-y-3 text-sm text-left leading-relaxed overflow-scroll h-80">
          {data.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              
              <p className="text-gray-600 lora-regular-400"><span className="text-md lora-bold-500 text-gray-800">{item.date}</span> : {item.text}</p>
              
            </div>
          ))}
         
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-5xl mx-auto mt-12 p-6 grid md:grid-cols-2 gap-8 text-sm text-gray-800"
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-xl lora-bold-500">Coordinates</h3>
          <div className="lora-regular-400">
            <p>WL-211, Electrical Engineering, IIT Kanpur</p>
          <p>Kanpur, Uttar Pradesh, India, 208016</p>
          <p>Phone: 0512 679-7732</p>
          <p>Email: <a href="mailto:imon@iitk.ac.in" className="text-blue-600">imon@iitk.ac.in</a></p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-xl lora-bold-500">Other Links</h3>
          <ul className="list-disc list-inside lora-regular-400">
            <li><a href="#" className="text-blue-600 hover:underline">Research Interests</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Call for Research Students</a></li>
          </ul>
        </div>
      </motion.div>
      </div>

      
    </div>
  );
}