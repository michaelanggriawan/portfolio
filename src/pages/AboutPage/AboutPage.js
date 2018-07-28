import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './globalStyle';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About Me</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Hi <span className="highlight">There !</span> and
              everyone.
            </p>
            <p>
              You are here means that you want to get know me. Ok, So{' '}
              <span className="highlight"> you</span> already know that my name is 
              Michael Anggriawan, I'm from indonesian, Therefore, Ang is my family name and please
              call me Michael{' '}
            </p>
            <p>
              I'm so excited with <span className="highlight">web development</span>.
              I have been learning programming since <i>17 years Old,</i>{' '}
              <span className="highlight">
                It has made me good in a lot of programming
              </span>{' '}
              (except animation though) and had so much fun along the way.
            </p>
            <p>
              React-Redux, Node.js, JavaScript, ExpressJs, Docker and
              I am also interesting with making the web look beaoutful with SASS/CSS.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
