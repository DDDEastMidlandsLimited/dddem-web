import theme from '../theme/theme.js'

const Header = (props) => (
    <section>
        <div className="background"></div>
        <div className="logo">
            <img className="image" src="/static/ddd_avatar_300.jpg" alt="DDD East Midlands Logo" />
        </div>
        <style jsx>
            {`
            .background {
                width: 100vw;
                background-image: url('/static/banners/ddd_backround_1500x500.jpg');
                background-color: ${ theme.palette.primary };
                height: 500px;
            }
            .logo {
                text-align: center;
            }
            .image {
                margin-top: -100px;
                border-radius: ${ theme.sizes.borderRadius };
                padding: 20px 30px;
                background-color: ${ theme.palette.primary };
            }
            `}
        </style>
    </section>
)

export default Header