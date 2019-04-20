import SponsorImage from './SponsorImage'
import SponsorDescription from './SponsorDescription'

const Sponsor = (props) => (
    <div className="boxItem">
        {props.sponsor.soldOutImage  
            ? <SponsorImage image={props.sponsor.soldOutImage} />
            : <SponsorDescription description={props.sponsor.description} name={props.sponsor.name} />
        }       
    </div>
)

export default Sponsor