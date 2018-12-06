import theme from '../theme/theme.js'

const Partner = (props) => (
    <div className="boxItem">

        <div className="top">
            {props.partner.name}
        </div>
        <div className="bottom">
            {props.partner.description}
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

export default Partner