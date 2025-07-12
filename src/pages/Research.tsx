import { motion } from "framer-motion";
import data from "../data/Research.json";
import { SEO } from "@/components/custom/seo_helmet";
import { getFullImageUrl } from "@/utils/getFullImageUrl";
import content from "@/data/researchPageContent.json";


export function ResearchPage() {
  const { seo, intro, projectsHeading} = content;
  const { paragraphs, heading, links } = intro;

  return (
    <div className="max-w-5xl container mx-auto px-4 py-10 md:w-[80%] w-full ">
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      {/* Research Interests Section */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold text-gray-700 mb-6 lora-bold-700 uppercase">
          {heading}
        </h1>

        <p className="justify-evenly break-words lora-regular-400">
          {paragraphs[0]}
        </p>
        <br />
        <p className="justify-evenly break-words lora-regular-400">
  If you are interested in working with me, do apply for research positions through the{" "}
  <a href={links.IITK_PORTAL.url} className="text-blue-600 underline hover:text-blue-800">
    {links.IITK_PORTAL.label}
  </a>{" "}
  and send me your C.V. There are open research positions both for M.S. and Ph.D. candidates. You can learn more about the programs{" "}
  <a href={links.STUDENT_RESEARCH_PAGE.url} className="text-blue-600 underline hover:text-blue-800">
    {links.STUDENT_RESEARCH_PAGE.label}
  </a>.
</p>

      </motion.div>

      {/* Research Projects Section */}
      <h2 className="text-xl font-bold text-gray-500 mb-12 lora-bold-700 uppercase">
        {projectsHeading}
      </h2>

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
              src={getFullImageUrl(project.image)}
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
