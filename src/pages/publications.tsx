/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEO } from "@/components/custom/seo_helmet";
import data from "../data/Publication.json";
import { motion } from "framer-motion";
import { getFullImageUrl } from "@/utils/getFullImageUrl";

export default function PublicationsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <SEO
  title="Publications | Imon Mondal"
  description="Research papers and publications by Prof. Imon Mondal."
  path="/publication"
/>
      {/* <h1 className="text-3xl font-bold text-gray-900 mb-8 lora-bold-700 uppercase text-center">
        Publications
      </h1> */}
      <div className="space-y-8">
        <Section items={data.conferences} title="Conferences" />
        <Section items={data.journals} title="Journals" />
        <Section items={data.patents} title="Patents" />
        <Section items={data.thesis} title="Thesis" />
      </div>
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Section = ({ title, items }: { title: string; items: any[] }) => (
  <motion.div
    className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={fadeInUp}
  >
    <h2 className="text-xl text-gray-800 font-semibold mb-4 lora-bold-600 uppercase border-b border-gray-200 pb-2">
      {title}
    </h2>
    <ul className="space-y-4 list-inside list-disc text-gray-700">
      {items.map((item: any, index: number) => (
        <li key={index} className="relative group lora-regular-400 text-sm leading-relaxed">
          <span>{item.text}</span>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-2"
            >
              [PAPER]
            </a>
          )}

          {/* Hover Description and Image */}
          {(item.description || item.image) && (
            <div className="absolute left-0 z-10 hidden group-hover:flex flex-col gap-2 p-4 bg-white border border-gray-200 shadow-xl rounded-md w-72 top-6">
              {item.image && (
                <img
                  src={getFullImageUrl(item.image)}
                  alt="Publication Preview"
                  className="w-full h-32 object-cover rounded-md border"
                />
              )}
              {item.description && (
                <p className="text-xs text-gray-700">{item.description}</p>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  </motion.div>
);

