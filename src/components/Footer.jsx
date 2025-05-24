import React from 'react';

function Footer() {
  return (
    <footer className="bg-headerbg text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Today’s Dental Clinic. All Rights
          Reserved.
        </p>
        <p className="text-xs mt-1">
          Designed by Sasidhar Pinjala! 🦷
        </p>
      </div>
    </footer>
  );
}

export default Footer;
