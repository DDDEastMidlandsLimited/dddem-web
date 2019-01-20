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
                border: 5px solid  ${theme.palette.light};
                background:  ${theme.palette.light};
                height:120px;
                margin-top: 10px;
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