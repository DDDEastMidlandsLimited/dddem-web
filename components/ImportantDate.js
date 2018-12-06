import theme from '../theme/theme.js'

const ImportantDate = (props) => (

    <div className="boxItem">
        <div className="top">
            {props.dates.name}
        </div>
        <div className="bottom">
            {props.dates.date}
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

export default ImportantDate