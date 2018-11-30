import Link from 'next/link'
import theme from '../theme/theme.js'

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
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
                <Link href="/notable-companies">
                    <a>Notable Companies</a>
                </Link>
            </li>
            <li>
                <Link href="/sponsorship">
                    <a>Sponsorship</a>
                </Link>
            </li>
            <li>
                <Link href="/code-of-conduct">
                    <a>Code of Conduct</a>
                </Link>
            </li>
        </ul>
        <style jsx>
            {`
            ul {
                display: flex;
                margin: 0;
                padding: 20px;
                flex-flow: row;
                justify-content: space-evenly;
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
                font-family: ${ theme.font.default };
                color: ${ theme.palette.primary };
            }
            `}
        </style>
    </nav>
)

export default Navigation