import React from 'react';
import theme from '../../theme/theme';

export default function SponsorshipTiers({ sponsorship }) {
  return (
    <div className="boxItem">
      <div tabIndex="0" className="top">
        {sponsorship.name}
      </div>
      <div
        className={
          sponsorship.sold == true
            ? 'pastBottomBackground'
            : 'bottomBackground'
        }
      >
        <div
          tabIndex="0"
<<<<<<< HEAD
          className={sponsorship.sold == true ? 'strikeBottom' : 'bottom'}
=======
          className={
            sponsorship.sold == true ? 'strikeBottom' : 'bottom'
          }
>>>>>>> b829117074689feabaa40e8ef448b7e5f0b0df32
        >
          {sponsorship.status}
        </div>
      </div>
      <style jsx>
        {`
                .top {
                        color: ${theme.palette.tertiary};
                        font-weight: bold;
                        font-size: ${theme.font.sizes.mobile.subtitle1};
                        flex-grow: 1;
                }

                .bottom {
                        color: ${theme.palette.light};
                        margin-left: -30px;
                }
            
                .strikeBottom {
                  color: ${theme.palette.light};
                  margin-left: -30px;
                  text-decoration: line-through;
                }

                .bottomBackground{
                    background-color: ${theme.palette.primary};
                    padding: 5px 0px 5px 30px;
                    width 100%;
                    margin-left: -15px;
                }

                .pastBottomBackground{
                    background-color: ${theme.palette.secondary};
                    padding: 5px 0px 5px 30px;
                    width 100%;
                    margin-left: -15px;
                }
            `}
      </style>
    </div>
  );
}
