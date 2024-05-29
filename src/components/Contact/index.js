import React, { useState } from 'react';

const Contact = () => {
  const [educationFields, setEducationFields] = useState([
    { degree: '', passingYear: '', cgpa: '', university: '' },
  ]);

  const handleAddField = (index) => {
    const newFields = [...educationFields];
    newFields.splice(index + 1, 0, { degree: '', passingYear: '', cgpa: '', university: '' });
    setEducationFields(newFields);
  };

  const handleRemoveField = (index) => {
    if(educationFields.length==1) return;
    const newFields = [...educationFields];
    newFields.splice(index, 1);
    setEducationFields(newFields);
  };

  const handleChange = (index, field, value) => {
    const newFields = [...educationFields];
    newFields[index][field] = value;
    setEducationFields(newFields);
  };

  return (
    <div className="formContainer">
      <section className="formSection px-32" id="educationalBackground">
        <h1 className="text-3xl mb-8 font-semibold text-left">Educational Background</h1>
        {educationFields.map((education, index) => (
          <div key={index} className="form-groups flex flex-wrap mb-6 justify-between items-end" id={`group${index}`}>
            <h2 className="w-full font-bold text-xl mb-2 educationHeading text-left">Education {index + 1}</h2>
            <div className="form-group gr flex flex-col gap-y-2">
              <label htmlFor={`degree${index}`} className="font-semibold">Degree</label>
              <input
                type="text"
                id={`degree${index}`}
                placeholder="Degree"
                className="py-2 px-3 rounded-lg border-2"
                value={education.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
              />
              <span className="error"></span>
            </div>
            <div className="form-group gr flex flex-col gap-y-2">
              <label htmlFor={`passingYear${index}`} className="font-semibold">Passing Year</label>
              <input
                type="text"
                id={`passingYear${index}`}
                placeholder="Passing Year"
                className="py-2 px-3 rounded-lg border-2"
                value={education.passingYear}
                onChange={(e) => handleChange(index, 'passingYear', e.target.value)}
              />
              <span className="error"></span>
            </div>
            <div className="form-group gr flex flex-col gap-y-2">
              <label htmlFor={`cgpa${index}`} className="font-semibold">CGPA</label>
              <input
                type="text"
                id={`cgpa${index}`}
                placeholder="CGPA"
                className="py-2 px-3 rounded-lg border-2"
                value={education.cgpa}
                onChange={(e) => handleChange(index, 'cgpa', e.target.value)}
              />
              <span className="error"></span>
            </div>
            <div className="form-group flex gr flex-col gap-y-2">
              <label htmlFor={`university${index}`} className="font-semibold">University</label>
              <input
                type="text"
                id={`university${index}`}
                placeholder="University"
                className="py-2 px-3 rounded-lg border-2"
                value={education.university}
                onChange={(e) => handleChange(index, 'university', e.target.value)}
              />
              <span className="error"></span>
            </div>
            <div className="actions flex gap-x-4">
              <button
                type="button"
                className="addBtn my-4 text-xl"
                onClick={() => handleAddField(index)}
              >
                <i className="ri-add-line"></i>
              </button>
              <button
                type="button"
                className="removeBtn my-4 text-xl text-red-600"
                onClick={() => handleRemoveField(index)}
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Contact;
