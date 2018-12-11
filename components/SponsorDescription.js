import theme from '../theme/theme.js'

const SponsorDescription = (props) => (
    <div className="holder">
        <div className="top">
            {props.name}
        </div>
        <div className="bottomBackground">
            <div className="bottom">
                {props.description}
            </div>
        </div>

        <style jsx>
        {`
            .holder {
                display: flex;
                flex-direction: column;
                position: relative;
                height: 90px;
            }
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

export default SponsorDescription