import React from 'react';
import theme from '../../theme/theme';

export default function BackToAboutButton() {
  return (
    <div className="backToAboutButtonContainer">
      <button className="backToAboutButton">
        <a
          href="../../about-the-conference/#organisers"
          rel="noreferrer"
        >
          Back To About
        </a>
      </button>
      <style jsx>
        {`
          .backToAboutButtonContainer {
            text-align-last: center;
          }
          .backToAboutButton {
            align: ${theme.palette.quaternary};
            font-weight: bold;
            font-size: ${theme.font.sizes.mobile.subtitle1};
            flex-grow: 1;
            border-radius: 12px;
            padding: 10px 10px 10px 10px;
            color: ${theme.palette.primary};
            border: 2px solid ${theme.palette.primary};
            background-color: ${theme.palette.light};
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .backToAboutButton a {
            text-decoration: none;
          }

          .backToAboutButton:hover {
            background-color: ${theme.palette.primary};
          }

          .backToAboutButton a:hover {
            color: ${theme.palette.light};
          }
        `}
      </style>
    </div>
  );
}
