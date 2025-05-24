import React from 'react';
import { FaBriefcaseMedical, FaTeeth, FaTooth, FaUserMd } from 'react-icons/fa';
import { GiMedicalThermometer } from 'react-icons/gi';

function ServiceCard({ icon, title, description }) {

    let renderedIcon;

    if (title === "Teeth Whitening") {
        renderedIcon = <FaTooth className="text-accent" />;
    } else if (title === "Dental Surgery") {
        renderedIcon = <FaUserMd className="text-accent" />;
    } else if (title === "Braces") {
        renderedIcon = <FaTeeth className="text-accent" />;
    } else if (title === "Restorative Fillings") {
        renderedIcon = <GiMedicalThermometer className="text-accent" />;
    } else if (title === "Periodontal Therapy") {
        renderedIcon = <FaBriefcaseMedical className="text-accent" />;
    } else {
        renderedIcon = <i className={`bi bi-${icon}`}></i>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
            <div className="text-4xl text-accent mb-4">
                
                    {renderedIcon}
                

            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export default ServiceCard;
