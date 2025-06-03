// import React from "react";
// import { motion } from "framer-motion";
// import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

// const Section = ({ title, children }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className="mb-10"
//   >
//     <h2 className="text-3xl font-bold mb-4 text-blue-800">{title}</h2>
//     {children}
//     <Separator className="my-6" />
//   </motion.div>
// );

// const PublicationCard = ({ title, authors, venue, year, link }) => (
//   <Card className="mb-4 hover:shadow-lg transition-shadow">
//     <CardContent className="p-4">
//       <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//       <p className="text-gray-600 mt-1">{authors}</p>
//       <p className="text-sm text-gray-500 italic mt-1">{venue}, {year}</p>
//       {link && (
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:underline mt-2 inline-block"
//         >
//           View Paper
//         </a>
//       )}
//     </CardContent>
//   </Card>
// );

export default function PublicationsPage() {
//   const data = {
//     Conferences: [
//       {
//         title:
//           "An LPTV Programmable Bandpass True-time-Delay Line Without External Clock-Phase Shifter",
//         authors: "Mohmad Aasif Bhat and Imon Mondal",
//         venue: "IEEE ISCAS",
//         year: 2025,
//         link: "",
//       },
//       {
//         title:
//           "A Low-Loss, Compact Wideband True-Time-Delay Line for Sub-6GHz Applications using N-Path Filters",
//         authors: "Mohmad Aasif Bhat and Imon Mondal",
//         venue: "IEEE APCCAS",
//         year: 2023,
//         link: "https://ieeexplore.ieee.org/abstract/document/10509961/",
//       },
//       // Add rest similarly...
//     ],
//     Journals: [
//       {
//         title: "Effects of AC Response Imperfections in True-Time-Delay Lines",
//         authors: "Imon Mondal and Nagendra Krishnapura",
//         venue: "IEEE TCAS II",
//         year: 2020,
//         link: "https://ieeexplore.ieee.org/document/9209153/",
//       },
//       // Add rest similarly...
//     ],
//     Thesis: {
//       title:
//         "Wideband Tunable True-Time-Delay Architecture Using a Variable Order All-Pass Filter and its Applications to Continuous-Time Pulse Processing",
//       link: "Imon_Thesis.pdf",
//     },
//     Patents: [
//       {
//         title:
//           "Tunable true-time-delay element using a variable order all-pass filter.",
//         authors: "Imon Mondal and Nagendra Krishnapura",
//         note: "India patent application # 201741014751.",
//       },
//     ],
//   };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Research Publications
      </h1>

      <Section title="Conference Papers">
        {data.Conferences.map((pub, index) => (
          <PublicationCard key={index} {...pub} />
        ))}
      </Section>

      <Section title="Journal Papers">
        {data.Journals.map((pub, index) => (
          <PublicationCard key={index} {...pub} />
        ))}
      </Section>

      <Section title="Thesis">
        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{data.Thesis.title}</h3>
            <a
              href={data.Thesis.link}
              className="text-blue-600 hover:underline mt-2 inline-block"
              target="_blank"
            >
              View PDF
            </a>
          </CardContent>
        </Card>
      </Section>

      <Section title="Patents">
        {data.Patents.map((pat, index) => (
          <Card key={index} className="mb-4">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{pat.title}</h3>
              <p className="text-gray-600 mt-1">{pat.authors}</p>
              <p className="text-sm text-gray-500 italic mt-1">{pat.note}</p>
            </CardContent>
          </Card>
        ))}
      </Section> */}
    </div>
  );
}
