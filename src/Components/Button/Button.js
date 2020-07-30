import React from 'react';
import './Button.css';

function Button({btnName, link}) {
  return (
    <div >
          <a href={link} className="button">
         {btnName}
          </a>
    </div>
  );
}

export default Button;