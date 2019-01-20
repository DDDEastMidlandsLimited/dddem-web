import Link from 'next/link'
import theme from '../theme/theme.js'
import ExternalLink from './ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = () => (
    <div>

        <a href="#main-menu"
           className="menu-toggle"
           role="button"
           id="main-menu-toggle"
           aria-expanded="false"
           aria-controls="main-menu"
           aria-label="Open main menu">
            <span className="sr-only">Open main menu</span>
            <span aria-hidden="true">
                <FontAwesomeIcon icon={"bars"}/>
            </span>
        </a>

        <nav id="main-menu"
             className="main-menu"
             role="navigation"
             aria-expanded="false"
             aria-label="Main menu">
            <a href="#main-menu-toggle"
               className="menu-close"
               role="button"
               id="main-menu-close"
               aria-expanded="false"
               aria-controls="main-menu"
               aria-label="Close main menu">
                <span className="sr-only">Close main menu</span>
                <span aria-hidden="true">
                    <FontAwesomeIcon icon={"times"}/>
                </span>
            </a>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/notable-companies">
                        <a>Notable Companies</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/venue">
                        <a>Venue</a>
                    </Link>
                </li>
                <li>
                    <Link href="/sponsorship">
                        <a>Sponsorship</a>
                    </Link>
                </li>                
                <li>
                    <Link href="/faq">
                        <a>FAQ</a>
                    </Link>
                </li>
                <li className="external-link">
                    <ExternalLink href="https://medium.com/dddeastmidlands" target="_blank" category="navigation" eventType="blog">
                        Blog
                    </ExternalLink>
                </li>
                <li>
                    <Link href="/code-of-conduct">
                        <a>Code of Conduct</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <a href="#main-menu-toggle"
           className="backdrop"
           tabIndex="-1"
           aria-hidden="true"
           hidden></a>

        <style jsx>
            {`
                ul {
                    display: flex;
                    margin: 0;
                    padding: 20px;
                    flex-flow: column;
                    justify-content: flex-start;
                    flex-wrap: nowrap;
                }
                li {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    list-style-type: none;
                }
                a {
                    text-decoration: none;
                    padding: 20px;
                    font-family: ${theme.font.default};
                    color: ${theme.palette.primary};
                }

                .main-menu .external-link:hover,
                .main-menu .external-link:focus
                 {                    
                    background: ${theme.palette.primary};
                    color: ${theme.palette.light};
                    text-decoration: underline;
                }

                .main-menu .external-link {
                    border-bottom: 1px solid #383838;
                }

                /* Screen reader only */
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0,0,0,0);
                    border: 0;
                }

                /* Button styling */
                .menu-toggle {
                    display: inline-block;
                    padding: .75em 15px;
                    line-height: 1em;
                    font-size: 1em;
                    color: #333;
                }

                .main-menu {
                    position: absolute;
                    left: -200px;
                    top: 0;
                    height: 100%;
                    overflow-y: scroll;
                    overflow-x: visible;
                    transition: left 0.3s ease,
                              box-shadow 0.3s ease;
                    z-index: 999;
                }

                .main-menu ul {
                    list-style: none;
                    margin: 0;
                    padding: 2.5em 0 0;
                    /* Hide shadow w/ -8px while 'closed' */
                    -webkit-box-shadow: -8px 0 8px rgba(0,0,0,.5);
                     -moz-box-shadow: -8px 0 8px rgba(0,0,0,.5);
                          box-shadow: -8px 0 8px rgba(0,0,0,.5);
                    min-height: 100%;
                    width: 200px;
                    background: ${theme.palette.dark};
                }

                .main-menu a {
                    display: block;
                    padding: .75em 15px;
                    line-height: 1em;
                    font-size: 1em;
                    color: #fff;
                    text-decoration: none;
                    border-bottom: 1px solid #383838;
                }

                .main-menu li:first-child a {
                    border-top: 1px solid #383838;
                }

                .main-menu a:hover,
                .main-menu a:focus {
                    padding: .75em 15px;
                    background: ${theme.palette.primary};
                    color: ${theme.palette.light} !important;
                    text-decoration: underline;
                }

                .main-menu .menu-close {
                    position: absolute;
                    right: 0;
                    top: 0;
                }

                .main-menu:target,
                .main-menu[aria-expanded="true"] {
                    left: 0;
                    outline: none;
                    -moz-box-shadow: 3px 0 12px rgba(0,0,0,.25);
                    -webkit-box-shadow: 3px 0 12px rgba(0,0,0,.25);
                    box-shadow: 3px 0 12px rgba(0,0,0,.25);
                }

                .main-menu:target .menu-close,
                .main-menu[aria-expanded="true"] .menu-close {
                    z-index: 1001;
                }

                .main-menu:target ul,
                .main-menu[aria-expanded="true"] ul {
                    position: relative;
                    z-index: 1000;
                }

                .main-menu:target + .backdrop,
                .main-menu[aria-expanded="true"] + .backdrop {
                    position: absolute;
                    display: block;
                    content: "";
                    left: 0;
                    top: 0;
                    width: 30%;
                    height: 100%;
                    z-index: 998;
                    background: ${ theme.palette.dark };
                    cursor: default;
                }

                @supports (position: fixed) {
                    .main-menu,
                    .main-menu:target + .backdrop,
                    .main-menu[aria-expanded="true"] + .backdrop {
                        position: fixed;
                    }
                }

                @media (min-width: 768px) {

                    .main-menu .menu-close {
                        display: none;
                    }
                    .menu-toggle {
                        display: none;
                    }

                    /* Undo positioning of off-canvas menu */
                    .main-menu {
                        position: relative;
                        left: auto;
                        top: auto;
                        height: auto;
                    }

                    .main-menu ul {
                        flex-flow: row;
                        justify-content: space-evenly;
                        flex-wrap: nowrap;
                        display: flex;

                        /* Undo off-canvas styling */
                        padding: 0;
                        -webkit-box-shadow: none;
                        -moz-box-shadow: none;
                        box-shadow: none;
                        height: auto;
                        width: auto;
                        background: none;
                    }

                    .main-menu a {
                        color: ${theme.palette.primary};
                        border: 0 !important; /* Remove borders from off-canvas styling */
                    }

                    .main-menu .external-link {
                        border-bottom: 0px !important;
                    }

                    .main-menu a:hover,
                    .main-menu a:focus {
                        background: ${theme.palette.primary};
                        color: ${theme.palette.light} !important;
                        text-decoration: underline;
                    }
                }
            `}
        </style>
    </div>

)

export default Navigation