import Link from 'next/link'
import theme from '../theme/theme.js'

const Footer = () => (
    <footer>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
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
    </footer>
)

export default Footer