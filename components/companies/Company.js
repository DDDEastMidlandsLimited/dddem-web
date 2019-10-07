import theme from '../../theme/theme'
import ExternalLink from '../ExternalLink'

const Company = (props) => (
    <div>
         <ExternalLink href={props.partner.link} target="_blank" category="logo" eventType={props.partner.name}>
            <img src={props.image} alt={`Click to go to the ${props.partner.name} site`}/>
         </ExternalLink>
         
        <style jsx>
        {`
            div {
                border: 5px solid  ${theme.palette.light};
                background:  ${theme.palette.light};
            }
            img {   
                width: 100%;         
                margin-top: 4px;
            }
            div:hover {       
                background: ${theme.palette.quaternary};
                border-radius: 16px;
            }
        `}
        </style>
    </div>
)

export default Company