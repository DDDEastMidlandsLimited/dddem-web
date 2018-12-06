import theme from '../theme/theme.js'

const Sponsor = (props) => (
    <div className="boxItem">
        <div className="top">
            {props.sponsor.name}
        </div>
        <div className="bottom">
            {props.sponsor.description}
        </div>
        <style jsx>
            {`
                .top {
                        color: ${theme.palette.light};
                        font-weight: bold;
                        font-size: ${theme.font.sizes.mobile.subtitle1};
                        flex-grow: 1;
                }

                .bottom {
                        color: ${theme.palette.light};
                }
            `}
        </style>
    </div>
)

export default Sponsor