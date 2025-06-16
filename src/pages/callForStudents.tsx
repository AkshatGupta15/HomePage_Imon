import { motion } from 'framer-motion';
import ContactForm from './contactPage';
import { SEO } from '@/components/custom/seo_helmet';

const ResearchStudentsPage = () => {
  return (
    <div className="w-full py-8 min-h-screen ">
        <SEO
  title="Call for Research Students | Imon Mondal"
  description="Interested in analog and RFIC research? Apply to work with Prof. Mondal."
  path="/call-for-students"
/>

      <article className="max-w-5xl mx-auto px-6 py-8 bg-white rounded-xl shadow-md">
        {/* Page Title */}
        <motion.h1 
          className="text-3xl  text-gray-800 mb-8 border-b pb-4 lora-bold-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Call for Research Students
        </motion.h1>

        {/* Introduction */}
        <motion.div
          className="mb-8 text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="mb-4 lora-regular-400">
            We have PG admissions for research positions (Ph.D., M.S.R) twice a year, during months of January and July. Applications are invited
            through the online portal, typically in the months of March and October. For the latest updates regarding deadlines
            click <a 
              href="https://www.iitk.ac.in/doaa/pgadmission.htm" 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >here</a>.
          </p>
        </motion.div>

        <hr className="my-8 border-gray-200" />

        {/* PhD Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl text-gray-800 mb-4 lora-bold-500">Ph.D. Program</h2>
          <div className="text-gray-700 space-y-4 leading-relaxed lora-regular-400">
            <p>
              The Ph.D. program is meant for you if you want to pursue any one of the following career paths -
              research, or advanced product development, or teaching at the highest level.
            </p>
            <p>
              A Ph.D. pursuit involves identifying a problem that has stalled the progress in the field of your work for a while, and the
              solution to which will enhance the knowledge pool in your domain of work. Ideally your Ph.D. work should be able to create an impact
              in the area of your work.
            </p>
            <p>
              You are expected to have a firm grip on the basics of analog circuit design. Most importantly,
              you should have the motivation and ability to conduct research independently (at least in the latter half of your Ph.D. tenure). Research
              programs, by definition, are meant to veer into paths which have not (or seldom) been taken before.
            </p>
            <p>
              The typical flow of the work that a Ph.D. student is expected to follow is the conceptualization of a problem statement, design of the
              chip to solve the problem, tape-out of the IC (from one of the many leading foundries in the world) testing and demonstration of the chip, and
              publication of the results in some of the top-tier conferences / journals. Depending on the type of problem statement, this cycle may repeat
              more than once.
            </p>
          </div>
        </motion.section>

        {/* MSR Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 lora-bold-500">M.S.R Program</h2>
          <div className="text-gray-700 space-y-4 leading-relaxed lora-regular-400">
            <p>
              The M.S.R program as compared to an M.Tech is more oriented towards research and is aimed at giving
              the student a flavour of research activity that one will engage in, if s/he decides on pursuing a career in research
              or cutting edge product development - be in the academia or the industry. You can consider it to be a peek into the life of a Ph.D. student, in a compressed time.
            </p>
            <p>
              The number and the type of courses are targeted more towards the area of research than a broader field.
              We expect an M.S.R student to be able to independently design, tape-out and test a complete IC by the time s/he graduates. However, in the interest of time, the number of design cycles and tapeouts in our group is limited to one.
            </p>
          </div>
        </motion.section>

        <hr className="my-8 border-gray-200" />

        {/* Additional Information */}
        <motion.div
          className="text-gray-700 space-y-4 lora-regular-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            You can find more information about all the post graduate programs in the{' '}
            <a 
              href="https://www.iitk.ac.in/doaa/data/pgmanual-02Sep2015.pdf" 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              IITK PG manual
            </a>.
          </p>
          <p>
            If you are interested in working with me, send me your C.V. You can find the type of work I do{' '}
            <a 
              href="/research" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              here
            </a>.
          </p>
        </motion.div>
      </article>
      <div className='mt-10'>
        <ContactForm/>
      </div>
    </div>
  );
};

export default ResearchStudentsPage;