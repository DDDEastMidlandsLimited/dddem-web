import React from 'react';
import theme from '../../theme/theme';

export default function CrewBackButton() {
  return (
    <div className="crewBackButtonContainer">
      <button className="crewBackButton">
        <a
          href="../../organisers-and-crew/conference-crew-information/"
          rel="noreferrer"
        >
          Back To Conference Crew
        </a>
      </button>
      <style jsx>
        {`
          .crewBackButtonContainer {
            text-align-last: center;
          }
          .crewBackButton {
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
          .crewBackButton a {
            text-decoration: none;
          }

          .crewBackButton:hover {
            background-color: ${theme.palette.primary};
          }

          .crewBackButton a:hover {
            color: ${theme.palette.light};
          }
        `}
      </style>
    </div>
  );
}
