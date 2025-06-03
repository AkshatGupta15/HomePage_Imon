/* eslint-disable @typescript-eslint/no-explicit-any */
import data from "../data/Publication.json";
import { motion } from "framer-motion";

export default function PublicationsPage() {
    


    return (
        <div className="max-w-5xl mx-auto p-6">
            <Section items={data.conferences} title="Conferences" />
            <Section items={data.journals} title="Journals"/>
            <Section items={data.patents} title="Patents" />
            <Section items={data.thesis} title="Thesis" />
        </div>
    );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Section = ({ title, items }: { title: string; items: any[] }) => (
  <motion.div
    className="mb-12 flex flex-col items-start text-start"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={fadeInUp}
  >
    <h2 className="text-2xl mb-6 text-gray-800 uppercase lora-bold-700">{title}</h2>
    <ul className="space-y-4">
      {items.map((item: any, index: number) => (
        <li key={index} className="lora-regular-400">
          <p className="text-md">
            {item.text}
            {item.link && (
              <a href={item.link} className="text-blue-600 hover:underline ml-1">
                [PAPER]
              </a>
            )}
            {/* <span className="text-[#5046e6]">{item.link}</span> */}
            {/* {formatAuthors(item.authors)}, "{item.title}",{" "}
            <span className="text-gray-600">{item.venue}</span>, {item.year}. */}
          </p>
        </li>
      ))}
    </ul>
  </motion.div>
);
