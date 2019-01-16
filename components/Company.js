import ExternalLink from './ExternalLink'

const Company = (props) => (
    <div>
         <ExternalLink href={props.link} target="_blank" category="logo" eventType={props.name}>
            <img src={props.image}/>
         </ExternalLink>
         
        <style jsx>
        {`
            div {
                border: 5px solid white;
                background: white;
            }
            img {            
                width: 33%;
                margin-top: 4px;
            }
        `}
        </style>
    </div>
)

export default Company