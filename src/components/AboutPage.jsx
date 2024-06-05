import React from 'react';
import { FaReact, FaRegEnvelope, FaFire, FaClipboardCheck, FaServer } from 'react-icons/fa';

const tools = [
  {
    name: 'React.js',
    description: 'A JavaScript library for building user interfaces.',
    icon: FaReact,
    link: 'https://reactjs.org',
  },
  {
    name: 'Context API',
    description: 'A React API for managing global state in your application.',
    icon: FaClipboardCheck,
    link: 'https://reactjs.org/docs/context.html',
  },
  {
    name: 'Firebase',
    description: 'A comprehensive app development platform with a variety of tools and services.',
    icon: FaFire,
    link: 'https://firebase.google.com',
  },
  {
    name: 'Formspree',
    description: 'A form backend platform for designers and developers.',
    icon: FaRegEnvelope,
    link: 'https://formspree.io',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom designs.',
    icon: FaServer,
    link: 'https://tailwindcss.com',
  },
];

const AboutPage = () => {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-sky-600">About Toddler's Learning</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">Empowering Toddlers with Quality Education</p>
              <p className="mt-6 text-lg leading-8 text-dark">
                We are a team of dedicated developers from Arid University committed to providing toddlers with quality education. Our goal is to ignite curiosity and foster a love for learning in young minds, preparing them for a bright future.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-dark lg:max-w-none">
                {tools.map((tool) => (
                  <div key={tool.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                        <tool.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                        {tool.name}
                      </a>
                    </dt>{' '}
                    <dd className="inline">{tool.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="images/about.jpg"
            alt="About Image"
            className="w-[48rem] mt-20 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
