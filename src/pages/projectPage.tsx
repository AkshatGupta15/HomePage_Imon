import { motion } from "framer-motion";
import projectData from "../data/Projects.json";
import { SEO } from "@/components/custom/seo_helmet";
import { getFullImageUrl } from "@/utils/getFullImageUrl";

export default function ProjectsSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white lora-regular-400">
      <SEO
  title="Projects | Imon Mondal"
  description="Funded and ongoing projects in RF and analog circuit design."
  path="/project"
/>
      <motion.h2
        className="text-3xl font-bold mb-10 text-gray-900 uppercase text-center lora-bold-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sponsored Research Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={getFullImageUrl(project.image)}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-700 lora-bold-600">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Period:</strong> {project.period}<br />
                <strong>Sponsor:</strong> {project.sponsor}<br />
                <strong>Amount:</strong> {project.amount}<br />
                <strong>Role:</strong> {project.role}<br />
                <strong>Status:</strong>{" "}
                <span
                  className={
                    project.status === "Running"
                      ? "text-green-600"
                      : "text-gray-500"
                  }
                >
                  {project.status}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
