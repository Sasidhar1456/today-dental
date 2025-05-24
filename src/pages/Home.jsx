import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import dentist from '../assets/Dentist.jpg'

const SERVICE_PREVIEW = [
  {
    icon: 'heart-pulse-fill',
    title: 'General Checkup',
    description: 'Routine exams, cleanings, and oral hygiene counseling.',
  },
  {
    icon: 'cloud-download-fill',
    title: 'Teeth Whitening',
    description: 'Safe and effective in-office whitening treatments.',
  },
  {
    icon: 'eyeglasses',
    title: 'Orthodontics',
    description: 'Braces and aligners for straight, healthy smiles.',
  },
];

function Home() {
  return (
    <div>
      {/* Hero / Banner Section */}
      <section className="relative bg-primary text-white">
        <div className="container mx-auto px-6 py-6 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Today’s Dental Clinic
            </h1>
            <p className="text-lg mb-6">
              Your smile is our top priority. We combine modern care with a
              warm, friendly environment to ensure you feel right at home.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
            >
              Book Appointment
            </Link>
          </div>
          <div className="flex justify-center w-full md:w-1/2 ml-auto  mt-10 md:mt-0">
            <img
              src={dentist}
              alt="Dentist at work"
              className="h-[28rem] w-[20rem] "
            />
          </div>
        </div>
      </section>

      {/* Brief Introduction + Services Preview */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
          Our Core Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICE_PREVIEW.map((svc, idx) => (
            <ServiceCard
              key={idx}
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="text-accent font-semibold hover:underline"
          >
            View All Services &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
