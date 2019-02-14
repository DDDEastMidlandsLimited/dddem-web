import theme from '../theme/theme.js'

const PartnerWithDescription = (props) => (
    <div className="row notablebox">
        <div className="column">
            <img src={props.partner.image} />
        </div>
        <div className="column">
            {props.partner.description}
        </div>
        <style jsx>
            {`
                .column {
                    float: left;
                    padding: 10px;
                    width: 45%
                }

                .notablebox{
                    width:84%;
                    height:150px;
                    border: 2px solid ${theme.palette.quaternary};
                    margin-bottom: 15px;
                }

                .column img {
                    margin-top: 20px;
                    width: 250px;
                }
            `}
        </style>
    </div>
)

export default PartnerWithDescription