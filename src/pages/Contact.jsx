import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errs.email = 'Invalid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Simulate sending data with Axios to a placeholder endpoint
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSubmitStatus('Message sent successfully! 😊');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
        Contact Us
      </h2>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white shadow-md rounded-lg p-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:border-primary`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:border-primary`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full border ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:border-primary`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:border-primary`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-900 transition"
            >
              Send Message
            </button>
            {submitStatus && (
              <p className="mt-4 text-green-600 font-medium">{submitStatus}</p>
            )}
          </form>
        </div>

        {/* Contact Information + Google Map */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Get in Touch
            </h3>
            <p className="text-gray-700">
              <i className="bi bi-telephone-fill mr-2 text-accent"></i>
              Phone: +1 (555) 123-4567
            </p>
            <p className="text-gray-700">
              <i className="bi bi-envelope-fill mr-2 text-accent"></i>
              Email: info@todaysdental.com
            </p>
            <p className="text-gray-700">
              <i className="bi bi-geo-alt-fill mr-2 text-accent"></i>
              Address: 123 Smile Street, Toothville, CA 90210
            </p>
          </div>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428834.5853378947!2d-97.9001114109375!3d32.8910237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd9723c18bfe7%3A0xb2ba6d8976378765!2sToday%20Dental%20of%20Keller!5e0!3m2!1sen!2sin!4v1748098289861!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
