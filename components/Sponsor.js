import theme from '../theme/theme.js'
import SponsorImage from './SponsorImage.js';
import SponsorDescription from './SponsorDescription.js';

const Sponsor = (props) => (
    <div className="boxItem">
        <div className="top">
            {props.sponsor.name}
        </div>

        {props.sponsor.soldOutImage  
            ? <SponsorImage image={props.sponsor.soldOutImage} />
            : <SponsorDescription description={props.sponsor.description} />
        }       
        <style jsx>
            {`
                .top {
                    color: ${theme.palette.tertiary};
                    font-weight: bold;
                    font-size: ${theme.font.sizes.mobile.subtitle1};
                    flex-grow: 1;
                }
            `}
        </style>
    </div>
)

export default Sponsor