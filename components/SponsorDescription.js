import theme from '../theme/theme.js'

const SponsorDescription = (props) => (
    <div>
        <div className="bottomBackground">
            <div className="bottom">
                {props.description}
            </div>
        </div>

        <style jsx>
        {`
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