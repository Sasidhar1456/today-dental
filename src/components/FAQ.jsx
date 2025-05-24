import React from 'react';

const FAQ_LIST = [
  {
    question: 'How often should I visit the dentist?',
    answer:
      'We recommend a routine check-up every 6 months to maintain optimal oral health.',
  },
  {
    question: 'Do you offer emergency dental services?',
    answer:
      'Yes! We provide same-day slots for dental emergencies. Please call us immediately.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer:
      'We accept most major insurance plans. Contact us if you have specific questions about your provider.',
  },
  {
    question: 'Are you pediatric-friendly?',
    answer:
      'Absolutely. Our gentle staff and child-friendly environment make dental visits comfortable for kids.',
  },
];

function FAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6 text-primary">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {FAQ_LIST.map((item, idx) => (
          <details
            key={idx}
            className="border border-gray-200 rounded-lg px-4 py-3 bg-white shadow-sm"
          >
            <summary className="cursor-pointer font-medium">
              {item.question}
            </summary>
            <p className="mt-2 text-gray-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
