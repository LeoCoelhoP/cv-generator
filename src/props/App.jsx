import { React, useState } from 'react';
import SideBar from './SideBar';
import CurriculumContainer from './CurriculumContainer';

export default function App() {
  const [cvValue, setCvValue] = useState({
    firstName: 'Leonardo Padilha',
    lastName: 'Coelho',
    profession: 'Web Developer',
    location: 'São Paulo, Brazil',
    summary:
      'Experienced Software Engineer skilled in developing front-end, modern client-side frameworks utilizing React+Redux. Seeking a position to bring an outside-of-the-box approach and exceptional ability to identify problems and create effective solutions that keep projects on track and under budget.',
    phoneNumber: '(xx) xxxx-xxxx',
    email: 'youremail@email.com',
    link: 'yourlink.com',
    university: 'Universidade de São Paulo',
    course: 'Software Engineer',
    startingYear: 2024,
    university2: 'Universidade de São Paulo',
    course2: 'Mechanical Engineer',
    startingYear2: 2020,
    university3: 'Unicamp',
    course3: 'Mathematics',
    startingYear3: 2015,
    company: 'Google',
    position: 'Web developer',
    jobStartingYear: 2022,
    jobFinishYear: '',
    company2: 'Facebook',
    position2: 'Web developer',
    jobStartingYear2: 2018,
    jobFinishYear2: 2020,
    language: 'Portuguese',
    proficiency: 'Native',
    language2: 'Enlgish',
    proficiency2: 'Advanced',
    language3: 'Spanish',
    proficiency3: 'Advanced',
    language4: 'Italian',
    proficiency4: 'Basic',
    progress: 0,
  });

  return (
    <>
      <SideBar setCvValue={setCvValue} cvValue={cvValue} />
      <CurriculumContainer cvValue={cvValue} />
    </>
  );
}
