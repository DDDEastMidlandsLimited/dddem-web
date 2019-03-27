import React from 'react'
import { initGA, logPageView } from '../utils/analytics'
import Navigation from './Navigation.js'
import Footer from './Footer.js'
import theme from "../theme/theme";

// TODO: Add to application config start
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(
    faBars,
    faTimes,
    faInstagram,
    faTwitter,
    faGithub,
    faLinkedin
);

import GlobalHead from "./Head";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    }

    render() {
        return (
            <div className="container">
                <GlobalHead />
                <Navigation />
                {this.props.children}
                <Footer />
                <style jsx global>{`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: ${ theme.font.default};
                        font-size: ${ theme.font.sizes.desktop.body};
                    }
                    h2 {
                        font-size: ${ theme.font.sizes.desktop.subtitle1};
                        text-align: left;
                        color: ${ theme.palette.secondary};
                    }
                    .ticket-header{
                        margin-top: 5%;
                        margin-bottom: 2%;
                    }
                    p{
                        line-height: 1.5;
                    }
                    p, a {
                        font-size: ${ theme.font.sizes.desktop.body};
                        color: ${ theme.palette.dark};
                        line-height: 1.5;
                    }
                    a {
                        color: ${ theme.palette.primary};
                    }

                    a:before,
                    a:after
                    {
                        content: ' ';
                    }

                    li{
                        line-height: 1.5;
                    }

                    .container {
                        width: 100vw;
                    }

                    .aligncenter{
                        text-align: center;
                    }

                    .smallspace{
                        margin-right: 15px;
                    }
                    
                    .boxedItems {
                        display: flex;
                        margin: 0;
                        padding: 20px;
                        flex-flow: row;
                        justify-content: space-evenly;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .boxItem {
                        width: 170px;
                        height: 90px;
                        text-align: center;
                        border-radius: ${theme.sizes.borderRadiusMobile};
                        background-color: ${theme.palette.quaternary};
                        padding: 40px 15px;
                        margin: 10px;
                        display: flex;
                        flex-direction: column;
                        position: relative;
                    }

                    @media (min-width: 600px) {
                        .boxItem {

                                border-radius: ${theme.sizes.borderRadius};
                        }
                    }
                `}</style>

            </div>
        )
    }
}
