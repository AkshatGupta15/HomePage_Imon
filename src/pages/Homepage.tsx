import { AnimatedGridPatternDemo } from "@/components/custom/background";
import { motion } from "framer-motion";
import newsData from "@/data/news.json";
import homepageContent from "@/data/homepageContent.json";
import ContactForm from "./contactPage";
import { SEO } from "@/components/custom/seo_helmet";

export function HomePage() {
  const { seo, introParagraphs, links, newsHeading, coordinates, linksSection } = homepageContent;

  return (
    <div className="w-full">
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <div className="mb-10">
        <AnimatedGridPatternDemo />
      </div>

      <div className="md:px-0 px-4 sm:px-6">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-6 text-justify break-words p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <p className="text-sm md:text-lg leading-relaxed lora-regular-400">
            {introParagraphs[0]}
            <a
              href={links.lab.url}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {links.lab.label}
            </a>.
            {introParagraphs[1]}
            <a
              href={links.teaching.url}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {links.teaching.label}
            </a>.
          </p>

          <p className="text-sm md:text-lg leading-relaxed lora-regular-400">
            {introParagraphs[2]}
          </p>
        </motion.div>

        {/* News Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-12 p-4 sm:p-6 space-y-4 shadow-lg rounded-lg"
        >
          <h2 className="text-lg sm:text-xl lora-bold-500 mb-4">{newsHeading}</h2>
          <div className="space-y-3 text-sm text-left leading-relaxed overflow-scroll h-80">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 border-l-4 border-blue-500"
              >
                <p className="text-gray-600 lora-regular-400">
                  <span className="text-sm sm:text-md lora-bold-500 text-gray-800">
                    {item.date}
                  </span>{" "}
                  : {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Coordinates and Other Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mt-12 p-4 sm:p-6 grid md:grid-cols-2 gap-8 text-sm text-gray-800"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-lg sm:text-xl lora-bold-500">{coordinates.heading}</h3>
            <div className="lora-regular-400">
              {coordinates.lines.map((line, idx) => (
                <p key={idx}>
                  {line.includes("Email:") ? (
                    <>
                      Email:{" "}
                      <a href={`mailto:${line.split("Email: ")[1]}`} className="text-blue-600">
                        {line.split("Email: ")[1]}
                      </a>
                    </>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg sm:text-xl lora-bold-500">{linksSection.heading}</h3>
            <ul className="list-disc list-inside lora-regular-400">
              {linksSection.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.url} className="text-blue-600 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <ContactForm />
    </div>
  );
}
