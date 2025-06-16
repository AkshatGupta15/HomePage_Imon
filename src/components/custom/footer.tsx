import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-indigo-950 text-slate-300 lora-regular-400">
            <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Right Column - Contact Info */}
                <div className="md:col-span-1 lg:col-span-1">
                    <h5 className="font-semibold lora-bold-500 text-md mb-4 text-white">Contact Information</h5>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start">
                            <svg className="w-5 h-5 mt-0.5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>0512 679-7732</span>
                        </div>
                        <div className="flex items-start">
                            <svg className="w-5 h-5 mt-0.5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>WL-211, Electrical Engineering<br />IIT Kanpur, UP, India 208016</span>
                        </div>
                        <div className="flex items-start">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" stroke="currentColor"
    className="w-5 h-5 mt-0.5 mr-3 text-indigo-400"
  >
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
  <a href="mailto:imon@iitk.ac.in" className="hover:text-indigo-400 transition-colors text-sm">
    imon@iitk.ac.in
  </a>
</div>
                        <div className="flex items-center mt-6">
                            <a
                                href="https://www.youtube.com/@sscdiitk" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-indigo-400 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 461.001 461.001" fill="currentColor">
                                    <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                                </svg>
                                <span className="text-sm text-slate-300 hover:text-indigo-400 ">YouTube Channel</span>
                                
                            </a>
                        </div>
                    </div>
                </div>

                {/* Left Column - Navigation Links in 2 columns */}
                <div className="md:col-span-1 lg:col-span-1 mt-10">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-indigo-400 transition-colors">Home</a></li>
                            <li><a href="/research" className="hover:text-indigo-400 transition-colors">Research</a></li>
                            <li><a href="/group" className="hover:text-indigo-400 transition-colors">Group</a></li>
                            <li><a href="/publication" className="hover:text-indigo-400 transition-colors">Publications</a></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><a href="/project" className="hover:text-indigo-400 transition-colors">Projects</a></li>
                            <li><a href="/gallery" className="hover:text-indigo-400 transition-colors">Gallery</a></li>
                            <li><a href="/teaching" className="hover:text-indigo-400 transition-colors">Teaching</a></li>
                            <li><a href="https://www.iitk.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">IITK</a></li>
                            <li><a href="https://www.iitk.ac.in/ee/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">EE Department</a></li>
                        </ul>
                    </div>
                </div>

            
                {/* Middle Column - Research Call */}
                <div className="md:col-span-1 lg:col-span-1">
                    <h5 className="font-semibold lora-bold-500 text-md mb-4 text-white">Research Opportunities</h5>
                    <p className="text-slate-400 mb-4 text-sm">
                        If you're passionate about RFIC Design, Signal Processing, or related areas, reach out with your CV. Undergraduate, postgraduate, and research collaboration opportunities are open.
                    </p>
                    <a
                        href="/student_research"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors text-sm"
                    >
                        Contact for Research
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-700 py-6">
                <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} Indian Institute of Technology Kanpur. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;