import theme from '../theme/theme.js'

const ImportantDate = (props) => (

    <div className="importantDate">
        <div className="description">
            {props.dates.name}
        </div>
        <div className="date">
            {props.dates.date}
        </div>
        <style jsx>
            {`
                .importantDate {
                    width: 170px;
                    height: 90px;
                        text-align: center;
                        border-radius: ${theme.sizes.borderRadiusMobile};
                        background-color: ${theme.palette.primary};
                        padding: 40px 15px;
                        margin: 10px;
                    display: flex;
                    flex-direction: column;
                }

                .description {
                        color: ${theme.palette.light};
                        font-weight: bold;
                        font-size: ${theme.font.sizes.mobile.subtitle1};
                        flex-grow: 1;
                }

                .date {
                        color: ${theme.palette.light};
                }

                @media (min-width: 600px) {
                        .importantDate {

                                border-radius: ${theme.sizes.borderRadius};
                        }
                }
            `}
        </style>
    </div>

)

export default ImportantDate