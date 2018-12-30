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
                    width:100%;
                    border: 1px dotted ${theme.palette.quaternary};
                    margin-bottom: 15px;
                }

                .column img {
                    margin-top: 20px;
                    margin-left: 15%;
                    width: 250px;
                    display: inline-block;
                }
            `}
        </style>
    </div>
)

export default PartnerWithDescription