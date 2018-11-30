import theme from '../theme/theme.js'

const Header = (props) => (
    <section>
        <h1>{props.title}</h1>
        <div className="logo">
            <img src="/static/ddd_avatar_300.jpg" alt="DDD East Midlands Logo" />
        </div>
        <style jsx>
            {`
            section {
                width: 100vw;
                background-color: ${ theme.palette.primary };
                padding: 50px 0;
                margin-bottom: 60px;
            }
            h1 {
                color: ${ theme.palette.light };
                text-align: center;
                font-size: ${ theme.font.sizes.desktop.headline2 };
            }
            .logo {
                text-align: center;
                margin-bottom: -110px;
                margin-top: 40px;
            }
            `}
        </style>
    </section>
)

export default Header