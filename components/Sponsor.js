import SponsorImage from './SponsorImage.js';
import SponsorDescription from './SponsorDescription.js';

const Sponsor = (props) => (
    <div className="boxItem">
        {props.sponsor.soldOutImage  
            ? <SponsorImage image={props.sponsor.soldOutImage} />
            : <SponsorDescription description={props.sponsor.description} name={props.sponsor.name} />
        }       
        <style jsx>
            {`
                
            `}
        </style>
    </div>
)

export default Sponsor