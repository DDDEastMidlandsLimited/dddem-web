import React from 'react';
import theme from '../../theme/theme';

export default function SpeakersButton() {
  return (
    <div className="speakersButtonContainer">
      <button className="speakersButton">
        <a href="../speakergrid" rel="noreferrer">
          Back To Speakers
        </a>
      </button>
      <style jsx>
        {`
          .speakersButtonContainer {
            align: center;
          }
          .speakersButton {
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
          .speakersButton a {
            text-decoration: none;
          }

          .speakersButton:hover {
            background-color: ${theme.palette.primary};
          }

          .speakersButton a:hover {
            color: ${theme.palette.light};
          }
        `}
      </style>
    </div>
  );
}
