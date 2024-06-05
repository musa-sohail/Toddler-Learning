import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    try {
      await axios.post('https://formspree.io/f/mvoezdyg', formData);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="yes"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Rawalpindi%20Islamabad&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: 'contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <div className="px-5 py-24 mx-auto flex justify-center items-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full relative shadow-md mt-10 mb-10">
          <h2 className="text-sky-600 text-lg mb-1 font-medium title-font">Contact Us</h2>
          {submitted ? (
            <p className="text-green-600 mb-4">Your message has been sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-sky-600 focus:ring-2 focus:ring-sky-600 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded text-lg"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
