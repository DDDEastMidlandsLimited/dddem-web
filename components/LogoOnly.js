import theme from '../theme/theme.js'

const LogoOnly = (props) => (
    <div className="notablebox">
            <img src={props.logo.image} />
        <style jsx>
            {`
                .notablebox{
                    width:100%;
                    margin-bottom: 15px;    
                    float: left;
                    width: 33.33%;
                    padding: 10px;
                    height: 250px;
                }

                img {
                    width: 250px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
            `}
        </style>
    </div>
)

export default LogoOnly