import theme from '../theme/theme.js'

const Sponsor = (props) => (
    <div className="boxItem">
        <div className="top">
            {props.sponsor.name}
        </div>
        <div className="bottomBackground">
            <div className="bottom">
                {props.sponsor.description}
            </div>
        </div>
        <style jsx>
            {`
                .top {
                        color: ${theme.palette.tertiary};
                        font-weight: bold;
                        font-size: ${theme.font.sizes.mobile.subtitle1};
                        flex-grow: 1;
                }

                .bottom {
                        color: ${theme.palette.light};
                        margin-left: -25px;
                }

                .bottomBackground{
                    background-color: ${theme.palette.primary};
                    padding: 5px 0px 5px 30px;
                    width 100%;
                    margin-left: -15px;
                }
            `}
        </style>
    </div>
)

export default Sponsor