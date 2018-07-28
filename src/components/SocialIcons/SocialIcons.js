import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/michaelanggriawan" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/michaelanggria1" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/uchiha.ashura.9" style={ { color: colorPrimary } }><i className="fab fa-facebook"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@michaelanggriawan941" style={ { color: colorPrimary } }><i className="fab fa-medium"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;