/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile?: any;
  }
}

const ContactForm = () => {
  const [token, setToken] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
   const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
    if (fullNameInput) {
      fullNameInput.value = `${firstName} ${lastName}`.trim();
    }
  }, [firstName, lastName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmissions.iitkakshat.workers.dev/submit", {
        method: "POST",
        body: formData,
        mode: "cors",
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
        setToken(null);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    }
  };


  useEffect(() => {
    // Load the script dynamically
    if (!window.turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    // Cleanup
    return () => {
      if (window.turnstile && turnstileRef.current) {
        // Remove any existing widget
        window.turnstile.remove(turnstileRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded && turnstileRef.current && window.turnstile) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: '0x4AAAAAABhJ4xSFaRaOf3dv',
        callback: (token: string) => setToken(token),
      });
    }
  }, [scriptLoaded]);


   return (
    <div className="p-4">
      <div className="grid lg:grid-cols-2 items-start gap-12  p-4  md:p-8 max-w-5xl max-lg:max-w-2xl max-sm:max-w-md mx-auto bg-white [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-slate-900 text-2xl md:text-3xl font-bold uppercase lora-bold-700">Contact</h2>
          <p className="text-xs sm:text-sm md:text-lg text-slate-600 mt-4 leading-relaxed lora-regular-400">
            Feel free to reach out by visiting my office,
             dropping an email, or submitting the contact
              form to get in touch regarding research, projects, or collaborations.
          </p>

          <div className="mt-12">
            <h2 className="text-slate-900 text-base font-semibold lora-bold-500">Contact Information</h2>
            <ul className="mt-4 space-y-4 lora-regular-400">
              <li className="flex items-start ">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-building"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M9 8l1 0" /><path d="M9 12l1 0" /><path d="M9 16l1 0" /><path d="M14 8l1 0" /><path d="M14 12l1 0" /><path d="M14 16l1 0" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" /></svg>
                </div>
                <div className="text-sm ml-4">
                  <span className="block text-slate-900">Address</span>
                  <span className="text-blue-600 font-medium">WL-211, Electrical Engineering, IIT Kanpur, UP, India 208016</span>
                </div>
              </li>

              <li className="flex items-center">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                </div>
                <div className="text-sm ml-4">
                  <span className="block text-slate-900">Phone</span>
                  <span className="text-blue-600 font-medium">0512 679-7732</span>
                </div>
              </li>

              <li className="flex items-center">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </div>
                <div className="text-sm ml-4">
                  <span className="block text-slate-900">Email</span>
                  <span className="text-blue-600 font-medium">imon@iitk.ac.in</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className=''>
<form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl w-full px-0 sm:px-6 mx-auto "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <input
            name="firstName"
            type="text"
            placeholder="First Name *"
            required
            className="lora-regular-400 w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="lora-regular-400 w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
        </div>
      </div>
      {/* Hidden full name field */}
      <input type="hidden" id="fullName" name="name" />

      <input
        name="email"
        type="email"
        placeholder="Email *"
        required
        className="lora-regular-400 w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
      />

      <textarea
        name="message"
        placeholder="Message *"
        rows={6}
        required
        className="lora-regular-400 w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500"
      ></textarea>

      <div className="py-2">
        <div ref={turnstileRef} className="cf-turnstile" />
        {!token && <p className="text-red-500 text-xs mt-1">Please verify you are human.</p>}
      </div>

      <button
        type="submit"
        disabled={!token}
        className={`lora-regular-400 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-pointer border-0 mt-2 transition-colors ${
          !token ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Send Message
      </button>
    </form>
        </div>
         
      </div>
    </div>
  );
};



export default ContactForm;

