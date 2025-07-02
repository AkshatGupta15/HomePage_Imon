/* eslint-disable react-hooks/rules-of-hooks */
import { motion, AnimatePresence } from "framer-motion";
import lectures from "../data/lectures.json";
import courses from "../data/Courses.json";
import { SEO } from "@/components/custom/seo_helmet";
import { useState } from "react";

export function TeachingPage() {
  return (
    <div className="max-w-screen-5xl py-4 min-h-screen">
      <SEO
        title="Teaching | Imon Mondal"
        description="Lecture series, grading, and materials for EE698L and other courses."
        path="/teaching"
      />
      <main className="container mx-auto px-6 py-10">
        {/* Courses Section */}
        <motion.section
          className="mb-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-3 uppercase lora-bold-500">Ongoing</h3>
          {courses.map((course, index) => (
            <div
              key={index}
              className="lora-regular-400 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-600 mb-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {course.code}: {course.title}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Timings:</strong> {course.timings}
              </p>
              <div className="mt-3">
                <h5 className="text-md font-semibold text-gray-700 mb-1">Grading Scheme:</h5>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-2">
                  {course.grading.map((item, idx) => (
                    <li key={idx}>
                      {item.component}: {item.weight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Plagiarism Policy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-10"
        >
          <h3 className="text-xl font-semibold uppercase lora-bold-500 mb-3">Plagiarism Policy</h3>
          <p className="lora-regular-400 text-sm text-red-700 bg-red-50 p-3 rounded shadow-inner border border-red-200">
            An F grade or deregistration from the course.
          </p>
        </motion.section>

        {/* Lecture Videos */}
        <motion.section
          className="mb-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold uppercase lora-bold-500 mb-6">Lecture Videos</h3>
          <div className="bg-white p-4 rounded-lg shadow space-y-4">
            {lectures.map(([title, id], idx) => {
              const [open, setOpen] = useState(false);
              return (
                <div key={idx} className="border rounded-md p-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    <p className="lora-regular-400 font-medium text-sm md:text-base">{title}</p>
                    <span className="text-blue-600 text-sm">
                      {open ? "Hide" : "Watch"}
                    </span>
                  </div>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-3"
                      >
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-md"
                            src={`https://www.youtube.com/embed/${id}`}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.section>


      </main>
    </div>
  );
}
