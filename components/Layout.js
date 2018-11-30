import Navigation from './Navigation.js'
import Footer from './Footer.js'
import theme from "../theme/theme";

import GlobalHead from "./Head";

const Layout = (props) => (
    <div>
        <GlobalHead />
        <Navigation />
        {props.children}
        <Footer />
        <style jsx global>{`
            body {
                margin: 0;
                padding: 0;
                font-family: ${ theme.font.default };
            }
            h2, a, p {
                color: ${ theme.palette.primary };
            }
            h2 {
                font-size: ${ theme.font.sizes.desktop.subtitle2 };
                text-align: center;
            }
            p {
            font-size: ${ theme.font.sizes.desktop.body };
            }
        `}</style>

    </div>

)

export default Layout