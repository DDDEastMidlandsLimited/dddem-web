import theme from '../theme/theme.js'
import ExternalLink from './ExternalLink'

const Company = (props) => (
    <div>
         <ExternalLink href={props.partner.link} target="_blank" category="logo" eventType={props.partner.name}>
            <img src={props.image}/>
         </ExternalLink>
         
        <style jsx>
        {`
            div {
                width: 33%;
                border: 5px solid white;
                background: white;
            }
            img {   
                width: 100%;         
                margin-top: 4px;
            }

            div:hover {                    
                background: ${theme.palette.light}!important;
                border: 3px solid ${theme.palette.primary}!important;
                border-radius: 16px;
            }
        `}
        </style>
    </div>
)

export default Company