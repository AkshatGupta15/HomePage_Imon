/* eslint-disable @typescript-eslint/no-explicit-any */
import data from "../data/Publication.json";
import { motion } from "framer-motion";

function formatAuthors(authors?: string[]): string {
  if (!Array.isArray(authors) || authors.length === 0) return "";

  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  if (authors.length <= 3) return `${authors.slice(0, -1).join(", ")} and ${authors[authors.length - 1]}`;
  
  return `${authors.slice(0, 3).join(", ")} et al.`;
}

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
            {formatAuthors(item.authors)}, "{item.title}",{" "}
            <span className="text-gray-600">{item.venue}</span>, {item.year}.
          </p>
        </li>
      ))}
    </ul>
  </motion.div>
);
