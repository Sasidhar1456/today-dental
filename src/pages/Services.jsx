import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';

const ALL_SERVICES = [
  {
    icon: 'heart-pulse-fill',
    title: 'General Checkup',
    description:
      'Comprehensive exams, cleanings, and oral hygiene counseling to keep your teeth healthy.',
  },
  {
    icon: 'capsule',
    title: 'Teeth Whitening',
    description:
      'Professional in-office whitening treatments to give you a brighter smile quickly and safely.',
  },
  {
    icon: 'eyeglasses',
    title: 'Orthodontics',
    description:
      'Traditional braces and clear aligners to straighten teeth and correct bite issues.',
  },
  {
    icon: 'capsule-pill',
    title: 'Dental Implants',
    description:
      'State-of-the-art implants to replace missing teeth and restore function and aesthetics.',
  },
  {
    icon: 'fill-drip',
    title: 'Restorative Fillings',
    description:
      'Durable, tooth-colored composite fillings to fix cavities and restore structure.',
  },
  {
    icon: 'mouth',
    title: 'Periodontal Therapy',
    description:
      'Treatment for gum disease, including deep cleanings (scaling & root planing).',
  },
];

function Services() {
  // For bonus: expand/collapse details (using HTML <details>)
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
        Our Dental Services
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {ALL_SERVICES.map((svc, idx) => (
          <ServiceCard
            key={idx}
            icon={svc.icon}
            title={svc.title}
            description={svc.description}
          />
        ))}
      </div>

      {/* Bonus: Expandable service details (one example) */}
      <section className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-primary">
          Learn More About “Dental Implants”
        </h3>
        <details className="border rounded-lg bg-white shadow-md p-6">
          <summary className="cursor-pointer font-medium mb-2">
            What are Dental Implants?
          </summary>
          <p className="mt-2 text-gray-700">
            Dental implants are titanium posts surgically placed into your jawbone, acting as artificial tooth roots. Once healed, they support crowns, bridges, or dentures. Implants look, feel, and function like natural teeth—and with proper care, can last a lifetime.
          </p>
        </details>
      </section>
    </div>
  );
}

export default Services;
