import { withRouter } from 'next/router'
import { logEvent } from '../utils/analytics'

const ExternalLink = ({ children, router, href, target, category, eventType }) => {

  const handleClick = (e) => {
    logEvent(category, eventType)
  }

  return (
    <a href={href} onClick={handleClick} target={target}>
      {children}
      <style jsx>
            {`
                a {
                    text-decoration: none;      
                    color: #FFFFFF;                 
                    display: block;
                    padding: .75em 15px;
                    line-height: 1em;
                    font-size: 1em;
                    border-bottom: 1px solid #383838;
                }

                a:hover {                    
                    background: #1A7D87;
                    color: #FFFFFF !important;
                    text-decoration: underline;
                }

                @media (min-width: 768px) {
                    a {              
                        color: #1A7D87;
                        border: 0 !important;   
                        border-bottom: none;
                    }
                }
            `}
        </style>
    </a>
    
  )
}

export default withRouter(ExternalLink)