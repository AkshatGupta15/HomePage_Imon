/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';

import data from '../data/Groups.json';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Section = ({ title, people }: {title: string , people: any }) => (
  <div>
    <h2 className="text-2xl lora-bold-500 text-gray-900 mb-6">{title}</h2>
    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person: any , index: number) => (
        <motion.li
          key={person.name}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <div className="flex items-center gap-x-6">
           <div
  className="w-16 h-16 rounded-full bg-cover bg-center"
  style={{
    backgroundImage: `
      url(${person.image}),
      url(/images/avatar-default.svg)
    `
  }}
/>

            <div>
              <h3 className="text-base tracking-tight text-gray-900 lora-bold-500">
                {person.name}
              </h3>
              {person.role && <p className="text-sm font-semibold text-indigo-600">{person.role}</p>}
              {person.researchArea && <p className="text-sm text-gray-600 lora-regular-400">{person.researchArea}</p>}
              {person.email && (
                <p className="text-sm text-blue-600 lora-regular-400">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </p>
              )}
              {person.profileUrl && (
                <p className="text-sm text-blue-500 underline lora-regular-400">
                  <a href={person.profileUrl} target="_blank" rel="noopener noreferrer">
                    Profile
                  </a>
                </p>
              )}
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  </div>
);

const AlumniSection = ({ alumni }: {alumni: any}) => (
  <div>
    <h2 className="text-2xl text-gray-900 mb-6 lora-bold-500">Alumni (MTech Dual)</h2>
    <ul className="space-y-3">
      {alumni.map((alum : any, index: number) => (
        <motion.li
          key={alum.name}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <p className="text-base font-medium text-gray-900 lora-bold-500">
            {alum.name} - <span className="text-gray-600">{alum.destination}</span>
            {alum.profileUrl && (
              <a
                href={alum.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 underline"
              >
                Profile
              </a>
            )}
          </p>
        </motion.li>
      ))}
    </ul>
  </div>
);

export default function GroupPage() {


  return (
    <div className="bg-white py-12 sm:py-16 px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      <div>
        <h1 className="text-3xl lora-bold-500 text-gray-900 mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-600 lora-regular-400">
          Explore the members of our research group and their work areas.
        </p>
      </div>

      {data.PhD && <Section title="PhD Scholars" people={data.PhD} />}
      {data.MSR && <Section title="MSR Scholars" people={data.MSR} />}
      {data.MTechDual && <Section title="MTech Dual Degree" people={data.MTechDual} />}
      {data.Alumni?.MTechDual && <AlumniSection alumni={data.Alumni.MTechDual} />}
    </div>
  );
}