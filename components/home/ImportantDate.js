import theme from '../../theme/theme'

const ImportantDate = (props) => (

    <div className="boxItem">
        <div  tabIndex="0" className="top">
            {props.dates.name}
        </div>
        <div className="bottomBackground">
        <div  tabIndex="0" className="bottom">
            {props.dates.date}
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
                        margin-left: -30px;
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

export default ImportantDate