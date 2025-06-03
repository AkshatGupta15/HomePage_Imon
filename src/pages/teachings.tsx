import { motion } from "framer-motion";

export function TeachingPage() {
  return (
    <div className="w-full py-4  min-h-screen">
      <main className="container mx-auto px-6 py-10">
        {/* <motion.h2
          className="text-4xl lora-bold-700  mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Courses
        </motion.h2> */}

        {/* Ongoing Section */}
        <motion.section
          className="mb-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold  mb-3 uppercase lora-bold-500">Ongoing</h3>
          <div className="lora-regular-400 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-600">
            <h4 className="text-lg font-semibold text-gray-800 mb-1">EE698L: RFIC Design</h4>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Timings:</strong> Tuesday: 10:30–11:45 AM; Thursday: 12–1:15 PM
            </p>
            <div className="mt-3">
              <h5 className="text-md font-semibold text-gray-700 mb-1">Grading Scheme:</h5>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-2">
                <li>Home Assignment: 60%</li>
                <li>End Semester: 25%</li>
                <li>Midsem: 10%</li>
                <li>Surprise Quiz: 5%</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Lecture Videos */}
        <motion.section
          className="mb-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold uppercase lora-bold-500 mb-3"> Lecture Videos</h3>
          <div className="space-y-3 text-sm text-gray-700 bg-white p-4 rounded-lg shadow ">
            {[
              ["Lecture 1: Introduction", "https://www.youtube.com/watch?v=2hc6Ac45t2E&feature=youtu.be"],
              ["Lecture 2: Transceiver Architecture", "https://www.youtube.com/watch?v=meSg0UUezzE&list=..."],
              [
                "Lecture 3: RF Chain",
                [
                  { label: "(3a)", url: "https://www.youtube.com/watch?v=lzAPGjHKF0Q" },
                  { label: "(3b)", url: "https://www.youtube.com/watch?v=KvuzKc8Yhgk" },
                  { label: "(3c)", url: "https://www.youtube.com/watch?v=AFz_-PxcdsE" },
                ],
              ],
              ["Lecture 4: Filtering in Receiver", "https://www.youtube.com/watch?v=UJIY1mKe3Gc"],
              ["Lecture 5: Transmission Lines", "https://www.youtube.com/watch?v=qP5klCZGFxY"],
              ["Lecture 6: Clocking, VCO and PLL", "https://www.youtube.com/watch?v=mAqcQwoJ_Ns"],
            ].map((lecture, idx) => (
              <p key={idx} className="lora-regular-400">
                ▪️ {typeof lecture[1] === "string" ? (
                  <>
                    {lecture[0]} –{" "}
                    <a href={lecture[1]} className="text-blue-600 underline" target="_blank">
                      Video
                    </a>
                  </>
                ) : (
                  <>
                    {lecture[0]} –
                    {(lecture[1] as { label: string; url: string }[]).map((part, i) => (
                      <a
                        key={i}
                        href={part.url}
                        className="ml-2 text-blue-600 underline"
                        target="_blank"
                      >
                        {part.label}
                      </a>
                    ))}
                  </>
                )}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Plagiarism Policy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold uppercase lora-bold-500 mb-3">Plagiarism Policy</h3>
          <p className="lora-regular-400 text-sm text-red-700 bg-red-50 p-3 rounded shadow-inner border border-red-200">
            An F grade or deregistration from the course.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
