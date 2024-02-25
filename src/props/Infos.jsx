/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

const filled = [];

export function onClickHandle(e) {
  e.preventDefault();
  window.print();
}

export default function Infos({ cvValue, setCvValue }) {
  function inputHandle(e) {
    const target = e.target.name;
    if (
      !filled.includes(target) &&
      !e.target.parentElement.parentElement.classList.contains('optional')
    ) {
      filled.push(target);
      setCvValue({
        ...{
          ...cvValue,
          [target]: e.target.value,
          progress: cvValue.progress + 1,
        },
      });
    } else {
      setCvValue({
        ...{
          ...cvValue,
          [target]: e.target.value,
        },
      });
    }
  }

  let counter = 0;
  function styleClickHandle(e) {
    const carousel = document.querySelector('.style-carousel');

    if (e.target.classList.contains('right')) {
      if (counter + 1 > 4) {
        counter = 0;
        carousel.style.transform = 'translateX(0px)';
      } else {
        counter += 1;
        carousel.style.transform = `translateX(-${counter * 370}px)`;
      }
    } else {
      console.log(counter);
      if (counter - 1 < 0) {
        counter = 4;
        carousel.style.transform = 'translateX(-1470px)';
      } else {
        counter -= 1;
        carousel.style.transform = `translateX(-${counter * 370}px)`;
      }
    }
    const styleName = document.querySelector('.style-name');
    const bg = document.querySelector('.curriculum-background');
    if (bg) {
      if (counter === 0) {
        styleName.textContent = 'Default';
        bg.style.backgroundImage = 'none';
      }
      if (counter === 1) {
        styleName.textContent = 'Gray Header';
        bg.style.backgroundImage = 'linear-gradient(#ebebeb 17%, #fff 17%)';
      }
      if (counter === 2) {
        console.log('Leo');
        styleName.textContent = 'Gray Sidebar';
        bg.style.backgroundImage =
          'linear-gradient(90deg, #fff 65%,#ebebeb 65%)';
      }
      if (counter === 3) {
        styleName.textContent = 'Gradient Sidebar';
        bg.style.backgroundImage = `linear-gradient(
          to right,
          #fff,
          65%,
          #d16ba5 65%,
          #c777b9,
          #ba83ca,
          #aa8fd8,
          #9a9ae1,
          #8aa7ec,
          #79b3f4
        )`;
      }
      if (counter === 4) {
        styleName.textContent = 'Gradient Header';
        bg.style.backgroundImage = `linear-gradient(
          #d16ba5,
          #c777b9,
          #ba83ca,
          #aa8fd8,
          #9a9ae1,
          #8aa7ec,
          #79b3f4 17%,
          #fff 17%
        )`;
      }
    }
  }

  return (
    <div className="infos">
      <form>
        {/* Basic Infos */}
        <h2 className="basic-info-title">Basic Info</h2>
        <fieldset>
          <legend>First Name:</legend>
          <input
            type="text"
            name="firstName"
            placeholder="Leonardo"
            onChange={inputHandle}
          />
        </fieldset>
        <fieldset>
          <legend>Last Name:</legend>
          <input
            type="text"
            name="lastName"
            placeholder="Coelho"
            onChange={inputHandle}
          />
        </fieldset>
        <fieldset>
          <legend>Professional Title:</legend>
          <input
            type="text"
            name="profession"
            placeholder="Web Developer"
            onChange={inputHandle}
          />
        </fieldset>
        <fieldset>
          <legend>Location:</legend>
          <input
            type="text"
            name="location"
            placeholder="São Paulo, Brazil"
            onChange={inputHandle}
          />
        </fieldset>
        <fieldset>
          <legend>A summary about yourself:</legend>
          <textarea name="summary" onChange={inputHandle} />
        </fieldset>
        {/* // Contact Info */}
        <h2 className="basic-info-title">Contact Info</h2>
        <fieldset>
          <legend>Phone Number:</legend>
          <input
            type="number"
            name="phoneNumber"
            placeholder="(xx) xxxx-xxxx"
            onChange={inputHandle}
          />
        </fieldset>
        <fieldset>
          <legend>Email:</legend>
          <input
            type="text"
            name="email"
            placeholder="youremail@email.com"
            onChange={inputHandle}
          />
        </fieldset>
        <fieldset>
          <legend>Link(Portifolio/LinkedIn):</legend>
          <input
            type="text"
            name="link"
            placeholder="yourlink.com"
            onChange={inputHandle}
          />
        </fieldset>
        {/* Education */}
        <h2 className="education-info-title" onChange={inputHandle}>
          Education
        </h2>
        <fieldset>
          <legend>University/Institution:</legend>
          <input
            type="text"
            name="university"
            placeholder="Universidade de São Paulo"
            onChange={inputHandle}
          />
        </fieldset>

        <fieldset>
          <legend>Course </legend>
          <input
            type="text"
            name="course"
            placeholder="Course"
            onChange={inputHandle}
          />
        </fieldset>
        <fieldset>
          <legend>Starting Year:</legend>
          <input
            type="text"
            name="startingYear"
            onChange={inputHandle}
            placeholder="2024"
          />
        </fieldset>
        <fieldset>
          <legend>Finish Year:</legend>
          <input
            type="text"
            name="finishYear"
            onChange={inputHandle}
            placeholder="present"
          />
        </fieldset>

        <fieldset className="optional">
          <legend>Optional:</legend>

          <fieldset>
            <legend>University/Institution:</legend>
            <input
              type="text"
              name="university2"
              placeholder="Universidade de São Paulo"
              onChange={inputHandle}
            />
          </fieldset>
          <fieldset>
            <legend>Course </legend>
            <input
              type="text"
              name="course2"
              placeholder="Course"
              onChange={inputHandle}
            />
          </fieldset>
          <fieldset>
            <legend>Starting Year:</legend>
            <input
              type="text"
              name="startingYear2"
              onChange={inputHandle}
              placeholder="2024"
            />
          </fieldset>
          <fieldset>
            <legend>Finish Year:</legend>
            <input
              type="text"
              name="finishYear2"
              onChange={inputHandle}
              placeholder="present"
            />
          </fieldset>
          <fieldset>
            <legend>University/Institution:</legend>
            <input
              type="text"
              name="university3"
              placeholder="Universidade de São Paulo"
              onChange={inputHandle}
            />
          </fieldset>
          <fieldset>
            <legend>Course </legend>
            <input
              type="text"
              name="course3"
              placeholder="Course"
              onChange={inputHandle}
            />
          </fieldset>
          <fieldset>
            <legend>Starting Year:</legend>
            <input
              type="text"
              name="startingYear3"
              onChange={inputHandle}
              placeholder="2024"
            />
          </fieldset>
          <fieldset>
            <legend>Finish Year:</legend>
            <input
              type="text"
              name="finishYear3"
              onChange={inputHandle}
              placeholder="present"
            />
          </fieldset>
        </fieldset>

        {/* Languages */}
        <h2 className="education-info-title" onChange={inputHandle}>
          Language
        </h2>
        <fieldset>
          <legend>Language:</legend>
          <input
            type="text"
            name="language"
            placeholder="Portuguese"
            onChange={inputHandle}
          />
        </fieldset>

        <fieldset>
          <legend>Proficiency Level:</legend>
          <input
            type="text"
            name="proficiency"
            placeholder="Native"
            onChange={inputHandle}
          />
        </fieldset>

        <fieldset className="optional">
          <legend>Optional:</legend>

          <fieldset>
            <legend>Language 2:</legend>
            <input
              type="text"
              name="language2"
              placeholder="English"
              onChange={inputHandle}
            />
          </fieldset>

          <fieldset>
            <legend>Proficiency Level 2:</legend>
            <input
              type="text"
              name="proficiency2"
              placeholder="Advanced"
              onChange={inputHandle}
            />
          </fieldset>
          <fieldset>
            <legend>Language 3:</legend>
            <input
              type="text"
              name="language3"
              placeholder="Spanish"
              onChange={inputHandle}
            />
          </fieldset>

          <fieldset>
            <legend>Proficiency Level 3:</legend>
            <input
              type="text"
              name="proficiency3"
              placeholder="Advanced"
              onChange={inputHandle}
            />
          </fieldset>
          <fieldset>
            <legend>Language 4:</legend>
            <input
              type="text"
              name="language4"
              placeholder="Italian"
              onChange={inputHandle}
            />
          </fieldset>

          <fieldset>
            <legend>Proficiency Level 4:</legend>
            <input
              type="text"
              name="proficiency4"
              placeholder="Basic"
              onChange={inputHandle}
            />
          </fieldset>
        </fieldset>

        {/* Previous Work EXperience */}
        <h2 className="education-info-title">Previous Experience</h2>

        <fieldset>
          <legend>Company:</legend>
          <input
            type="text"
            name="company"
            placeholder="Google"
            onChange={inputHandle}
          />
        </fieldset>

        <fieldset>
          <legend>Position:</legend>
          <input
            type="text"
            name="position"
            placeholder="Web Developer"
            onChange={inputHandle}
          />
        </fieldset>

        <fieldset>
          <legend>Starting Year:</legend>
          <input
            type="text"
            name="jobStartingYear"
            placeholder="2020"
            onChange={inputHandle}
          />
        </fieldset>

        <fieldset>
          <legend>Finish Year:</legend>
          <input
            type="text"
            name="jobFinishYear"
            placeholder="2024"
            onChange={inputHandle}
          />
        </fieldset>

        <fieldset className="optional">
          <legend>Optional:</legend>
          <fieldset>
            <legend>Company:</legend>
            <input
              type="text"
              name="company2"
              placeholder="Facebook"
              onChange={inputHandle}
            />
          </fieldset>
          <fieldset>
            <legend>Position:</legend>
            <input
              type="text"
              name="position2"
              placeholder="Web Developer"
              onChange={inputHandle}
            />
          </fieldset>

          <fieldset>
            <legend>Starting Year:</legend>
            <input
              type="text"
              name="jobStartingYear2"
              placeholder="2018"
              onChange={inputHandle}
            />
          </fieldset>
          <fieldset>
            <legend>Finish Year:</legend>
            <input
              type="text"
              name="jobFinishYear2"
              placeholder="2020"
              onChange={inputHandle}
            />
          </fieldset>
        </fieldset>
        {/* STYLE */}
        <fieldset className="styles">
          <h2 className="education-info-title">Style</h2>
          <p>
            <span className="arrow left" onClick={styleClickHandle} />
            <span className="arrow left" onClick={styleClickHandle} />
            <span className="style-name">&#160;Default </span>
            <span className="arrow right" onClick={styleClickHandle} />
            <span className="arrow right" onClick={styleClickHandle} />
          </p>
          <div className="style-carousel">
            <img
              src="./public/styles/default.png"
              width="350px"
              alt="Default style"
            />
            <img
              src="./public/styles/2.png"
              width="350px"
              alt="Gray Header style"
            />
            <img
              src="./public/styles/3.png"
              width="350px"
              alt="Gray Sidebar style"
            />
            <img
              src="./public/styles/1.png"
              width="350px"
              alt="Gradient Sidebar style"
            />
            <img
              src="./public/styles/4.png"
              width="350px"
              alt="Gradient Header style"
            />
          </div>
        </fieldset>
        <button type="button" className="download" onClick={onClickHandle}>
          Download Cv
        </button>
      </form>
    </div>
  );
}
