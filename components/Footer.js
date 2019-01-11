import Link from 'next/link'
import theme from '../theme/theme.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <footer>
        <ul>
            <li>
                <Link href="/code-of-conduct">
                    <a target="_blank">Code of Conduct</a>
                </Link>
            </li>
            <li>
                <Link href="https://twitter.com/dddeastmidlands">
                    <a target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
            </li>
            <li>
                <Link href="https://github.com/DDDEastMidlandsLimited/dddem-web">
                    <a target="_blank"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/dddeastmidlands/?hl=en">
                    <a target="_blank"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/company/ddd-east-midlands-limited/">
                    <a target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </li>
            <li>
                <Link href="mailto:jessica@dddeastmidlands.com">
                    <a target="_blank">Contact</a>
                </Link>
            </li>
        </ul>
        <style jsx>
            {`
            footer {
                width: 100vw;
                background-color: ${ theme.palette.primary };
                padding: 50px 0;
                margin-top: 50px;
            }
            ul {
                display: flex;
                margin: 0;
                padding: 10px;
                flex-flow: row;
                justify-content: space-evenly;
                flex-wrap: nowrap;
            }
            li {
                margin: 0;
                padding: 10px;
                list-style: none;
                list-style-type: none;
                text-align: center;
                flex-basis: 0;
                flex-grow: 1;
            }
            a {
                text-decoration: none;
                font-family: ${ theme.font.default };
                color: ${ theme.palette.light };
            }
            `}
        </style>
    </footer>
)

export default Footer