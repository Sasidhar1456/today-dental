import React from 'react';
import clinic from '../assets/Clinic.jpg'

function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
        About Us
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={clinic}
            alt="Dental Clinic"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-700">
            Founded in 1998, Today’s Dental Clinic has been serving the
            community with compassionate care and cutting-edge dentistry. Our
            focus has always been on patient comfort, education, and long-term
            oral health.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Dr. Samantha Patel, DDS</span> leads
            a highly skilled team of hygienists and assistants. She is
            board-certified and has over 20 years of experience in general and
            cosmetic dentistry.
          </p>
          <p className="text-gray-700">
            <span className="italic">Our Mission:</span> To deliver
            state-of-the-art, ethical, and patient-focused dental care, forging
            lifelong relationships through trust and a commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
