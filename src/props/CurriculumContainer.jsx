import React from 'react';

/* eslint-disable react/prop-types */
export default function CurriculumContainer({ cvValue }) {
  const {
    firstName,
    lastName,
    profession,
    location,
    summary,
    phoneNumber,
    email,
    link,
    university,
    course,
    startingYear,
    finishYear,
    university2,
    course2,
    startingYear2,
    finishYear2,
    university3,
    course3,
    startingYear3,
    finishYear3,
    company,
    position,
    jobStartingYear,
    jobFinishYear,
    company2,
    position2,
    jobStartingYear2,
    jobFinishYear2,

    language,
    proficiency,
    language2,
    proficiency2,
    language3,
    proficiency3,
    language4,
    proficiency4,
  } = cvValue;

  const name = `${firstName} ${lastName}`;

  let courseDate;
  let courseDate2;
  let courseDate3;
  if (startingYear || finishYear) {
    courseDate = `${startingYear} - ${finishYear || 'present'}`;
  }
  if (startingYear2 || finishYear2) {
    courseDate2 = `${startingYear2} - ${finishYear2 || 'present'}`;
  }

  if (startingYear3 || finishYear3) {
    courseDate3 = `${startingYear3} - ${finishYear3 || 'present'}`;
  }

  let jobDate;
  if (jobFinishYear || jobStartingYear) {
    jobDate = `${jobStartingYear} - ${jobFinishYear || 'present'}`;
  }
  let jobDate2;
  if (jobFinishYear2 || jobStartingYear2) {
    jobDate2 = `${jobStartingYear2} - ${jobFinishYear2 || 'present'}`;
  }

  return (
    <div className="curriculum-background" style={{ backgroundColor: '#fff' }}>
      <div className="curriculum-container">
        <div className="basic-info-container">
          <div className="name-cv">{name}</div>
          <div className="profession-cv">{profession}</div>
          <div className="location-cv">{location}</div>
        </div>
        <div className="summary-container">
          <p className="summary-title-cv">{summary ? 'Summary:' : ''}</p>
          <div className="summary-cv">{summary}</div>
        </div>
        <div className="contact-container">
          <p className="contact-cv">{phoneNumber ? 'Contact:' : ''}</p>
          <div className="phone-number-cv">{phoneNumber}</div>
          <div className="email-cv">{email}</div>
          <div className="link-cv">
            <a href={`http://${link}`}>{link}</a>
          </div>
        </div>
        <div className="education-container">
          <p>{university ? 'Education:' : ''}</p>
          <div className="university-cv">{university}</div>
          <div className="course-cv">{course}</div>
          <div className="course-date">{courseDate}</div>
          <div className="university2-cv">{university2}</div>
          <div className="course-cv">{course2}</div>
          <div className="course-date">{courseDate2}</div>
          <div className="university2-cv">{university3}</div>
          <div className="course-cv">{course3}</div>
          <div className="course-date">{courseDate3}</div>
        </div>
        <div className="language">
          <p className="language-cv">{language ? 'Languages' : ':'}</p>
          <div>
            <div className="language">{language}</div>
            <div className="proficiency">{proficiency}</div>
          </div>
          <div>
            <div className="language">{language2}</div>
            <div className="proficiency">{proficiency2}</div>
          </div>
          <div>
            <div className="language">{language3}</div>
            <div className="proficiency">{proficiency3}</div>
          </div>
          <div>
            <div className="language">{language4}</div>
            <div className="proficiency">{proficiency4}</div>
          </div>
        </div>
        <div className="experience-cv">
          <p className="exp-title">{company ? 'Work Experience:' : ''}</p>
          <div className="exps">
            <div>
              <h3 className="company-cv">{company}</h3>
              <div className="position-cv">{position}</div>
              <div className="jobDate">{jobDate}</div>
            </div>
            <div>
              <h3 className="company-cv">{company2}</h3>
              <div className="position-cv">{position2}</div>
              <div className="jobDate">{jobDate2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
